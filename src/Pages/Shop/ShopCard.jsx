import React from "react";

const ShopCard = ({ items }) => {
  const { image, name, price, recipe } = items;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl relative">
      <figure>
        <img src={image} alt="Shoes" />
        <div className="absolute text-center bg-black w-[60px] h-[25px] text-white top-[12px] right-[12px]">
          ${price}
        </div>
      </figure>
      <div className="card-body text-center ">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-left">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="px-6 py-2 rounded-sm uppercase border border-b-2 border-b-gray-700 bg-[#E8E8E8]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
