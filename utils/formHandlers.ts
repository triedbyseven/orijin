import { setupFormStepOneSchema, setupFormStepTwoSchema } from '..//utils/formValidation';
import gsap from 'gsap';

const tl = gsap.timeline();

export const onChangeText = (event, updateValue) => {
  const {
    target: { value, name },
  } = event;

  console.log(value, name);

  updateValue((prevState) => ({ ...prevState, formValues: { [name]: value } }));
};


export const nextStep = async (state, steps, updateState, updateErrors, refs) => {
  if (state.currentStep.index + 1 === state.steps.length) return;

  const values1 = { firstName: refs.firstNameRef.current.value, lastName: refs.lastNameRef.current.value };
  const values2 = { companyName: refs.companyNameRef.current.value, email: refs.emailRef.current.value, username: refs.usernameRef.current.value, password: refs.passwordRef.current.value };

  try {
    const res = state.currentStep.index === 0 ? await setupFormStepOneSchema.validate(values1, { abortEarly: false }) : await setupFormStepTwoSchema.validate(values2, { abortEarly: false })


    if (state.currentStep.index === 0) {
      updateErrors(prevState => ({
        allErrors: prevState.allErrors,
        inputErrors: {
          firstName: false,
          lastName: false,
          companyName: null,
          email: null,
          username: null,
          password: null
        }
      }));
    }

    if (state.currentStep.index === 1) {
      updateErrors(prevState => ({
        allErrors: prevState.allErrors,
        inputErrors: {
          firstName: false,
          lastName: false,
          companyName: false,
          email: false,
          username: false,
          password: false
        }
      }));
    }

    gsap.to('.active-line', 0.5, { attr: { x2: '100%' }, ease: 'power4' });
    const newIndex = state.currentStep.index + 1;
    updateState(prevState => ({ steps: prevState.steps, currentStep: steps[newIndex] }));

    tl.to(".step", { opacity: 0, ease: 'linear', duration: 0.2 });
    tl.to(".step", { xPercent: '-=' + 100, ease: 'linear', duration: 0.2 });
    tl.to(".step", { opacity: 1, ease: 'linear', duration: 0.2 });

  } catch (err) {
    let inputErrors: any = {};

    for (const key of err.inner) {
      inputErrors[key.path] = key.path ? true : false;
    };

    return updateErrors({ allErrors: err.errors, inputErrors });
  }
}

export const lastStep = (state, steps, updateState) => {
  if (state.currentStep.index === 0) return;

  setTimeout(() => {
    gsap.to('.active-line', 0.5, { attr: { x2: '0' }, ease: 'power4' });
  }, 50);

  const newIndex = state.currentStep.index - 1;
  updateState(prevState => ({ currentStep: steps[newIndex], steps: prevState.steps }));

  tl.to(".step", { opacity: 0, ease: 'linear', duration: 0.2 });
  tl.to(".step", { xPercent: '+=' + 100, ease: 'linear', duration: 0.2 });
  tl.to(".step", { opacity: 1, ease: 'linear', duration: 0.2 });
}