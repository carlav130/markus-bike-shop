import { useState } from "react";
import { BikeForm } from "./BikeForm/BikeForm";
import { PriceCalculator } from "./PriceCalculator/PriceCalculator";
import type { StepForm } from "../../types/stepper";
import { STEP } from "../../constants/stepper";

export const BikeConfigurator = () => {
  const intialStateStepper: StepForm[] = [
    {
      stepType: STEP.FRAME_TYPE,
      value: null
    },
    {
      stepType: STEP.FRAME_FINISH,
      value: null
    },
    {
      stepType: STEP.WHEELS,
      value: null
    },
    {
      stepType: STEP.RIM_COLOR,
      value: null
    },
    {
      stepType: STEP.CHAIN,
      value: null
    },
  ] 
  const [stepper, updateStepper] = useState(intialStateStepper);

  const handleUpdateStepper = (stepUpdated: StepForm) => {
    const newStepper = [...stepper];
    for (const step of newStepper) {
      if (step.stepType === stepUpdated.stepType) {
        step.value = stepUpdated.value;
      }
    };
    updateStepper(newStepper);
  }

  return (
    <div id="product" className="flex flex-row justify-center gap-20 mt-14 mb-14">
      <BikeForm updateStepper={handleUpdateStepper} />
      <PriceCalculator stepper={stepper} />
    </div>
  );
};