import type { Adjustment } from "../types/adjustments";
import type { PartBike } from "../types/bikeParts";
import type { Restrictions } from "../types/restrictions";
import useFetch from "./useFetch";

export const loadBikeParts = (): PartBike[] => {
	const { data } = useFetch('http://localhost:3600/bikeParts')
	return data as PartBike[];
};

export const loadRestrictions = (): Restrictions => {
  const { data } = useFetch('http://localhost:3600/restrictions?type=restriction');
	return data as Restrictions;
}
  
export const loadAllPriceAdjustment = (): Adjustment[] => {
	const { data } = useFetch('http://localhost:3600/rules?type=price_adjustment')
	return data as Adjustment[];
};
