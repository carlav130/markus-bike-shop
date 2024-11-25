import type { PartBike } from "../types/bikeParts";
import type { StepForm } from "../types/stepper";

export const getPriceByProduct = (products: PartBike[], step: StepForm): number => {
    if (!products) return 0;

    const partBike = products.find(product => product.type === step.stepType);

    if (!partBike) return 0;
    
    const option = partBike?.options.find(option => option.type === step.value);
    return option ? option.base_price : 0;
};