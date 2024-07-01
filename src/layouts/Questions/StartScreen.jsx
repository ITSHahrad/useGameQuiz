export default function StartScreen({questions_length, onJournyStart}) {
  return <>
    <div className="w-full flex flex-col items-center my-44">
      <div className="w-8/12 p-2 text-center bg-gray-700 rounded-3xl">
        <span className="text-2xl font-mono font-semibold text-gray-200">🔥 Your {questions_length} question's are ready!</span>
      </div>
        <span className="font-mono font-semibold text-gray-400 my-6">Start your journy by <button onClick={() => onJournyStart()} className="bg-gray-600 px-2 rounded-full text-white">Clicking on me</button></span>
    </div>
  </>
}