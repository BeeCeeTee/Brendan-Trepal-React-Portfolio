import { useState } from 'react';
import { validateEmail } from '../../Utils/helpers';
import './contact-page.css'

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h1 className='contact-heading'>Contact Me</h1>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className='contact-input'
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          className='contact-input'
        />
        <textarea
          name="message"
          onChange={handleInputChange}
          rows="4"
          cols="50"
          placeholder="Your message here..."
          className='contact-message'
        />
        <button type="submit" className='contact-submit'>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="contact-error">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;