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
    <div className={styles['cq-main-container']}>
      <div className={start ? styles['invisible'] : styles['cq-home']}>
        <div className={styles['cq-title-container']}>
          <h1>Welkom bij de Wekelijkse Corona Quiz!</h1>
        </div>
        <form className={styles['cq-form']} onSubmit={handleSubmit}>
          <input className={styles['cq-username']} type="text" name="username" placeholder="Gebruikersnaam..." required="required" onChange={handleInputChange}/>
          <input className={styles['cq-start-button']} type="submit" value="corGOna" onClick={startGame}/>
        </form>
        {console.log(inputs.username)}
      </div>
    {start == true && <Quiz username={inputs.username}/>}
    </div>
  );
}

SignIn.propTypes = {

};
