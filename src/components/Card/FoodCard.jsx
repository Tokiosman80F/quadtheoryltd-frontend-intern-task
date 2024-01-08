import React from "react";

const FoodCard = ({item}) => {
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <img
        className="w-full object-cover rounded-2xl h-[250px] "
        src={item.ImageUrl}

      />
      <div className="px-6 py-4 text-center text-gray-600">
        <div className=" text-xl mb-2">The Coldest Sunset</div>
        
      </div>
      
    </div>
  );
};

export default FoodCard;
