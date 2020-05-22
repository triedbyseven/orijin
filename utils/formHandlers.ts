import gsap from 'gsap';

const tl = gsap.timeline();

export const onChangeText = (event, updateValue) => {
  const {
    target: { value, name },
  } = event;

  console.log(value, name);

  updateValue((prevState) => ({ ...prevState, formValues: { [name]: value } }));
};


export const nextStep = (state, steps, updateState) => {
  if (state.currentStep.index + 1 === state.steps.length) return;

  gsap.to('.active-line', 0.5, { attr: { x2: '100%' }, ease: 'power4' });
  const newIndex = state.currentStep.index + 1;
  updateState(prevState => ({ steps: prevState.steps, currentStep: steps[newIndex] }));

  tl.to(".step", { y: 50, opacity: 0, ease: 'linear', duration: 0.2 });
  tl.to(".step", { xPercent: '-=' + 100, ease: 'linear', duration: 0.2 });
  tl.to(".step", { y: 0, opacity: 1, ease: 'linear', duration: 0.2 });
}

export const lastStep = (state, steps, updateState) => {
  if (state.currentStep.index === 0) return;

  setTimeout(() => {
    gsap.to('.active-line', 0.5, { attr: { x2: '0' }, ease: 'power4' });
  }, 50);

  const newIndex = state.currentStep.index - 1;
  updateState(prevState => ({ currentStep: steps[newIndex], steps: prevState.steps }));

  tl.to(".step", { y: 50, opacity: 0, ease: 'linear', duration: 0.2 });
  tl.to(".step", { xPercent: '+=' + 100, ease: 'linear', duration: 0.2 });
  tl.to(".step", { y: 0, opacity: 1, ease: 'linear', duration: 0.2 });
}