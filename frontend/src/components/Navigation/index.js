// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import './Navigation.css';

// function Navigation({ isLoaded }){
//   const sessionUser = useSelector(state => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <ProfileButton user={sessionUser} />
//     );
//   } else {
//     sessionLinks = (
//       <>
//         <NavLink to="/login">Log In</NavLink>
//         <NavLink to="/signup">Sign Up</NavLink>
//       </>
//     );
//   }

//   return (
//     <ul>
//       <li>
//         <NavLink exact to="/">Home</NavLink>
//         {isLoaded && sessionLinks}
//       </li>
//     </ul>
//   );
// }

// export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div className='login-signup'>
        <LoginFormModal />
        <SignUpFormModal />
      </div>
  </>
    );
  }

  return (
    <ul className='navigation-navbar'>
      <li>
        <NavLink exact to="/" id="title">EverNote</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
