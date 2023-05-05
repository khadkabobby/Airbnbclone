import React from "react";
import SuperNavbar from "./components/SuperNavbar/SuperNavbar";
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import ListingCard from "./components/ListingCard/ListingCard";

const App = () => (
  <React.Fragment>
    <SuperNavbar />
    <MiniNavbar />
    <ListingCard />
  </React.Fragment>
);

export default App;
