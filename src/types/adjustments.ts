import type { Step, StepValue } from "./stepper";

export interface Adjustment {
	description: string;
	conditions: Conditions;
	adjustment: number;
}   

export interface Conditions {
	typeRestricted: Step;
	optionRestricted: StepValue;
	typeSelected: Step;
	optionSelected: StepValue;
}   
