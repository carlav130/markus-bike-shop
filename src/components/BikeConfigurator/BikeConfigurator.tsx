import { BikeForm } from "./BikeForm/BikeForm";
import { PriceCalculator } from "./PriceCalculator/PriceCalculator";

export const BikeConfigurator = () => {

  return (
    <div id="product" className="flex">
      <BikeForm />
      <PriceCalculator />
    </div>
  );
};