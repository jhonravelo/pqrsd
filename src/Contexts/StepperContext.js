import React, { createContext, useCallback, useState, Fragment } from 'react';

export const StepperSubmitContext = createContext(null);

export const CurrentStepIndexContext = createContext(0);
export const SetCurrentStepIndexContext = createContext(null);

export const StepperDataContext = createContext({});
export const StepperDataDispatchContext = createContext(null);

export const StepperProvider = props => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [data, dispatch] = useState({});

  const { children, onSubmit } = props;

  const submit = useCallback(
    finalData => {
      if (onSubmit) {
        return onSubmit(finalData, currentStepIndex);
      }
    },
    [onSubmit, currentStepIndex]
  );

  if (!children) {
    return <Fragment></Fragment>;
  }

  const CurrentStep = children[currentStepIndex];

  return (
    <SetCurrentStepIndexContext.Provider value={setCurrentStepIndex}>
      <CurrentStepIndexContext.Provider value={currentStepIndex}>
        <StepperSubmitContext.Provider value={submit}>
          <StepperDataContext.Provider value={data}>
            <StepperDataDispatchContext.Provider value={dispatch}>
              {CurrentStep}
            </StepperDataDispatchContext.Provider>
          </StepperDataContext.Provider>
        </StepperSubmitContext.Provider>
      </CurrentStepIndexContext.Provider>
    </SetCurrentStepIndexContext.Provider>
  );
};

export const Step = props => {
  const { children } = props;
  return <Fragment>{children}</Fragment>;
};
