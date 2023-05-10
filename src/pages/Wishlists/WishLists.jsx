import React from "react";
import "./wishlists.scss";

import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../store/wishListSlice";

import SuperNavbar from "../../components/SuperNavbar/SuperNavbar";
import { useNavigate } from "react-router-dom";
const WishLists = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };
  const navigate = useNavigate();
  return (
    <>
      <SuperNavbar />
      <div className=" wrapper wishlists">
        <h2>Wishlists</h2>
        <div className="wishlists__wrapper">
          {wishlist.length === 0 ? (
            <h4>Your wishlist is empty.</h4>
          ) : (
            wishlist.map((hotel) => (
              <div
                className="wishlist"
                key={hotel.id}
                onClick={() => navigate(`/hotel/${hotel.id}`)}
              >
                {hotel.imageUrl[0] && (
                  <div className="wishlist__img">
                    <img src={hotel.imageUrl[0].url_max} alt="wishlist" />
                  </div>
                )}

                <div className="wishlist__name">
                  <p>{hotel.name}</p>
                </div>
                <button
                  className="favoriteIcon"
                  onClick={() => handleRemoveFromWishlist(hotel.id)}
                >
                  <Icon icon="ic:outline-favorite" color="#ff385c" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishLists;
