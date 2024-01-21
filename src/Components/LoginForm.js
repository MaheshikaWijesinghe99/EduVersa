import React from 'react'
import '../Components/CSS/LoginForm.css'
import { useState } from 'react';

// const LoginForm = () => {

//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };  

//   return (
//     <form>
//       <p className='form-title'>Login</p>
//       <p className='form-text'>Username</p>
//       <input
//         id="name"
//         type="text"
//         className="form-text-type"
//       />
//       <p className='form-text'>Password</p>
//       <input
//         id="name"
//         type="password"
//         className="form-text-type"
//       />
//       <div className='rem-text'>
//       <input
//           type="checkbox"
//           checked={checked}
//           onChange={handleChange}
//           className='checkbox'
//         />
//         <p className='remember'>Remember username</p>     
//       </div>
      
//     </form>
//   )
// }

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberUsername, setRememberUsername] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', { username, password, rememberUsername });
  };

  const handleCheckboxChange = () => {
    setRememberUsername(!rememberUsername);
  };

  const handleLostPassword = () => {
    // Add your lost password logic here
    console.log('Lost password clicked');
  };

  return (
    <div>
      <form>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberUsername}
              onChange={handleCheckboxChange}
            />
            Remember Username
          </label>
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Log in
          </button>
        </div>
        <div>
          <p>
            <a href="#" onClick={handleLostPassword}>
              Lost Password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm