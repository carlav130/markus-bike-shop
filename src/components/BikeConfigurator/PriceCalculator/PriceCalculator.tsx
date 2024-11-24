import { useId } from "react";
import type { StepForm } from "../../../types/stepper";

interface BikeFormProps {
  stepper: StepForm[];
}

export const PriceCalculator = ({ stepper }: BikeFormProps) => {
  return (
    <div className="bg-gray-400 p-5 w-96">
      {stepper.map((step) => (
          <div key={useId()} className="flex flex-row justify-between">
            <p>{step.stepType}</p>
            <p>{step.value}</p>
          </div>
      ))}
    </div>
  );
};


