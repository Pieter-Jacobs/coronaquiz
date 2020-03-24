import React, {useState} from 'react';
import Question from './Question.js'
import LeaderBoard from './LeaderBoard.js'
import styles from '../Styles/Quiz.module.css'
import PropTypes from 'prop-types';


export default function Quiz(props) {
  const [count,setCount] = useState(1)
  const [currentScore, setCurrentScore] = useState(0);
  const [addedScore, setAddedScore] = useState(0);
  const [visible,setVisibility] = useState(0);
  const [quizStatus, setQuizStatus] = useState("running");
  let nextQuestion = () => {
    setCount(count+1);
  }
  let isQuestionSelected = (input) => {
    setVisibility(input);
  }
  let updateScore = (score) => {
    setAddedScore(score);
  }
  let passScore = (score) => {
    setCurrentScore(currentScore + addedScore);
  }
  let handleQuestion = (input, score, currentCount) => {
    if (currentCount <10){
      passScore(score);
      isQuestionSelected(input);
      nextQuestion();
    }
    else {
      setQuizStatus("done");
    }
  }
  return (
    <div className={styles['cq-quiz-container']}>
      <LeaderBoard username={props.username} score={currentScore} quizStatus={quizStatus}/>
      <div className={quizStatus == "running" ? styles['cq-quiz-container'] : styles['invisible']}>
        <h1>Vraag {count}</h1>
        <Question isQuestionSelected = {isQuestionSelected} updateScore = {updateScore} count={count}/>
        <div className={visible ? styles['cq-nextbutton'] : styles['invisible']} onClick={() => {handleQuestion(0, addedScore, count)}}>{count < 10 ? <p>Volgende vraag</p> : <p>"Done!"</p>}</div>
      </div>
    </div>
  );
}

Quiz.propTypes = {

};
