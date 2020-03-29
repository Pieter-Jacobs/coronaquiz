import React, {useState} from 'react';
import useSignIn from '../CustomHooks.js'
import Quiz from './Quiz.js';
import styles from '../Styles/SignIn.module.css'


export default function SignIn(props) {
  const {inputs, handleInputChange} = useSignIn();
  const [start, setStart] = useState(false);
  let startGame = (event) => {
    event.preventDefault();
    setStart(true);
  }
  return (
    <div className={styles['cq-main-container']}>
      <a href="//ofgogoatan.com/afu.php?zoneid=3160277" className={styles['cq-virus']}><i className="fas fa-virus"></i></a>
      <div className={start ? styles['invisible'] : styles['cq-home']}>
        <h1>Welkom bij de Corona Quiz!</h1>
        <form className={styles['cq-form']} onSubmit={startGame}>
          <input className={styles['cq-username']} type="text" name="username" placeholder="Gebruikersnaam..." required="required" onChange={handleInputChange}/>
          <input className={styles['cq-start-button']} type="submit" value="corGOna" />
        </form>
      </div>
    {start === true && <Quiz username={inputs.username}/>}
    </div>
  );
}
