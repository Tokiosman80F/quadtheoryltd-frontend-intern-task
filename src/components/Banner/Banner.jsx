import React from 'react';
import bannerImg from "../../assets/images/banner-img.png"
const Banner = () => {
    // bg-gradient-to-tl from-amber-500 to-amber-500
    return (
        <div className='bg-amber-500 flex items-center justify-center rounded-2xl'>
            {/* content */}
            <div className='capitalize text-white'>
                <h1 className='text-2xl '>Deliver Food to your door step</h1>
                <p>authentic food || quick service , fast deliver</p>
            </div>
            {/* img */}
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;