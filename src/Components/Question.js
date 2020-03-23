import React from 'react';
import {questions,answers} from '../QandAs/QuestionData.js'
import PropTypes from 'prop-types';


export default function Questions(props) {
  return (
    <div>
      <h1>{questions[props.count]}</h1>
      <ul>
        <li><strong>A</strong> {answers[props.count].A}</li>
        <li><strong>B</strong> {answers[props.count].B}</li>
        <li><strong>C</strong> {answers[props.count].C}</li>
      </ul>
    </div>
  );
}

Questions.propTypes = {

};
