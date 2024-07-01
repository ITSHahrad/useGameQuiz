export default function AnswerButton({title, onAnswer, style, index}) {
  return <>
    <button className={`w-11/12 border-2 text-xl p-2 font-semibold m-2 rounded-xl text-gray-200 ${style}`} onClick={() => onAnswer(index)}>{title}</button>
  </>
}