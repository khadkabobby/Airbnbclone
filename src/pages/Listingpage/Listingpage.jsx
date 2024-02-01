import React from "react";
import "./listingpage.scss";
import ListingCard from "../../components/ListingCard/ListingCard";
import SuperNavbar from "../../components/SuperNavbar/SuperNavbar";
import MiniNavbar from "../../components/MiniNavbar/MiniNavbar";
import useFetchDynamic from "../../hooks/useFetchDynamic";

const Listingpage = () => {
  const params = {

    order_by: 'popularity',
    checkout_date: '2024-05-20',
    filter_by_currency: 'AED',
    locale: 'en-gb',
    units: 'metric',
    dest_id: '-553173',
    dest_type: 'city',
    adults_number: '2',
    room_number: '1',
    checkin_date: '2024-05-19',
    include_adjacency: 'true',
    page_number: '0',
    children_number: '2',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1',
    children_ages: '5,0'
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
