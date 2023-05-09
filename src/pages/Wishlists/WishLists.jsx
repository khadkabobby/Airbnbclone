import React from "react";
import "./wishlists.scss";
import SuperNavbar from "../../components/SuperNavbar/SuperNavbar";
const WishLists = () => {
  return (
    <>
      <SuperNavbar />
      <div className=" wrapper wishlists">
        <h2>Wishlists</h2>
        <div className="wishlists__wrapper">
          <div className="wishlist">
            <div className="wishlist__img">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720"
                alt="wishlist"
              />
            </div>
            <div className="wishlist__name">
              <p>test</p>
            </div>
          </div>
          <div className="wishlist">
            <div className="wishlist__img">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720"
                alt="wishlist"
              />
            </div>
            <div className="wishlist__name">
              <p>test</p>
            </div>
          </div>
          <div className="wishlist">
            <div className="wishlist__img">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720"
                alt="wishlist"
              />
            </div>
            <div className="wishlist__name">
              <p>test</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishLists;
