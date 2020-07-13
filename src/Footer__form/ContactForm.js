import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textarea, setTextarea] = useState("");

  const submitContactForm = (event) => {

    const DATA_CONTACT = JSON.stringify({name: name, surname: surname, email: email, subject: subject, textarea: textarea})
    console.log(DATA_CONTACT);

    axios.post('/contact.php', DATA_CONTACT)
        .then(function (response) {
          console.log(response.json())
          setName("");
          setSurname("");
          setEmail("");
          setSubject("");
          setTextarea("");
        })
        .catch(function (error) {
          console.log(error);
        });

  }

  return (
    <form onSubmit={(event) => submitContactForm(event)} className="report-abuse__form">

      <input onChange={(e) => setName(e.target.value)} className="report-abuse__form-input" type="name" name="name" placeholder="Name" required />

      <input onChange={(e) => setSurname(e.target.value)} className="report-abuse__form-input" type="surname" name="surname" placeholder="Surname" required />

      <input onChange={(e) => setEmail(e.target.value)} className="report-abuse__form-input" type="email" name="email" placeholder="Email" required />

      <input onChange={(e) => setSubject(e.target.value)} className="report-abuse__form-input" type="subject" name="subject" placeholder="Subject" required />

      <textarea onChange={(e) => setTextarea(e.target.value)} className="report-abuse__form-input-textarea" type="text" placeholder="Message" required></textarea>

      <button type="submit" className="report-abuse__form-input-button">SEND</button>

  </form>
  );
}

export default ContactForm;
