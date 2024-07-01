export default function Header() {
  return <>
    <div className="w-full max-md:flex-col max-md:items-center flex p-1 bg-gray-700 rounded-full">
      <span className="font-mono font-semibold text-xl mx-4 text-gray-200">🎮 useGameQuiz();</span>
      <span className="text-gray-300 font-mono font-medium self-center mx-10">Developed by <a href="https://github.com/ITSHahrad" target="_blank" className="text-blue-500 font-extrabold">ITSHahrad</a></span>
    </div>
  </>
}