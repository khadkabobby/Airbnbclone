import React from "react";
import "./housingpage.scss";
import HousingComp from "../../components/HousingComp/HousingComp";
import HousingNavbar from "../../components/HousingNavbar/HousingNavbar";

const HousingPage = () => {
  return (
    <>
      <div className="housingpage">
        <HousingComp />
      </div>
    </>
  );
};

export default HousingPage;
