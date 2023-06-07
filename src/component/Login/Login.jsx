// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import axios from 'axios';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import dotenv from 'dotenv';
// import { Buffer } from 'buffer';

// dotenv.config();

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);
  
//     const handleRegister = async (event) => {
//       event.preventDefault();
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
//       const response = await axios.post('http://14.225.7.179:8081/docs', {
//         username: username,
//         password: hashedPassword,
//       });
//       if (response.status === 201) {
//         alert('Registered successfully!');
//       }
//     };
  
//     const handleLogin = async (event) => {
//       event.preventDefault();
//       const response = await axios.post('http://14.225.7.179:8081/docs', {
//         username: username,
//         password: password,
//       });
//       if (response.status === 200) {
//         const token = response.data.token;
//         localStorage.setItem('token', token);
//         setLoggedIn(true);
//       }
//     };
  
//     const handleLogout = () => {
//       localStorage.removeItem('token');
//       setLoggedIn(false);
//     };
  
//     return (
//       <Router>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             {loggedIn ? (
//               <li>
//                 <button onClick={handleLogout}>Logout</button>
//               </li>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/register">Register</Link>
//                 </li>
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>
  
//         <Routes>
//           <Route exact path="/">
//             <h1>Welcome to Fake LOCATION!</h1>
//           </Route>
//           <Route path="/register">
//             <form onSubmit={handleRegister}>
//               <label>
//                 Username:
//                 <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
//               </label>
//               <label>
//                 Password:
//                 <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//               </label>
//               <button type="submit">Register</button>
//             </form>
//           </Route>
//           <Route path="/login">
//             <form onSubmit={handleLogin}>
//               <label>
//                 Username:
//                 <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
//               </label>
//               <label>
//                 Password:
//                 <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//               </label>
//               <button type="submit">Login</button>
//             </form>
//           </Route>
//         </Routes>
//       </Router>
//     );
//   };

// export default Login;
