import { useState } from "react";
import { STEP, chainOptions, frameFinishOptions, frameTypesOptions, rimColorOptions, wheelsOptions } from "../../../constants/stepper";
import type { Step, StepForm, StepValue } from "../../../types/stepper";
import { StepHeader } from "./StepHeader/StepHeader";
import { OptionButton } from "./OptionButton/OptionButton";
import { loadRestrictions } from "../../../api/api";
import type { Restriction } from "../../../types/restrictions";

interface StepperProps {
  updateStepper: (step: StepForm) => void;
}

const STEPS = [
  { type: STEP.FRAME_TYPE, title: "Frame type", options: frameTypesOptions },
  { type: STEP.FRAME_FINISH, title: "Frame finish", options: frameFinishOptions },
  { type: STEP.WHEELS, title: "Wheels", options: wheelsOptions },
  { type: STEP.RIM_COLOR, title: "Rim color", options: rimColorOptions },
  { type: STEP.CHAIN, title: "Chain", options: chainOptions },
];

export const Stepper = ({ updateStepper }: StepperProps) => {
  const [steps, setSteps] = useState({
    [STEP.FRAME_TYPE]: null,
    [STEP.FRAME_FINISH]: null,
    [STEP.WHEELS]: null,
    [STEP.RIM_COLOR]: null,
    [STEP.CHAIN]: null,
  })

  const restrictions = loadRestrictions();

  const updateStep = (stepType: Step, value: StepValue) => {
    setSteps((prevState) => ({ ...prevState, [stepType]: value }))
    updateStepper({ stepType, value })
  }

  const isOptionDisabled = (step: Step, option: StepValue): boolean => { 
     if (!restrictions || !restrictions[step]) return false;

      return restrictions[step].some((restriction: Restriction) =>
        restriction.condition === option &&
        steps[restriction.typeAllowedOptions] &&
        !restriction.allowedOptions.includes(steps[restriction.typeAllowedOptions])
      );
  }  

  return (
    <ol className="space-y-4">
      {STEPS.map((step, index) => (
        <li key={step.type}>
          <StepHeader
            step={index + 1}
            title={step.title}
            isCompleted={steps[step.type] !== null}
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {step.options.map((option) => (
              <OptionButton
                key={option}
                option={option}
                isSelected={steps[step.type] === option}
                isDisabled={isOptionDisabled(step.type, option)}
                onClick={() => updateStep(step.type, option)}
              />
            ))}
          </div>
        </li>
      ))}
    </ol>
  )
};