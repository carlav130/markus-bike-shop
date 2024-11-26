import { useEffect, useId, useState } from "react";
import type { StepForm } from "../../../types/stepper";
import { getPriceByProduct } from "../../../utils/prices";
import { loadAllPriceAdjustment, loadBikeParts } from "../../../api/api";
import { t } from "../../../i18n/translate";

interface BikeFormProps {
  stepper: StepForm[];
}

export const PriceCalculator = ({ stepper }: BikeFormProps) => {
  const products = loadBikeParts();
  const adjustments = loadAllPriceAdjustment();
  const [totalPrice, updateTotalPrice] = useState(0);
  const hasAdjustments = stepper.some(step => step.price && step.price.originalPrice !== step.price.price);

  useEffect(() => {
    for (const step of stepper) {
      step.price = step.value ? getPriceByProduct(products, step, stepper, adjustments) : { originalPrice: 0, price: 0};
    }
    const newTotalPrice = stepper.reduce((a, b) => {
        return a + (b.price?.price || 0);
    }, 0)
    updateTotalPrice(newTotalPrice);

  }, [products, adjustments, stepper]);

  return (
    <div className="bg-gray-200 p-14 w-96 rounded-lg flex flex-col justify-between">
      <div>
        {stepper.map((step) => (
            <div key={useId()} className="flex flex-row justify-between py-3">
              <p>{t(step.value)}</p>
              <div className="flex flex-row">
                {step.price && step.price?.originalPrice !== step.price?.price && <p className="line-through mr-2 text-red-500">{step.price.originalPrice}€</p>}
                {step.price?.price !== 0 && <p className="font-bold">{step.price?.price} €</p>}
              </div>
            </div>
        ))}
      </div>
      <div>
        {hasAdjustments &&<div>
          <p className="mb-4 text-red-500 text-justify">** Some selections have a price increasement.</p>
        </div>}
        {totalPrice !== 0 && 
          <div className="flex flex-row justify-between text-xl">
            <p className="font-bold">Total price</p>
            <p  className="text-co-main">{totalPrice} €</p>
          </div>
        }
      </div>
    </div>
  );
};


