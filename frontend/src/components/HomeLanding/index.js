import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../HomePage';
import LandingPage from '../LandingPage';

function HomeLanding({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <HomePage />
    );
  } else {
    sessionLinks = (
      <>
      <div>
       <LandingPage />
      </div>
  </>
    );
  }

  return (
    <div>{sessionLinks}</div>
  );
}

export default HomeLanding
