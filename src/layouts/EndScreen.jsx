import Error from "../components/Error";

export default function EndScreen({correct_length, all_length}) {
  return <>
    <div className="flex flex-col self-center my-36">
      <span className="text-white font-mono font-semibold text-2xl my-12">📗 You finished {correct_length} / {all_length} questions correctly!</span>
      <Error error={"You can retry by refreshing!"}/>
    </div>
  </>
}