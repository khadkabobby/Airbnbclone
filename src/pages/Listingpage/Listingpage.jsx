import React from "react";
import "./listingpage.scss";
import ListingCard from "../../components/ListingCard/ListingCard";

const Listingpage = () => {
  return (
    <>
      <div className="listing-items wrapper">
        <div className="cards">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </>
  );
};

export default Listingpage;
