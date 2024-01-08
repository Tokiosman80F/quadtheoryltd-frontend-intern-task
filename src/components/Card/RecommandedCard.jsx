import { useContext, useState } from "react";
import { FoodDataContext } from "../../App";
import Slider from "react-slick";
import FoodCard from "./FoodCard";
import ArrowButton from "./ArrowButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";

const RecommandedCard = () => {
  let foodItems = useContext(FoodDataContext);
  const recommandedFoodItems=foodItems.filter(item=>item.IsRecommended)  
  console.log("Recommanded food item", recommandedFoodItems);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between px-4">
        <h1 className="text-xl font-semibold">Recommanded</h1>
        <div>
          <button
            className="mr-10 text-orange-500 font-semibold"
            onClick={openModal}
          >
            Add more
          </button>
          {/* ----------Modal------ */}
          <Modal showModal={showModal} closeModal={closeModal} />
        </div>
      </div>
      <div style={{ position: "relative !important" }}>
        <div>
          <Slider {...settings}>
            {recommandedFoodItems.map((item) => (
              <FoodCard key={item.Id} item={item}></FoodCard>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RecommandedCard;
