import Home  from "./component/Home";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Summary from "./component/Summary";
import Booking from "./component/Booking";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Main from "./component/Main";

// Create a context to manage the state of shows
export const UserContext = createContext();

function App() {
  // Initialize state for shows
  const [shows, setShows] = useState([]);

  return (
    // Provide the state and setter to the components within the UserContext.Provider
    <UserContext.Provider value={[shows , setShows]}>
      {/* Use BrowserRouter to enable routing */}
      <Router>
        {/* Define routes for different components */}
        <Routes>
          {/* Route for the main component */}
          <Route path="/" Component={Main}/>
          {/* Route for the home component */}
          <Route path="/home" Component={Home}/>
          {/* Route for the summary component with a dynamic parameter 'showId' */}
          <Route path="/summary/:showId" Component={Summary}/>
          {/* Route for the booking component with a dynamic parameter 'showID' */}
          <Route path="/booking/:showID" Component={Booking}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
