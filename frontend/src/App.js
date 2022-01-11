import AllNotes from "./components/AllNotes";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomeLanding from "./components/HomeLanding";
import OneNote from "./components/OneNote";
import AddNewNote from "./components/AddNewNote";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>


          <Route exact path="/">
            <HomeLanding />
          </Route>


          <Route exact path='/notes'>
            <AllNotes />
          </Route>


          <Route path="/notes/:noteId">
            <OneNote />
          </Route>

          <Route path='/notes/new'>
            <AddNewNote />
          </Route>


        </Switch>
      )}
    </>
  );
}

export default App;
