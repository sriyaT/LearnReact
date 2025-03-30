import React from "react";
import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const { info } = resData;

  return (
    <div>
      <div className="m-4 p-4 w-[260px]  rounded-lg bg-gray-100 hover:bg-gray-400 ">
        <img
          className="rounded-lg h-[200px] w-[250px]"
          alt="res-logo"
          src={CDN_URL + info?.cloudinaryImageId}
        />
      </div>
      <div className=" m-4 w-[250px] p-4">
        <h2 className="break-words ">{info?.name}</h2>
        <span className="break-words">{(info?.cuisines).join(", ")}</span>
        <p className="flex justify-between">
          <h3 className="break-words">{info?.avgRating} star</h3>
          <h3 className="break-words">{info?.sla?.deliveryTime} mins</h3>
        </p>
      </div>
    </div>
  );
};

//Higher order component
//input  - ResCard  ==> ResCardPromoted

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
