import { useEffect, useId, useState } from "react";
import type { StepForm } from "../../../types/stepper";
import { getPriceByProduct } from "../../../utils/prices";
import { loadAllPriceAdjustment, loadBikeParts } from "../../../api/api";

interface BikeFormProps {
  stepper: StepForm[];
}

export const PriceCalculator = ({ stepper }: BikeFormProps) => {
  const products = loadBikeParts();
  const adjustments = loadAllPriceAdjustment();
  const [totalPrice, updateTotalPrice] = useState(0);

  useEffect(() => {
    for (const step of stepper) {
      step.price = step.value ? getPriceByProduct(products, step, stepper, adjustments) : 0;
    }
    const newTotalPrice = stepper.reduce((a, b) => {
        return a + (b.price || 0);
    }, 0)
    updateTotalPrice(newTotalPrice);

  }, [products, adjustments, stepper]);

  return (
    <div className="bg-gray-200 p-14 w-96 rounded-lg flex flex-col justify-between">
      <div>
        {stepper.map((step) => (
            <div key={useId()} className="flex flex-row justify-between py-3">
              <p>{step.value}</p>
              {step.price !== 0 && <p>{step.price} €</p>}
            </div>
        ))}
      </div>
      {totalPrice !== 0 && <div className="flex flex-row justify-between text-xl">
        <p className="font-bold">Total price</p>
      <p  className="text-co-main">{totalPrice} €</p>
      </div>}
    </div>
  );
};


