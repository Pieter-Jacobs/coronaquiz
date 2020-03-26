import React, {useState} from 'react';
import Question from './Question.js'
import LeaderBoard from './LeaderBoard.js'
import styles from '../Styles/Quiz.module.css'
import PropTypes from 'prop-types';


export default function Quiz(props) {
  const [count,setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [quizStatus, setQuizStatus] = useState("running");
  let passScore = (newScore) => {
    setScore(score + newScore);
  }
  let nextQuestion = () => {
    if(count === 10) {
      setQuizStatus("done");
    }
    else {
      setCount(count+1);
    }
  }
  return (
    <div className={styles['cq-quiz-container']}>
      <LeaderBoard username={props.username} score={score} quizStatus={quizStatus}/>
      <div className={quizStatus === "running" ? styles['cq-quiz-container'] : styles['invisible']}>
        <h1>Vraag {count}/10</h1>
        <Question nextQuestion = {nextQuestion} count={count} passScore={passScore}/>
      </div>
    </div>
  );
}

Quiz.propTypes = {
  username: PropTypes.string.isRequired
};
