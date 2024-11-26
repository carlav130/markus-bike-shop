import type { StepForm } from "../../../types/stepper";
import { Stepper } from "../../Common/Stepper/Stepper";

interface BikeFormProps {
  updateStepper: (step: StepForm) => void;
}

export const BikeForm = ({ updateStepper }: BikeFormProps) => {
  return (
    <div>
      <h1 className="text-lg pb-2 text-gray-700">Bike Form</h1>
      <p className="text-sm pb-4 text-gray-600">Configure your own bike as you like.</p>
      <Stepper updateStepper={updateStepper} />
    </div>
  );
};