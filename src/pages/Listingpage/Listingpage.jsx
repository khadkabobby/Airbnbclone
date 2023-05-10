import React from "react";
import "./listingpage.scss";
import ListingCard from "../../components/ListingCard/ListingCard";
import SuperNavbar from "../../components/SuperNavbar/SuperNavbar";
import MiniNavbar from "../../components/MiniNavbar/MiniNavbar";
import useFetchDynamic from "../../hooks/useFetchDynamic";

const Listingpage = () => {
  const params = {
    checkin_date: "2023-09-27",
    dest_type: "city",
    units: "metric",
    checkout_date: "2023-09-28",
    adults_number: "2",
    order_by: "popularity",
    dest_id: "-553173",
    filter_by_currency: "AED",
    locale: "en-gb",
    room_number: "1",
    children_number: "2",
    children_ages: "5,0",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
    page_number: "0",
    include_adjacency: "true",
  };
  const { data, loading } = useFetchDynamic("/search", params);
  const listingArray = data?.result;

  return (
    <>
      <SuperNavbar />
      <MiniNavbar />
      {!loading ? (
        <div className="listing-items wrapper">
          <div className="cards">
            {listingArray?.map(
              ({
                hotel_name,
                hotel_id,
                address,
                max_photo_url,
                review_score,
                composite_price_breakdown,
              }) => (
                <ListingCard
                  key={hotel_id}
                  hotel_name={hotel_name}
                  address={address}
                  hotel_id={hotel_id}
                  max_photo_url={max_photo_url}
                  review_score={review_score}
                  composite_price_breakdown={composite_price_breakdown}
                />
              )
            )}
          </div>
        </div>
      ) : (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
    </>
  );
};

export default Listingpage;
