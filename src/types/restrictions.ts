import type { Step, StepValue } from "./stepper";

export interface Restriction {
	condition: StepValue;
	typeAllowedOptions: Step;
	allowedOptions: StepValue[];
	message: string;
  }
  
export type Restrictions = {
	[key in Step]?: Restriction[];
};