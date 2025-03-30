import React, { useEffect, useState, useContext } from "react";
import ResCard, { withPromotedLabel } from "./ResCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const ResCardPromoted = withPromotedLabel(ResCard);

  /* Whenever state variable update, React triggers a reconciliation cycle (renders the component)*/

  const { loggedInUser, setUserName } = useContext(UserContext);
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline, Please check your internet connection!!
      </h1>
    );

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
      <div className="filter flex items-center ">
        <div className="search flex  m-4 p-2 rounded-lg items-center">
          <input
            type="text"
            className="border border-solid  h-[40px] border-black"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e?.target?.value);
            }}
          ></input>

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              setListOfRestaurants(topRatedRes);
            }}
          >
            {" "}
            Top Rated Restaurants
          </button>
        </div>
        <div className="search flex  m-4 p-2 rounded-lg items-center">
          <label>UserName</label>
          <input
            className="border border-black p-2 m-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e?.target?.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRes?.map((item, index) => {
          return (
            <Link key={item?.info?.id} to={"/restaurants/" + item?.info?.id}>
              {item?.info?.promoted === true ? (
                <ResCardPromoted resData={item} />
              ) : (
                <ResCard resData={item} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
