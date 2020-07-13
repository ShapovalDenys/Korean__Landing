import React, { useState } from 'react';

import './App.scss';
import Form from './Form';
import Footer from './Footer';

const App = () => {

  const [regSuccess, setRegSuccess] = useState<any>();

  if (regSuccess && regSuccess.success === true) {
    return (
      <div className="App">

      <section className="main reg-completed">

        <h1>Registration Completed</h1>
        <h2>We will contact you</h2>

      </section>

    </div>
    )
  }

  return (
  <div className="App">
    <section className="main">

      <div className="main__logo">
        <img className="main__logo-img" src="./img/logo.png" alt="logo"></img>
      </div>

      <div className="main__form">
        <h1 className="main__form-article">지금 가입하고 운이 <br></br> 나머지를하게하십시오!</h1>
        <img className="main__form-text" src="./img/text.png" alt="text"></img>
        <Form setRegSuccess={setRegSuccess} regSuccess={regSuccess}/>
      </div>

    </section>

    <Footer />
  </div>
  )
}

export default App;
