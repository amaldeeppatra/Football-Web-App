import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login success:', data);
        // Handle success response
      })
      .catch((error) => {
        console.error('Login error:', error);
        // Handle error response
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Signup success:', data);
        // Handle success response
      })
      .catch((error) => {
        console.error('Signup error:', error);
        // Handle error response
      });
  };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input
            className="toggle"
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className={`flip-card__inner ${isChecked ? 'flipped' : ''}`}>
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form action="" className="flip-card__form" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="flip-card__input"
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="flip-card__input"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
                <button className="flip-card__btn" type="submit">Let's go!</button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form action="" className="flip-card__form" onSubmit={handleSignup}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="flip-card__input"
                  value={signupData.name}
                  onChange={handleSignupChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="flip-card__input"
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="flip-card__input"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
                <button className="flip-card__btn" type="submit">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Signup;
