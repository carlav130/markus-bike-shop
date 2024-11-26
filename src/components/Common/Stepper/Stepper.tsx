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

  const resetStepper = () => {
    for (const step of STEPS) {
      setSteps((prevState) => ({ ...prevState, [step.type]: null }))
      updateStepper({ stepType: step.type, value: null })
    }
  }

  return (
    <>
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
                  onClick={() => updateStep(step.type, option)} />
              ))}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-row justify-end">
        <button onClick={resetStepper} type="button" className="text-white bg-co-main border border-co-main hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center inline-flex items-center me-2">
          <svg className="w-6 h-6 text-white pr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
          </svg>
          Reset Selection
        </button>
      </div>
    </>
  )
};