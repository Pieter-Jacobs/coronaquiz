import React from 'react';
import styles from '../Styles/LeaderBoard.module.css';
import {
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";
import PropTypes from 'prop-types';


export default function LeaderBoard(props) {
  let determineExpression = (score) => {
    if(score <= 12) {
      return "Gast, jij gaat sowieso dood."
    }
    else if(score <= 15) {
      return "Een matige score, ga je eens snel inlezen gast."
    }
    else if(score <= 18) {
      return "Een burgerlijke score, lekker gemiddeld."
    }
    else if(score <= 22) {
      return "Een zeer degelijke score, goed gedaan ouwe."
    }
    else if(score <= 25) {
      return "Een uitmuntende score, oude coronahengst."
    }
    else if(score === 26) {
      return "Je kan inmiddels wel bij Jinek gaan zitten als viroloog!"
    }
    else if(score === 27) {
      return "Zo dicht bij perfectie! Don't give up now."
    }
    else if(score === 28) {
      return "Jij hebt deze week uitgespeeld, corVOna voor jou!"
    }
  }
  return (
    <div className={props.quizStatus === "done" ? styles['cq-leaderboard-container'] : styles['invisible']}>
      <h1 className={styles['cq-score-expression']}>{props.username},<br/>Jij hebt {props.score} van de 28 punten gescoord.<br/>{determineExpression(props.score)}</h1>
      <a href="https://www.decoronaquiz.com"><div className={styles['cq-restart-button']}><p>Speel Opnieuw!</p></div></a>
      <div className={styles['cq-socials']}>
        <h2 className={styles['cq-share']}>Deel je score op social media!</h2>
        <div className={styles['cq-socials-whatsapp']}>
          <WhatsappShareButton url="www.decoronaquiz.com"/>
        </div>
        <div className={styles['cq-socials-facebook']}>
          <FacebookShareButton url="www.decoronaquiz.com" quote={`Ik had een score van ${props.score} op week 1 van de coronaquiz. Kan jij mijn score verbeteren?`}/>
        </div>
      </div>
    </div>
  );
}

LeaderBoard.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};
