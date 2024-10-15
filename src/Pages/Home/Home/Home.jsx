import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
// import img1 from "../../../assets/menu/salad-bg.jpg";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      {/* <div className="mx-auto bg-black p-20">
        <img
          src={img1}
          className="w-[118px] h-[104px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Home;
