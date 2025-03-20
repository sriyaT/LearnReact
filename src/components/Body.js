import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  /* Whenever state variable update, React triggers a reconciliation cycle (renders the component)*/

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /*to solve cors policy :we can add"https://corsproxy.io/?" this proxy url before the actual/production url, like this: https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.942644&lng=77.628024&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING */
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.942644&lng=77.628024&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  /* Conditional Rendering: On a basis of a condition if something on ui
   is rendering  i.e called as conditional rendering */

  const topRatedRes = listOfRestaurants?.filter((item, index) => {
    item = item?.info?.avgRating > 4;
    return item;
  });
  if (listOfRestaurants?.length === 0) {
    return <Shimmer> </Shimmer>;
  }
  return listOfRestaurants?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e?.target?.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants?.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchValue?.toLowerCase());
              });

              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(topRatedRes);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRes?.map((item, index) => {
          return (
            <Link key={item?.info?.id} to={"/restaurants/" + item?.info?.id}>
              <ResCard resData={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
