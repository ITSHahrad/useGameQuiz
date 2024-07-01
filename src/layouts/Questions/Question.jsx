import AnswerButton from "../../components/AnswerButton";

export default function Question({question, onIndexChange, onSelect}) {
  const selectedButton = question.selected

  const handleSelectedButton = (index) => {
     selectedButton == null && onSelect(question.id, index)
  }

  return <>
    <div className="w-full flex flex-col items-center ">
      <span className="font-mono font-semibold text-gray-300 text-xl max-md:text-center">{question.title}</span>
      <div className="w-full flex max-md:flex-col items-center justify-evenly my-4">
        <span className="font-semibold font-mono text-gray-500">🏆 {question.difficulty}</span>
        <span className="font-semibold font-mono text-gray-500">📑 {question.category}</span>
      </div>
      <div className="w-8/12 grid grid-cols-2 max-md:grid-cols-1">
      {question.answers.map((answer, index) => (
        <AnswerButton title={answer}   style={`${selectedButton !== null ? 
          (selectedButton === question.correct_index ? 
              (selectedButton === index ? 'bg-green-300 text-green-500 border-green-300 ml-5 drop-shadow-xl duration-300' : '') :
              (selectedButton === index ? 'bg-red-300 text-red-500 border-red-300 ml-5 drop-shadow-xl duration-300' : 
              (index === question.correct_index ? 'bg-green-300 text-green-500 border-green-300 ml-5 drop-shadow-xl duration-300' : ''))
          ) : ''
      }`} key={index} index={index} onAnswer={handleSelectedButton} />
      ))}
      </div>
      {
        selectedButton != null && (
          <div className="w-8/12 flex justify-evenly my-6 max-md:flex-col">
            <button onClick={() => onIndexChange('back')} className="border-2 border-gray-300 px-3 py-1 rounded-3xl max-md:my-3 text-gray-300 hover:bg-gray-300 hover:text-gray-900 font-mono font-semibold duration-300">Back</button>
            <button onClick={() => onIndexChange('next')} className="border-2 border-gray-300 px-3 py-1 rounded-3xl text-gray-300 hover:bg-gray-300 hover:text-gray-900 font-mono font-semibold duration-300">Next</button>
          </div>
        )
      }
    </div>
  </>
}
