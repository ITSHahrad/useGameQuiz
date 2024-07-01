import { useState } from "react"

export default function FirstScreen({onLoadQuestions}) {
  const [quizConfig, setQuizConfig] = useState({
    length: 1,
    difficulty: 'easy'
  });

  function handleQuizConfig(type, value) {
    (type == 'length') ? setQuizConfig((prev) => ({...prev, length: Number(value)})) : (type == 'difficulty') && setQuizConfig((prev) => ({...prev, difficulty: value}))
  }

  return <>
    <div className="w-full flex flex-col my-24 items-center">
      <div className="border-2 flex flex-col p-4 rounded-3xl text-center">
        <span className="text-3xl font-semibold font-mono text-gray-300">👋 Welcome to the `useGameQuiz();`</span>
        <span className="font-semibold font-mono text-gray-300 mt-4">❗Select the number of question's and your preferred difficulty to start the game.</span>
      </div>
      <div className="w-full max-md:flex-col max-md:items-center justify-center flex my-12">
          <span className="text-gray-300 font-mono font-semibold mx-5">Questions Length</span>
          <input type="range" className="w-4/12 max-md:w-11/12 my-2 appearance-none bg-gray-500 self-center rounded-full " max={50} min={1} value={quizConfig.length} onChange={(event) => handleQuizConfig('length', event.target.value)}/>
          <span className="font-mono font-semibold text-white text-xl mx-4 ">{quizConfig.length}/50</span>
      </div>
      <div className="w-full justify-center flex max-md:flex-col max-md:items-center">
        <span className="self-center text-xl font-mono font-semibold mx-2 text-gray-300">Choose difficulty: </span>
        <select value={quizConfig.difficulty} onChange={(event) => handleQuizConfig('difficulty', event.target.value)} className="w-2/12 max-md:w-6/12 my-5 text-center font-mono font-semibold bg-transparent p-1 text-white outline-none rounded-xl border-2">
          <option value="easy" className=" text-gray-900 font-semibold font-mono">🟢 Easy</option>
          <option value="medium" className=" text-gray-900 font-semibold font-mono">🟡 Medium</option>
          <option value="hard" className="text-gray-900 font-semibold font-mono">🔴 Hard</option>
        </select>
      </div>
        <button onClick={() => onLoadQuestions(quizConfig.length, quizConfig.difficulty)} className="font-mono font-semibold text-gray-300 p-2 border-2 rounded-xl my-12 hover:bg-gray-300 hover:text-gray-900 duration-300">Load questions</button>
    </div>
  </>
}