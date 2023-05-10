import React from "react";
import "./categoriebox.scss";

const CategorieBox = ({
  id,
  label,
  imgsrc,
  selectCategories,
  setSelectCategories,
  ...rest
}) => {
  return (
    <div className={`borderbox ${selectCategories == id ? "selected" : ""} `}>
      <div
        className={`categoriesbox`}
        onClick={() => {
          selectCategories == 1
            ? setSelectCategories(-1)
            : setSelectCategories(id);
        }}
      >
        <div className="categoriesImg">
          <img src={imgsrc} alt="imgsrc" />
        </div>
        <div className="label">{label}</div>
      </div>
    </div>
  );
};

export default CategorieBox;
