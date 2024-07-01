import './Loading.css'
export default function Loading() {
  return <>
  <div className='w-full flex flex-col'>
    <span className="loader my-5 self-center"></span>
    <span className='text-white font-mono text-3xl self-center'>Loading...</span>
  </div>
  </>
}