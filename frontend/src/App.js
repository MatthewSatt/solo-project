import AllNotes from "./components/AllNotes";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomeLanding from "./components/HomeLanding";
import OneNote from "./components/OneNote";
import AddNewNote from "./components/AddNewNote";
import HomePage from "./components/HomePage";
import AddOneNote from "./components/AddNewNote";
import EditNoteForm from './components/EditNoteForm'


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


           <Route exact path ='/notes'>
            <AllNotes />
          </Route>


          <Route exact path="/notes/:noteId">
            <OneNote />
          </Route>

          <Route exact path='/new'>
            <AddOneNote />
          </Route>
          <Route exact path='/:id/edit'>
            <EditNoteForm />
          </Route>



        </Switch>
      )}
    </>
  );
}

export default App;
