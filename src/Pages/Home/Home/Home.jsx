import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
// import img1 from "../../../assets/menu/salad-bg.jpg";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="p-8">
        <Category />
        <ChefService />
      </div>
    </div>
  );
};

export default Home;
