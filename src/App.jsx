import React from "react";
import SuperNavbar from "./components/SuperNavbar/SuperNavbar";
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import Listingpage from "./pages/Listingpage/Listingpage";

const App = () => (
  <React.Fragment>
    <SuperNavbar />
    <MiniNavbar />
    <Listingpage />
  </React.Fragment>
);

export default App;
