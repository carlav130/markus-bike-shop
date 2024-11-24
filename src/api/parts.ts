import useFetch from "./useFetch";

export const loadBikeParts = () => {
	const { data } = useFetch('http://localhost:3600/parts')
	return data;
};

export const loadAllRestrictions = () => {
	const { data } = useFetch('http://localhost:3600/rules?type=restriction')
	return data;
};

export const loadAllPriceAdjustment = () => {
	const { data } = useFetch('http://localhost:3600/rules?type=price_adjustment')
	return data;
};
