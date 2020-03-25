import React, {useState} from 'react';

export default function useSignIn() {
  const [inputs, setInputs] = useState({"username" : ""});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {handleSubmit, handleInputChange, inputs};
}
