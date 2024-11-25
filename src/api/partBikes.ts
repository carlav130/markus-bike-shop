import type { PartBike } from "../types/bikeParts";
import useFetch from "./useFetch";

export const loadBikeParts = (): PartBike[] => {
	const { data } = useFetch('http://localhost:3600/bikeParts')
	return data as PartBike[];
};

export const loadAllRestrictions = () => {
	const { data } = useFetch('http://localhost:3600/rules?type=restriction')
	return data;
};

export const loadAllPriceAdjustment = () => {
	const { data } = useFetch('http://localhost:3600/rules?type=price_adjustment')
	return data;
};
