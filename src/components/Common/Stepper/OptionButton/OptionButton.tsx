export const OptionButton = ({ option, isSelected, isDisabled, onClick }: { option: string; isSelected: boolean; isDisabled: boolean; onClick: () => void;}) => (
  <div className="relative group">
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${isSelected ? 'bg-blue-300' : isDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'}
        text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none
      `}
      aria-describedby={isDisabled ? `tooltip-${option}` : undefined}
    >
      {option}
    </button>
  </div>
)