// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './signup.css';

// const Signup = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleToggle = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleSignupChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData({ ...signupData, [name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/api/auth/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(loginData),
//     })
//     if (response.ok) {
//       navigate('/');
//   } else {
//       // Handle error (show message to user, etc.)
//       console.error('Signin failed');
//   }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/api/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(signupData),
//     })
//     if (response.ok) {
//       navigate('/signin');
//   } else {
//       // Handle error (show message to user, etc.)
//       console.error('Signup failed');
//   }
//   };

//   return (
//     <div className="wrapper">
//       <div className="card-switch">
//         <label className="switch">
//           <input
//             className="toggle"
//             type="checkbox"
//             checked={isChecked}
//             onChange={handleToggle}
//           />
//           <span className="slider"></span>
//           <span className="card-side"></span>
//           <div className={`flip-card__inner ${isChecked ? 'flipped' : ''}`}>
//             <div className="flip-card__front">
//               <div className="title">Log in</div>
//               <form action="" className="flip-card__form" onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   className="flip-card__input"
//                   value={loginData.email}
//                   onChange={handleLoginChange}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   className="flip-card__input"
//                   value={loginData.password}
//                   onChange={handleLoginChange}
//                 />
//                 <button className="flip-card__btn" type="submit">Let's go!</button>
//               </form>
//             </div>
//             <div className="flip-card__back">
//               <div className="title">Sign up</div>
//               <form action="" className="flip-card__form" onSubmit={handleSignup}>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   className="flip-card__input"
//                   value={signupData.name}
//                   onChange={handleSignupChange}
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   className="flip-card__input"
//                   value={signupData.email}
//                   onChange={handleSignupChange}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   className="flip-card__input"
//                   value={signupData.password}
//                   onChange={handleSignupChange}
//                 />
//                 <button className="flip-card__btn" type="submit">Confirm!</button>
//               </form>
//             </div>
//           </div>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Signup;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

axios.defaults.withCredentials = true;

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ fullName: '', email: '', password: '' });
  const navigate = useNavigate();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', loginData);
      if ((response.status === 200 || response.status === 201) && response.data.success) {
        navigate('/');
      } else {
        console.error('Signin failed');
      }
    } catch (error) {
      console.error('Signin failed', error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/signup', signupData);
        console.log('Response:', response);  // Log the full response for debugging
        if ((response.status === 200 || response.status === 201) && response.data.success) {
            navigate('/');
        } else {
            console.error('Signup failed', response.data);
        }
    } catch (error) {
        console.error('Signup failed', error);
    }
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
              <form className="flip-card__form" onSubmit={handleLogin}>
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
              <form className="flip-card__form" onSubmit={handleSignup}>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  className="flip-card__input"
                  value={signupData.fullName}
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