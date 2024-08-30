import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./sale.css"

const Sale = () => {
  const date = new Date();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    <div>
      <div className="w-[85%] h-[500px] m-auto mt-[100px] bg-[black] flex justify-around items-center lg:flex-col lg:h-[800px] lg:text-center">
        <div>
          <h1 className="text-[#00FF66] font-[600] mb-[30px]">Categories</h1>

          <h1 className="text-[48px] font-[600] text-white w-[440px] mb-[30px]">
            Enhance Your Music Experience
          </h1>

          <div className="flex gap-[20px] mb-[30px] lg:justify-center">
            <div className="w-[65px] h-[65px] rounded-full bg-white flex flex-col justify-center items-center">
              <p className="text-[16px] font-[600]">{day}</p>
              <p>Days</p>
            </div>
            <div className="w-[65px] h-[65px] rounded-full bg-white flex flex-col justify-center items-center">
              <p className="text-[16px] font-[600]">{hour}</p>
              <p>Hour</p>
            </div>
            <div className="w-[65px] h-[65px] rounded-full bg-white flex flex-col justify-center items-center">
              <p className="text-[16px] font-[600]">{minute}</p>
              <p>Minutes</p>
            </div>
            <div className="w-[65px] h-[65px] rounded-full bg-white flex flex-col justify-center items-center">
              <p className="text-[16px] font-[600]">{second}</p>
              <p>Seconds</p>
            </div>
          </div>

          <button className="w-[170px] h-[50px] bg-[#00FF66] rounded-md">
            Buy Now!
          </button>
        </div>

        <div>
          <img src="public/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg" alt="" />
        </div>
      </div>


      <div className='w-[85%] m-auto mt-[100px]'>
        <p className='text-2xl text-[red] font-[600]'>Featured</p>
        <p className='text-4xl font-[700]'>New Arrival</p>
        <div className='flex gap-[50px] items-center mb-[100px]'>
          <div className="App w-[50%] h-full" style={{width:"50%"}}>
        <div className="image-container">
          <img src="src/components/sale/ps5-slim-goedkope-playstation_large 1.svg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
              <p className='text-2xl font-[600]'>PlayStation 5</p>
              <p className='text-xl mt-[20px]'>Black and White version of the PS5 coming out on sale.</p>
              <p className='text-xl mt-[20px]'>Shop Now</p>
            </div>
          </div>
        </div>
      </div>
          <div className='w-[55%] h-full'>
            <div className="App h-full">
        <div className="image-container w-[100%]">
          <img src="src/components/sale/attractive-woman-wearing-hat-posing-black-background 1.svg" alt="Mountains" className='w-[100%] h-full bg-[#171717] p-[20px]' />
          <div className="overlay">
            <div className="text">
              <p className='text-2xl font-[600]'>Women’s Collections</p>
              <p className='text-xl mt-[20px]'>Featured woman collections that give you another vibe.</p>
              <p className='text-xl mt-[20px]'>Shop Now</p>
            </div>
          </div>
        </div>
      </div>
            <div className='flex gap-[50px] h-full mt-[50px]'>
            <div className="App h-full">
        <div className="image-container w-[100%]">
          <img src="src/components/sale/Frame 707.svg" alt="Mountains" className='w-[100%] h-full bg-[#171717] p-[20px]' />
          <div className="overlay">
            <div className="text">
              <p className='text-2xl font-[600]'>Speakers</p>
              <p className='text-xl mt-[20px]'>Amazon wireless speakers</p>
              <p className='text-xl mt-[20px]'>Shop Now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="App h-full">
        <div className="image-container w-[100%]">
          <img src="src/components/sale/Frame 706.svg" alt="Mountains" className='w-[100%] h-full bg-[#171717] p-[20px]' />
          <div className="overlay">
            <div className="text">
              <p className='text-2xl font-[600]'>Perfume</p>
              <p className='text-xl mt-[20px]'>GUCCI INTENSE OUD EDP</p>
              <p className='text-xl mt-[20px]'>Shop Now</p>
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>


      <Box className="mt-[100px] flex justify-around lg:flex-wrap lg:gap-[10px]">

        <Box className="w-[270px] h-[230px] flex flex-col justify-center items-center gap-2 border-solid border-2 border-grey rounded-xl hover:bg-[#DB4444] hover:text-white">
          <img src="src/assets/Services.svg" alt="" />
          <Typography variant="h3">10.5k</Typography> 
          <Typography variant="h6">Sallers active our site</Typography> 
        </Box>


        <Box className="w-[270px] h-[230px] flex flex-col justify-center items-center gap-2 border-solid border-2 border-grey rounded-xl hover:bg-[#DB4444] hover:text-white">
          <img src="src/assets/Services (1).svg" alt="" />
          <Typography variant="h3">33k</Typography> 
          <Typography variant="h6">Mopnthly Produduct Sale</Typography> 
        </Box>


        <Box className="w-[270px] h-[230px] flex flex-col justify-center items-center gap-2 border-solid border-2 border-grey rounded-xl hover:bg-[#DB4444] hover:text-white">
          <img src="src/assets/Services (2).svg" alt="" />
          <Typography variant="h3">45.5k</Typography> 
          <Typography variant="h6">Customer active in our site</Typography> 
        </Box>


        <Box className="w-[270px] h-[230px] flex flex-col justify-center items-center gap-2 border-solid border-2 border-grey rounded-xl hover:bg-[#DB4444] hover:text-white">
          <img src="src/assets/Services (3).svg" alt="" />
          <Typography variant="h3">25k</Typography> 
          <Typography variant="h6">Anual gross sale in our site</Typography> 
        </Box>

      </Box>
    </div>
  );
};

export default Sale;
