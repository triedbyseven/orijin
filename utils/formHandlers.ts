import gsap from 'gsap';

export const onChangeText = (event, updateValue) => {
  const {
    target: { value, name },
  } = event;

  console.log(value, name);

  updateValue((prevState) => ({ ...prevState, formValues: { [name]: value } }));
};


export const nextStep = (state, steps, updateState) => {
  if (state.currentStep.index + 1 === state.steps.length) return;

  const newIndex = state.currentStep.index + 1;

  updateState({ currentStep: steps[newIndex], steps: steps });

  gsap.to('.active-line', 0.5, { attr: { x2: '100%' }, ease: 'power4' });

  gsap.to('.animate-currentStep', 0.2, {
    opacity: 0,
    y: 25,
    ease: 'power4',
    onComplete: () => {
      gsap.to('.animate-currentStep', 0, {
        x: '-100%',
        ease: 'power4',
        onComplete: () => {
          gsap.to('.animate-currentStep', 0.2, {
            opacity: 1,
            y: 0,
            ease: 'power4',
          });
        },
      });
      // Updates state with new component and destroys old ones
      // updateState({ currentStep: steps[newIndex], steps: steps });
      // gsap.fromTo(
      //   '.animate-currentStep',
      //   0.3,
      //   { x: 10, y: 10, opacity: 0, ease: 'power3' },
      //   { x: 0, y: 0, opacity: 1, ease: 'power3' }
      // );
    },
  });
}

export const lastStep = (state, steps, updateState) => {
  if (state.currentStep.index === 0) return;

  const newIndex = state.currentStep.index - 1;


  updateState({ currentStep: steps[newIndex], steps: steps });

  setTimeout(() => {
    gsap.to('.active-line', 0.5, { attr: { x2: '0' }, ease: 'power4' });
  }, 50);

  // Animate out
  gsap.to('.animate-currentStep', 0.2, {
    opacity: 0,
    y: 50,
    ease: 'power4',
    onComplete: () => {
      gsap.to('.animate-currentStep', 0, {
        x: `${state.steps.length / 100}%`,
        ease: 'power4',
        onComplete: () => {
          gsap.to('.animate-currentStep', 0.2, {
            opacity: 1,
            y: 0,
            ease: 'power4',
          });
        },
      });
      // Updates state with new component and destroys old ones
      // updateState({ currentStep: steps[newIndex], steps: steps });
      // gsap.fromTo(
      //   '.animate-currentStep',
      //   0.5,
      //   { x: -10, y: 10, opacity: 0, ease: 'power3' },
      //   { x: 0, y: 0, opacity: 1, ease: 'power3' }
      // );
    },
  });
}