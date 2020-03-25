import {useState} from 'react';

export default function useSignIn() {
  const [inputs, setInputs] = useState({"username" : ""});

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {inputs, handleInputChange};
}
