export default async function useQuiz(length, questionDifficulty) {
  var difficulty;
  switch(questionDifficulty) {
    case 'easy':
      difficulty = 'difficulty=easy'
      break;
    case 'medium':
      difficulty = 'difficulty=medium'
      break;
    case 'hard':
      difficulty = 'difficulty=hard'
      break;
  }
  const questions = await fetch(`https://opentdb.com/api.php?amount=${length}&category=15&${difficulty}&type=multiple`, {cache: "no-store"})
  .then((response) => response.json())
  return questions;
}