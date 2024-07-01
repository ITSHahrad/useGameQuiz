import { useReducer } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading/Loading";
import FirstScreen from "./layouts/FirstScreen";
import useQuiz from './lib/useQuiz'
import Questions from "./layouts/Questions/Questions";

function handleDispatcher(state, action) {
  switch(action.type) {
    case 'loadQuestion': 
      return {
        ...state,
        status: "loading",
        questions: []
      }
    case 'questionLoaded':
      return {
        ...state,
        status: 'ready',
        questions: action.questionData
      }
    default: 
      return state
  }
}

export default function App() {
  const [quizState, quizDispatcher] = useReducer(handleDispatcher, {status: 'before-start'});
  
  async function handleLoadQuestion(length, difficulty) {
    quizDispatcher({type: "loadQuestion"})
    const questions = await useQuiz(length, difficulty);
    quizDispatcher({type: 'questionLoaded', questionData: questions.results})
  }

  return <>
    <div className="w-full h-screen overflow-hidden bg-gray-900">
      <div className="w-11/12 flex flex-col mx-auto">
        <div className="my-4 w-5/12 self-center">
          <Header />
        </div>
          {
            quizState.status === 'before-start' ? (
              <FirstScreen onLoadQuestions={handleLoadQuestion} />
            ) 
            : (quizState.status === 'loading' ? (<div className="my-44"><Loading /></div>) : (quizState.status === 'ready' && <Questions questions={quizState.questions}/>))
          }
      </div>
    </div>
  </>
}
