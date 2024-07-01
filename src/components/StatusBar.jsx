export default function StatusBar({max_length, currect_index}) {
  return <>
  <div className="w-full flex justify-center max-md:flex-col max-md:items-center">
    <span className="mx-5 text-xl text-gray-300 font-mono font-semibold max-md:my-2">💡 {currect_index}/{max_length}</span>
    <div className="w-7/12 p-1 bg-gray-600 mb-16 rounded-xl">
      <div className="p-1 bg-gray-900 rounded-xl duration-300" style={{width: `${(currect_index / max_length) * 100}%`}}></div>
    </div>
  </div>
  </>
}