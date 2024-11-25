import type { Step, StepValue } from "./stepper";

export interface PartBike {
	id: number;
	type: Step;
	name: string;
	options: OptionPartBike[];
}   

export interface OptionPartBike {
	id: number;
	type: StepValue;
	name: string;
	base_price: number;
}   
