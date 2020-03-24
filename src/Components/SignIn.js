import React, {useState} from 'react';
import useSignIn from '../CustomHooks.js'
import Quiz from './Quiz.js';
import styles from '../Styles/SignIn.module.css'
import PropTypes from 'prop-types';


export default function SignIn(props) {
  const {inputs, handleInputChange, handleSubmit} = useSignIn();
  const [start, setStart] = useState(false);
  let startGame = () => {
    setStart(true);
  }
  return (
    <div>
      <div className={start ? styles['invisible'] : styles['qc-home']}>
        <h1>Welkom bij de Wekelijkse Corona Quiz!</h1>
        <h2>Doe mee om te laten zien dat jij de slimste bent.</h2>
        <h3>Of gewoon omdat je geen flikker te doen hebt.</h3>
        <form className={styles['cq-form']} onSubmit={handleSubmit}>
          <input className={styles['cq-username']} type="text" placeholder="Gebruikersnaam..." onChange={handleInputChange}/>
          <input className={styles['cq-start-button']} type="submit" value="corGOna" onClick={startGame}/>
        </form>
      </div>
    {start == true && <Quiz username={inputs.username}/>}
    </div>
  );
}

SignIn.propTypes = {

};
