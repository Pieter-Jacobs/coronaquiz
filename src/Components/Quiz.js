import React, {useState} from 'react';
import Question from './Question.js'
import styles from '../Styles/Quiz.module.css'
import PropTypes from 'prop-types';


export default function Quiz(props) {
  const [count,setCount] = useState(1)
  let nextQuestion = () => {
    setCount(count+1);
  }
  return (
    <div>
      <h1>Vraag {count}</h1>
      <Question count={count}/>
      <div className={styles['cq-nextbutton']} onClick={nextQuestion}>Volgende vraag</div>
    </div>
  );
}

Quiz.propTypes = {

};
