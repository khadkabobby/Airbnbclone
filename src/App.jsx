import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HousingPage from "./pages/HousingPage/HousingPage";
import WishLists from "./pages/Wishlists/WishLists";
import Listingpage from "./pages/Listingpage/Listingpage";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Listingpage />} />
        <Route path="/hotel/:id" element={<HousingPage />} />
        <Route path="/wishlists" element={<WishLists />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
