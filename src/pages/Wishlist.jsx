import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
const Wishlist = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <>
      <h1 className="text-center font-bold text-xl mt-10">
        {favorites.length > 0 ? "Whishlist" : "There is no favorites yet ... "}
      </h1>

      {favorites.length > 0 ? (
        <h1></h1>
      ) : (
        <div className="flex flex-col mt-5 justify-center items-center">
          <p className="text-md">Your wishlist is empty</p>
          <Link to={"/newarrivals"}>
            <button className="bg-blue-500 p-2 text-white rounded mt-3 hover:opacity-50 duration-300">
              Discover More
            </button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-3 lg-max:grid-cols-2 sm-max:grid-cols-1 p-5 gap-5 w-full mt-10">
        {favorites.map((item, idx) => (
          <div key={idx} className="relative w-full h-auto mb-[3rem] group">
            <div className=" border border-black">
              <Link to={`/item/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-contain h-[350px] cursor-pointer"
                />
              </Link>
            </div>
            <div className="absolute top-3 left-2 w-full opacity-0 group-hover:opacity-100 transition-all duration-500">
              <button
                onClick={() => removeFavorite(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform"
              >
                Remove
              </button>
            </div>

            <div className="flex flex-col text-center mt-2">
              <p className="font-bold">{item.title}</p>
              <p>{item.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
