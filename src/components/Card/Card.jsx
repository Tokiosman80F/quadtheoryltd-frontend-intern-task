import { useContext } from "react";
import { FoodDataContext } from "../../App";
import Slider from "react-slick";
import FoodCard from "./FoodCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        fontSize: "24px",
        position: "absolute",
        top: "-15px",
        right: "0%",
        cursor: "pointer",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-gray-500 " />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        fontSize: "24px",
        color: "grey",
        position: "absolute",
        top: "-15px",
        left: "96%",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-gray-400 " />
    </div>
  );
};

const Card = () => {
  const popularFoodItems = useContext(FoodDataContext);
  console.log("popular food item", popularFoodItems);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="flex justify-between px-4">
        <h1 className="text-xl font-semibold">Popular</h1>
        <button className="mr-10 text-orange-500 font-semibold">Add more</button>
      </div>
      <div style={{ position: "relative !important" }}>
        <div>
          <Slider {...settings}>
            {popularFoodItems.map((item) => (
              <FoodCard key={item.Id} item={item}></FoodCard>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Card;

/*
{popularFoodItems.map((items) => (
          <div key={items.Id}>
            <img src={items.ImageUrl} alt="" />
            <p>{items.Name}</p>
          </div>
        ))}

*/
