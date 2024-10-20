import React from "react";
import CategoryTitle from "../../../Components/CategoryTitle";
// import img1 from "../../../assets/menu/pizza-bg.jpg";
import menu from "../../../assets/menu.json";

const Menu = () => {
  const limitedMenu = menu.slice(0, 6);
  //   console.log(menu);
  console.log(limitedMenu);

  return (
    <div>
      <CategoryTitle subtitle={"Check it out"} title={"FROM OUR MENU"} />

      <div className="grid lg:grid-cols-2 gap-4">
        {limitedMenu.map((item, index) => (
          <div key={index} className="flex gap-8 h-[104px] ">
            {/* image section */}
            <div className="w-[118px] h-[104px] flex-shrink-0">
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-full rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px] "
              />
            </div>
            {/* food details section */}
            <div className="">
              <div className="flex justify-between  items-center mb-2 mt-1">
                <h1>{item.name} ------------------</h1>
                <p>${item.price}</p>
              </div>
              <h2>
                {item.recipe}
                {/* Roasted duck breast (served pink) with gratin potato and <br />{" "}
                a griottine cherry sauce */}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-4">
        <button className="py-[20px] px-[30px] rounded-[8px] border-b-[3px]  border-black">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
