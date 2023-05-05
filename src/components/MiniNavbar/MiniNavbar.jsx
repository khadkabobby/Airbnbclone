import React, { useState, useRef } from "react";
import "./mininavbar.scss";

import { categories } from "../index";
import CategorieBox from "../CategorieBox/CategorieBox";

import { Icon } from "@iconify/react";

const MiniNavbar = () => {
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(0);
  const [selectCategories, setSelectCategories] = useState(1);

  const carouselRef = useRef(null);

  const btnpressprev = () => {
    let width = carouselRef.current.clientWidth;
    carouselRef.current.scrollLeft = -width;
    setLeftArrow((prev) => prev - 1);
    setRightArrow((prev) => prev - 1);
  };
  const btnpressnext = () => {
    let width = carouselRef.current.clientWidth;
    carouselRef.current.scrollLeft = +width;
    setLeftArrow((prev) => prev + 1);
    setRightArrow((prev) => prev + 1);
  };
  return (
    <React.Fragment>
      <div className="mininavbar">
        <div className="wrapper mini-group">
          <div className="categories">
            <div
              className={`button prevbutton ${
                leftArrow == 0 ? "nonactive" : ""
              }`}
              onClick={() => btnpressprev()}
            >
              <Icon
                icon="mdi:chevron-down-circle-outline"
                color="#717171"
                width="32"
                height="32"
                rotate={1}
                className="arrowbtn"
              />
            </div>
            <div
              className={`button nextbutton ${
                rightArrow == 0 ? "" : "nonactive"
              }`}
              onClick={() => btnpressnext()}
            >
              <Icon
                icon="mdi:chevron-down-circle-outline"
                color="#717171"
                width="32"
                height="32"
                rotate={3}
                className="arrowbtn"
              />
            </div>

            <div className="carousel" ref={carouselRef}>
              {categories.map(({ id, label, imgsrc, ...rest }) => (
                <CategorieBox
                  label={label}
                  imgsrc={imgsrc}
                  key={id}
                  selectCategories={selectCategories}
                  setSelectCategories={setSelectCategories}
                  id={id}
                />
              ))}
            </div>
          </div>
          <div className="filters">
            <div className="filterIcon">
              {" "}
              <Icon icon="material-symbols:filter-list" />
            </div>
            <div className="filter">Filters</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MiniNavbar;
