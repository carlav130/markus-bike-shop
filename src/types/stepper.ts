import type { STEP, FRAME_TYPE_OPTION, FRAME_FINISH_OPTION, WHEELS_TYPE_OPTION, RIM_COLOR_TYPE_OPTION, CHAIN_TYPE_OPTION } from "../constants/stepper";

export type Step = (typeof STEP)[keyof typeof STEP];

export type FrameTypeOptions = (typeof FRAME_TYPE_OPTION)[keyof typeof FRAME_TYPE_OPTION];
export type FrameFinishOptions = (typeof FRAME_FINISH_OPTION)[keyof typeof FRAME_FINISH_OPTION];
export type WheelsTypeOptions = (typeof WHEELS_TYPE_OPTION)[keyof typeof WHEELS_TYPE_OPTION];
export type RimColorTypeOptions = (typeof RIM_COLOR_TYPE_OPTION)[keyof typeof RIM_COLOR_TYPE_OPTION];
export type ChainTypeOptions = (typeof CHAIN_TYPE_OPTION)[keyof typeof CHAIN_TYPE_OPTION];

export type StepValue = FrameTypeOptions | FrameFinishOptions | WheelsTypeOptions | RimColorTypeOptions | ChainTypeOptions | null;

export interface StepForm {
	stepType: Step;
	value: StepValue;
	price?: number;
}   