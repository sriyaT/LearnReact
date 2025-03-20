import React from "react";
import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const { info } = resData;

  https: return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + info?.cloudinaryImageId}
      />
      <div className="desc">
        <h4>{info?.name}</h4>
        <span>{info?.cuisines}</span>
        <p>
          <label>{info?.avgRating} star</label>
          <label>{info?.sla?.deliveryTime} mins</label>
        </p>
      </div>
    </div>
  );
};

export default ResCard;
