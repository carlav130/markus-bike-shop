import { loadBikeParts } from "../../../api/parts";
import { STEP, FRAME_TYPE_OPTION, FRAME_FINISH_OPTION, WHEELS_TYPE_OPTION, CHAIN_TYPE_OPTION, RIM_COLOR_TYPE_OPTION } from "../../../constants/stepper";
import type { Step, StepForm, StepValue } from "../../../types/stepper";

interface StepperProps {
  updateStepper: (step: StepForm) => void;
}

export const Stepper = ({ updateStepper }: StepperProps) => {
  const data = loadBikeParts();
  console.log(data);

  const update = (stepType: Step, value: StepValue) => {
    updateStepper({stepType, value});
  }

  return (
    <ol className="space-y-4">
      {/* FRAME TYPE */}
      <li>
        <div className="w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg" role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">1. Frame type</h3>
          </div>
        </div>

        <div className="flex flex-row mt-5 gap-4">
          <button onClick={() => update(STEP.FRAME_TYPE, FRAME_TYPE_OPTION.FULL_SUSPENSION)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Full-suspension
            </span>
          </button>
          <button onClick={() => update(STEP.FRAME_TYPE, FRAME_TYPE_OPTION.DIAMOND)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Diamond
            </span>
          </button>
          <button onClick={() => update(STEP.FRAME_TYPE, FRAME_TYPE_OPTION.STEP_THROUGH)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Step-through
            </span>
          </button>
        </div>
      </li>

      {/* WHEELS */}
      <li>
        <div className="w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg" role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">2. Frame finish</h3>
          </div>
        </div>
        <div className="flex flex-row mt-5 gap-4">
          <button onClick={() => update(STEP.FRAME_FINISH, FRAME_FINISH_OPTION.MATTE)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Matte
            </span>
          </button>
          <button onClick={() => update(STEP.FRAME_FINISH, FRAME_FINISH_OPTION.SHINY)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Shiny
            </span>
          </button>
        </div>
      </li>

      {/* FRAME FINISH */}
      <li>
        <div className="w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg " role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">3. Wheels</h3>
          </div>
        </div>
        <div className="flex flex-row mt-5 gap-4">
          <button onClick={() => update(STEP.WHEELS, WHEELS_TYPE_OPTION.ROAD)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Road wheels
            </span>
          </button>
          <button onClick={() => update(STEP.WHEELS, WHEELS_TYPE_OPTION.MOUNTAIN)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Mountain wheels
            </span>
          </button>
          <button onClick={() => update(STEP.WHEELS, WHEELS_TYPE_OPTION.FAT_BIKE)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Fat bike wheels
            </span>
          </button>
        </div>
      </li>

      {/* RIM COLOR */}
      <li>
        <div className="w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg" role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">4. Rim color</h3>
          </div>
        </div>
        <div className="flex flex-row mt-5 gap-4">
          <button onClick={() => update(STEP.RIM_COLOR, RIM_COLOR_TYPE_OPTION.RED)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Red
            </span>
          </button>
          <button onClick={() => update(STEP.RIM_COLOR, RIM_COLOR_TYPE_OPTION.BLACK)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Black
            </span>
          </button>
          <button onClick={() => update(STEP.RIM_COLOR, RIM_COLOR_TYPE_OPTION.BLUE)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Blue
            </span>
          </button>
        </div>
      </li>

      {/* CHAIN */}
      <li>
        <div className="w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg" role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">5. Chain</h3>
          </div>
        </div>
        <div className="flex flex-row mt-5 gap-4">
          <button onClick={() => update(STEP.CHAIN, CHAIN_TYPE_OPTION.SINGLE)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              Single-speed chain
            </span>
          </button>
          <button onClick={() => update(STEP.CHAIN, CHAIN_TYPE_OPTION.EIGHT)} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-opacity-0">
              8-speed chain
            </span>
          </button>
        </div>
      </li>
    </ol>
  );
};