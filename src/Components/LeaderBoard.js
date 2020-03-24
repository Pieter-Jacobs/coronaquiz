import React from 'react';
import styles from '../Styles/LeaderBoard.module.css';
import PropTypes from 'prop-types';


export default function LeaderBoard(props) {
  return (
    <div className={props.quizStatus == "done" ? styles['cq-leaderboard-container'] : styles['invisible']}>
      
    </div>
  );
}

LeaderBoard.propTypes = {

};
