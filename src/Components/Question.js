import React,{useState} from 'react';
import {questions,answers} from '../QandAs/QuestionData.js'
import PropTypes from 'prop-types';


export default function Questions(props) {
  const [answer, setAnswer] = useState();
  const selectAnswer = (event) => {
    let answer = event.currentTarget.className;
    setAnswer(answer);
    props.updateScore(answers[props.count][answer].score);
    props.isQuestionSelected(1);
  }
  return (
    <div>
      <h1>{questions[props.count]}</h1>
      <ul>
        <li className="A" onClick={selectAnswer}><strong>A</strong> {answers[props.count].A.answer}</li>
        <li className="B" onClick={selectAnswer}><strong>B</strong> {answers[props.count].B.answer}</li>
        <li className="C" onClick={selectAnswer}><strong>C</strong> {answers[props.count].C.answer}</li>
      </ul>
    </div>
  );
}

Questions.propTypes = {

};
