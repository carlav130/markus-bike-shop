export const StepHeader = ({ step, title, isCompleted }: { step: number; title: string; isCompleted: boolean }) => {
  return (
  <div className={`w-full p-4 ${isCompleted ? 'text-green-700 border-green-300 bg-green-50' : 'text-gray-900 bg-gray-100 border-gray-300'} border rounded-lg`} role="alert">
    <div className="flex items-center justify-between">
      <h3 className="font-medium">{step}. {title}</h3>
      {isCompleted && (
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
        </svg>
      )}
    </div>
  </div>
)}
