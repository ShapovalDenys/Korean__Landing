import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import './Form.scss';

const Form = ({ setRegSuccess, regSuccess }) => {

  const [onDisabled, setOnDisabled] = useState();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("+");

  const [ipInfo, setIpInfo] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorTel, setErrorTel] = useState(false);
  const [correctMail, setCorrectMail] = useState(true);

  const getIP = () => {
    return fetch(`https://ipinfo.io/json`)
      .then(response => response.json());
  }

  const loadIpInfo = async () => {
    const [info] = await Promise.all(
      [getIP()],
    );
    setIpInfo(JSON.stringify(info))
  }

  useEffect(() => {
    setOnDisabled(isPossiblePhoneNumber(tel))
  }, [tel])

  useEffect(() => {
    loadIpInfo()
  }, [])

  const submitForm = (event) => {
    event.preventDefault();

    if (name.length < 1) {
      setErrorName(true)
    } else if (mail.length < 1) {
      setErrorMail(true)
    } else if (!onDisabled) {
      setErrorTel(true)
    } else if (errorMail === false && errorTel === false && correctMail === true) {
      setErrorTel(false);
      setIsLoading(true);
      const DATA = JSON.stringify({name: name, mail: mail, tel: tel, ipInfo: ipInfo})
      console.log(DATA);

        axios.post('/send.php', DATA)
        .then(function (response) {
          console.log(response.json())
          setRegSuccess(response.json())
          setIsLoading(false);
          setName("");
          setMail("");
          setTel("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

const mailValidation = /^.+@.+\..+$/igm;

useEffect(() => {
  if (name.length > 1) {
    setErrorName(false)
  }
}, [name])

/*useEffect(() => {
  if (mail.length > 1) {
    setCorrectMail(false)
  }
}, [mail])*/

useEffect(() => {
  if (!onDisabled) {
    setErrorTel(false)
  }
}, [tel])

const onChangeMail = (e) => {
  if (mailValidation.test(e.target.value)) {
    setCorrectMail(true)
    setErrorMail(false)
  } else {
    setCorrectMail(false)
    setErrorMail(true)
  }
  setMail(e.target.value)
}

  return (
  <form className="form">

    <span className={errorName ? "error-span error-span-active" : "error-span"}>Enter name</span>
    <input onChange={(e) => setName(e.target.value)} className={errorName ? "form__input form__input-error" : "form__input"} type="name" name="name" placeholder="Full name" required />

    <span className={errorMail ? "error-span error-span-active" : "error-span"}>{correctMail ? "Enter mail" : "Enter correct mail"}</span>
    <input onChange={(e) => onChangeMail(e)} className={errorMail ? "form__input form__input-error" : "form__input"} type="email" name="email" placeholder="Email" required />

    <span className={errorTel ? "error-span error-span-active" : "error-span"}>Enter correct phone number</span>
    <PhoneInput
      flags={flags}
      international
      defaultCountry="KR"
      value={tel}
      className={errorTel ? "form__input form__input-error" : "form__input"}
      onChange={setTel}
    />

    {regSuccess && regSuccess.reason === "phone" ? <span className="error-span error-span-active">This number is registered</span> : ""}
    {regSuccess && regSuccess.reason === "mail" ? <span className="error-span error-span-active">This mail is registered</span> : ""}


    {isLoading
    ?
    <div className="lds-ring loader"><div></div><div></div><div></div><div></div></div>
    :
    <button onClick={(event) => submitForm(event)} className={onDisabled && correctMail ? "form__submit disable" : "form__submit"} type="submit">Sing Up now</button>
    }

  </form>
);
}

export default Form;

