import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Register from '../../register/Register';
// import Login from '../../account/Login';

const Overlay = () => (<Register />);

// const Overlay = (props) => {
//   return ( 
//     <div>     
//       {props.type === 'signup' ? (
//         <Register />
//       ) : (
//         <Login />
//       )}
//     </div> 
//   );
// };

export default Overlay;
