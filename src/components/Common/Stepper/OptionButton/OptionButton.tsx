import type { StepValue } from "../../../../types/stepper";
import { t } from "../../../../i18n/translate";

export const OptionButton = ({ option, isSelected, isDisabled, onClick }: { option: StepValue; isSelected: boolean; isDisabled: boolean; onClick: () => void;}) => (
  <div className="relative group">
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${isSelected ? 'bg-blue-600' : isDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-800'}
        text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none
      `}
      aria-describedby={isDisabled ? 'tooltip-default' : undefined}
    >
      {t(option)}
    </button>

    <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 toolti">
      Tooltip content
      <div className="tooltip-arrow" data-popper-arrow />
    </div>
  </div>
)