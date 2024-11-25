import type { Adjustment } from "../types/adjustments";
import type { PartBike } from "../types/bikeParts";
import type { StepForm } from "../types/stepper";

export const getPriceByProduct = (products: PartBike[], step: StepForm, stepper: StepForm[], adjustments: Adjustment[]): number => {
	if (!products) return 0;

	const partBike = products.find(product => product.type === step.stepType);

	if (!partBike) return 0;
	
	const option = partBike?.options.find(option => option.type === step.value);

	if (!option) return 0;

	let price = option.base_price;

	// We have to check if this product has any adjustment on the price.
	for (const adjustment of adjustments) {
		const isTypeRestricted = stepper.find(step => step.stepType === adjustment.conditions.typeRestricted && step.value === adjustment.conditions.optionRestricted);

		if (
			adjustment.conditions.typeSelected === partBike.type && 
			adjustment.conditions.optionSelected === step.value && 
			isTypeRestricted
		) {
			price += adjustment.adjustment;
		}
	}

	return price;
};