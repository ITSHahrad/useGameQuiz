import { useEffect } from "react";
import Error from "../../components/Error";
import { useState } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";
import StatusBar from "./StatusBar";
import EndScreen from '../EndScreen'

export default function Questions({questions}) {
  const [question, setQuestion] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(-1);

  useEffect(() => {
    if (question.length != 0) return () => {};
    function randomizeCorrect(correct, incorrect) {
      const correctIndex = Math.floor(Math.random() * (incorrect.length + 1));
      const answersArray = [];
      for (let i = 0, j = 0; i < (incorrect.length + 1); i++) {
        if (i === correctIndex) {
          answersArray.push(correct);
        } else {
          answersArray.push(incorrect[j]);
          j++;
        }
      }
      return {answers: answersArray, correct: correctIndex};
    }
    questions.map((question) => {
      const randomizeAnswers = randomizeCorrect(question.correct_answer, question.incorrect_answers);
      setQuestion((prev) => ([...prev, {
        title: question.question,
        difficulty: question.difficulty,
        category: question.category,
        answers: randomizeAnswers.answers,
        correct_index: randomizeAnswers.correct,
        selected: null,
        id: crypto.randomUUID()
      }]));
    });
  }, [questions]);

  function handleQuestionStart() {
    setQuestionIndex(0);
  }

  function handleQuestionIndex(type) {
    function checkIndexLength(type) {
      if (type === 'back' && questionIndex == 0) return false
      if (type === 'next' && questionIndex == (question.length + 1)) return false
      return true
    }

    if(type == 'back' && checkIndexLength(type)) { setQuestionIndex((prev) => prev - 1)} else if(type == 'next' && checkIndexLength()) { setQuestionIndex((prev) => (prev + 1)) }
  }

  function handleSelectButton(id, index){
    setQuestion((prevQuestions) => 
      prevQuestions.map((question) => 
        question.id === id ? { ...question, selected: index } : question
      )
    );
  }

  function handleCorrectLength() {
    const correctArray = [];
    question.map((question) => question.selected == question.correct_index && correctArray.push(question));
    return correctArray.length
  }

  return <>
    <div className="w-full flex flex-col">
      {questions.length < 1 ? <Error error={'Couldnt fetch questions! please refresh the page.'}/> : ((question.length > 0 && questionIndex == -1) ? <StartScreen questions_length={question.length} onJournyStart={handleQuestionStart}/> : (questionIndex >= 0 && questionIndex < question.length ? 
      <div className="flex flex-col my-28">
        <StatusBar currect_index={questionIndex} max_length={questions.length} />
        <Question question={question[questionIndex]} onIndexChange={handleQuestionIndex} onSelect={handleSelectButton}/>
      </div> : (questionIndex == (questions.length) && <EndScreen correct_length={handleCorrectLength()} all_length={question.length}/>) ))}
    </div>
  </>
}