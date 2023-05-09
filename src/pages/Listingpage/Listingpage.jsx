import React, { useEffect } from "react";
import "./listingpage.scss";
import ListingCard from "../../components/ListingCard/ListingCard";
import useFetch from "../../hooks/useFetch";
import SuperNavbar from "../../components/SuperNavbar/SuperNavbar";
import MiniNavbar from "../../components/MiniNavbar/MiniNavbar";

const Listingpage = () => {
  const response = useFetch("hotel/all-hotels");
  console.log(response?.data?.result);
  const listingArray = response?.data?.result;

  return (
    <>
      <SuperNavbar />
      <MiniNavbar />
      <div className="listing-items wrapper">
        <div className="cards">
          {listingArray?.map((element) => (
            <ListingCard key={element.id} element={element} />
          ))}
          {/* {imgArray?.map((img) => (
            <ListingCard
            //  img={img} key={img?.imageId} 
             />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Listingpage;
