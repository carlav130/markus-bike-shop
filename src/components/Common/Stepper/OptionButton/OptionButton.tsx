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
      title={isDisabled ? 'Option not available with your selection' : undefined}
    >
      {t(option)}
    </button>
  </div>
)