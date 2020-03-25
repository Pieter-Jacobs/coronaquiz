import React,{useState} from 'react';
import {questions,answers} from '../QandAs/QuestionData.js'
import styles from '../Styles/Question.module.css'
import PropTypes from 'prop-types';


export default function Question(props) {
  const [answer, setAnswer] = useState();
  const selectAnswer = (event) => {
    let answer = event.currentTarget.className;
    setAnswer(answer);
    props.updateScore(answers[props.count][answer].score);
    props.isQuestionSelected(1);
  }
  return (
    <div className={styles['cq-qa-container']}>
      <h1 className={styles['cq-question']}>{questions[props.count]}</h1>
      <ul className={styles['cq-mc-container']}>
        <li className="A" tabIndex="1" onClick={selectAnswer}><strong>A</strong> {answers[props.count].A.answer}</li>
        <li className="B" tabIndex="2" onClick={selectAnswer}><strong>B</strong> {answers[props.count].B.answer}</li>
        <li className="C" tabIndex="3" onClick={selectAnswer}><strong>C</strong> {answers[props.count].C.answer}</li>
      </ul>
    </div>
  );
}

Question.propTypes = {

};
