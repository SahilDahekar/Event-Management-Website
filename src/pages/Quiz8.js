import React, {useState, useEffect} from 'react';
import '../quiz.css';
import Questionaire from '../components/Questionaire';

const API_URL = "https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple";

function Quiz8() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() =>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: shuffle([question.correct_answer, ...question.incorrect_answers])
        }))
        setQuestions(questions)
      });
  },[])

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const handleAnswer = (answer) => {
    if(!showAnswers){
      if(answer === questions[currentIndex].correct_answer){
        setScore(score+1);
      }
    }
    

    setShowAnswers(true);
    
  }

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex+1);
    setShowAnswers(false);
  }


  return ( questions.length > 0 ? (

    <div className="container">
      {currentIndex >= questions.length ? (
      <div className='text-center'>
        <h1 className="text-3xl "><span className="my-4">Game Ended</span> <br/> <span className="my-4 text-4xl">Your Score is</span> <br/> <span className='text-6xl my-4]'>{score}</span></h1>
        <div><a href='/events' className='inline-block bg-[#c5c6c7] text-[#0b0c10] font-bold mx-auto my-4 uppercase py-3 px-8 sm:px-16 rounded-lg hover:bg-[#66fcf1]'>Go to Events</a></div>
      </div>): (<Questionaire   handleAnswer={handleAnswer}
        showAnswers={showAnswers}
        handleNextQuestion={handleNextQuestion}
        data={questions[currentIndex]}/>)}
      
    </div>

  ) : <div className="container">Loading...</div>
    
  );
}

export default Quiz8;