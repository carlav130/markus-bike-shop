import type { Adjustment } from "../types/adjustments";
import type { PartBike } from "../types/bikeParts";
import type { Price, StepForm } from "../types/stepper";

export const getPriceByProduct = (products: PartBike[], step: StepForm, stepper: StepForm[], adjustments: Adjustment[]): Price => {
	const initialPrice = {
		originalPrice: 0,
		price: 0
	};

	const currentPartBike = products.find(product => product.type === step.stepType);
	const currentValuePartBike = currentPartBike?.options.find(option => option.type === step.value);

	if (!currentValuePartBike) return initialPrice;

	const price = {
		originalPrice: currentValuePartBike.base_price,
		price: currentValuePartBike.base_price
	};

	// We have to check if this product has any adjustment on the price.
	for (const adjustment of adjustments) {
		const isTypeRestricted = stepper.find(step => step.stepType === adjustment.conditions.typeRestricted && step.value === adjustment.conditions.optionRestricted);

		if (
			adjustment.conditions.typeSelected === currentPartBike?.type && 
			adjustment.conditions.optionSelected === step.value && 
			isTypeRestricted
		) {
			price.price += adjustment.adjustment;
		}
	}

	return price;
};