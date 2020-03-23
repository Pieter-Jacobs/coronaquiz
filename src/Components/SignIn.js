import React from 'react';
import useSignIn from '../CustomHooks.js'
import PropTypes from 'prop-types';


export default function SignIn(props) {
  const {inputs, handleInputChange, handleSubmit} = useSignIn();
  return (
    <div>
      <h1>Welkom bij de Wekelijkse Corona Quiz!</h1>
      <h2>Doe mee om te laten zien dat jij de slimste bent.</h2>
      <h3>Of gewoon omdat je geen flikker te doen hebt.</h3>
      <form>
        <input type="text" value={inputs.username} onChange={handleInputChange}/>
        <input type="submit" value="corGOna"/>
      </form>
    </div>
  );
}

SignIn.propTypes = {

};
