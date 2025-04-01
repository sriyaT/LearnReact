import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div data-testid="foodItems">
      {items?.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className=" p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <div className="flex justify-between ">
              <div className="py-2 w-9/12">
                <span>{item?.card?.info?.name}</span>{" "}
                <span>
                  {" "}
                  - ₹
                  {item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.price / 100}
                </span>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="w-3/12 p-4 ">
                <div className="absolute ">
                  <button
                    className=" mx-16 p-1 rounded-lg bg-white shadow-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                </div>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="item-img"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
