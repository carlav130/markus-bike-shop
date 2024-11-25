import { useState } from "react";
import { STEP, chainOptions, frameFinishOptions, frameTypesOptions, rimColorOptions, wheelsOptions } from "../../../constants/stepper";
import type { Step, StepForm, StepValue } from "../../../types/stepper";
import { StepHeader } from "./StepHeader/StepHeader";
import { OptionButton } from "./OptionButton/OptionButton";
import { loadRestrictions } from "../../../api/api";

interface StepperProps {
  updateStepper: (step: StepForm) => void;
}

export const Stepper = ({ updateStepper }: StepperProps) => {
  const [state, setState] = useState({
    [STEP.FRAME_TYPE]: null,
    [STEP.FRAME_FINISH]: null,
    [STEP.WHEELS]: null,
    [STEP.RIM_COLOR]: null,
    [STEP.CHAIN]: null,
  })

  const restrictions = loadRestrictions();

  const updateStep = (stepType: Step, value: StepValue) => {
    setState((prevState) => ({ ...prevState, [stepType]: value }))
    updateStepper({ stepType, value })
  }

  const steps = [
    { type: STEP.FRAME_TYPE, title: "Frame type", options: frameTypesOptions },
    { type: STEP.FRAME_FINISH, title: "Frame finish", options: frameFinishOptions },
    { type: STEP.WHEELS, title: "Wheels", options: wheelsOptions },
    { type: STEP.RIM_COLOR, title: "Rim color", options: rimColorOptions },
    { type: STEP.CHAIN, title: "Chain", options: chainOptions },
  ];

  const isOptionDisabled = (step: Step, option: StepValue): boolean => { 
    if (!restrictions || !Object.keys(restrictions) ||  Object.keys(restrictions) && !Object.keys(restrictions).includes(step)) return false;
  
    const stepRestrictions = restrictions[step as Step];

    if (!stepRestrictions) return false;

    let isOptionDisabled = false;

    for (const restriction of stepRestrictions) {
      if (restriction.condition === option && state[restriction.typeAllowedOptions] && !restriction.allowedOptions.includes(state[restriction.typeAllowedOptions])) {
        isOptionDisabled = true;
        // Reset si está seleccionado
      }
    }

    return isOptionDisabled;
  }  

  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step.type}>
          <StepHeader
            step={index + 1}
            title={step.title}
            isCompleted={state[step.type] !== null}
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {step.options.map((option) => {
              return (
                <OptionButton
                  key={option}
                  option={option}
                  isSelected={state[step.type] === option}
                  isDisabled={isOptionDisabled(step.type, option)}
                  onClick={() => updateStep(step.type, option)}
                />
              );
            })}
          </div>
        </li>
      ))}
    </ol>
  )
};