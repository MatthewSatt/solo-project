import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import './profileButton.css'
import {useSelector} from 'react-redux'


function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

const sessionUser = useSelector(state => state.session.user);


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button id='whocaresanymore' onClick={openMenu}>HELLO,<br></br>{sessionUser.username}
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>

      )}
      <div className='login-navigation'>
        <Link id='profile-link' to='/notes'>View all notes</Link>
        <Link id='profile-link' to='/new'>Add a note</Link>
      </div>
    </>
  );
}

export default ProfileButton;
