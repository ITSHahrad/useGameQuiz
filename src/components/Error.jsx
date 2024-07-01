export default function Error({error}) {
  return <>
  <div className="w-8/12 flex flex-col bg-gray-800 rounded-xl self-center">
      <span className="font-mono font-semibold text-gray-300 p-4">🔥 {error}</span>
  </div>
  </>
}