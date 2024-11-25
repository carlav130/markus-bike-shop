import { useState } from "react";
import { loadAllRestrictions } from "../../../api/partBikes";
import { FRAME_TYPE_OPTION, STEP, chainOptions, frameFinishOptions, frameTypesOptions, rimColorOptions, wheelsOptions } from "../../../constants/stepper";
import type { ChainTypeOptions, FrameFinishOptions, FrameTypeOptions, RimColorTypeOptions, StepForm, WheelsTypeOptions } from "../../../types/stepper";

interface StepperProps {
  updateStepper: (step: StepForm) => void;
}

export const Stepper = ({ updateStepper }: StepperProps) => {
  // const allRestrictions = loadAllRestrictions();

  const [currentFrameType, setFrameType] = useState<FrameTypeOptions| null>(null);
  const [currentFrameFinish, setFrameFinish] = useState<FrameFinishOptions| null>(null);
  const [currentWheel, setWheel] = useState<WheelsTypeOptions| null>(null);
  const [currentRimColor, setRimColor] = useState<RimColorTypeOptions| null>(null);
  const [currentChain, setChain] = useState<ChainTypeOptions| null>(null);

  const updateFrameType = (value: FrameTypeOptions) => {
    updateStepper({stepType: STEP.FRAME_TYPE, value});
    setFrameType(value);
  }

  const updateFrameFinish = (value: FrameFinishOptions) => {
    updateStepper({stepType: STEP.FRAME_FINISH, value});
    setFrameFinish(value);
  }

  const updateWheel = (value: WheelsTypeOptions) => {
    updateStepper({stepType: STEP.WHEELS, value});
    setWheel(value);
  }

  const updateRimColor = (value: RimColorTypeOptions) => {
    updateStepper({stepType: STEP.RIM_COLOR, value});
    setRimColor(value);
  }

  const updateChain = (value: ChainTypeOptions) => {
    updateStepper({stepType: STEP.CHAIN, value});
    setChain(value);
  }

  return (
    <ol className="space-y-4">
      {/* FRAME TYPE */}
      <li>
        <div className={`
          ${currentFrameType ? 'text-green-700 border-green-300 bg-green-50' : ''}
          w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg`
          } role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">1. Frame type</h3>
            {currentFrameType && <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>}
          </div>
        </div>

        <div className="flex flex-row mt-5 gap-4">
          {frameTypesOptions.map((frameType) => (
            <button  key={frameType} onClick={() => updateFrameType(frameType)} type="button" 
            className={`
               ${currentFrameType && currentFrameType === frameType ? 'bg-indigo-500' : ''}
            text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
              {frameType}
            </button>           
          ))}
        </div>
      </li>

      {/* FRAME FINISH */}
      <li>
        <div className={`
          ${currentFrameFinish ? 'text-green-700 border-green-300 bg-green-50' : ''}
          w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg`
          } role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">2. Frame finish</h3>
            {currentFrameFinish && <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>}
          </div>
        </div>

        <div className="flex flex-row mt-5 gap-4">
          {frameFinishOptions.map((frameFinish) => (
            <button  key={frameFinish} onClick={() => updateFrameFinish(frameFinish)} type="button" 
            className={`
               ${currentFrameFinish && currentFrameFinish === frameFinish ? 'bg-indigo-500' : ''}
            text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
              {frameFinish}
            </button>  
          ))}
        </div>
      </li>

      {/* WHEELS */}
      <li>
        <div className={`
          ${currentWheel ? 'text-green-700 border-green-300 bg-green-50' : ''}
          w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg`
          } role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">3. Wheels</h3>
            {currentWheel && <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>}
          </div>
        </div>

        <div className="flex flex-row mt-5 gap-4">
          {wheelsOptions.map((wheel) => (
            <button  key={wheel} onClick={() => updateWheel(wheel)} type="button" 
            className={`
               ${currentWheel && currentWheel === wheel ? 'bg-indigo-500' : ''}
            text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
              {wheel}
            </button>  
          ))}
        </div>
      </li>

      {/* RIM COLOR */}
      <li>
        <div className={`
          ${currentRimColor ? 'text-green-700 border-green-300 bg-green-50' : ''}
          w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg`
          } role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">4. Rim color</h3>
            {currentRimColor && <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>}
          </div>
        </div>
        
        <div className="flex flex-row mt-5 gap-4">
          {rimColorOptions.map((rimColor) => (
            <button  key={rimColor} onClick={() => updateRimColor(rimColor)} type="button" 
              className={`
                ${currentRimColor && currentRimColor === rimColor ? 'bg-indigo-500' : ''}
              text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
                {rimColor}
            </button>  
          ))}
        </div>
      </li>

      {/* CHAIN */}
      <li>
        <div className={`
          ${currentChain ? 'text-green-700 border-green-300 bg-green-50' : ''}
          w-72 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg`
          } role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">5. Chain</h3>
              {currentChain && <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>}
          </div>
        </div>
        
       
        <div className="flex flex-row mt-5 gap-4">
          {chainOptions.map((chain) => (
            <button  key={chain} onClick={() => updateChain(chain)} type="button" 
              className={`
                ${currentChain && currentChain === chain ? 'bg-indigo-500' : ''}
              text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
                {chain}
            </button>  
          ))}
        </div>
      </li>
    </ol>
  );
};