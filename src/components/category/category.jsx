import React, { useState } from 'react';
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaGamepad, FaClock,  } from 'react-icons/fa';
import { useSelector } from 'react-redux';



const Category = () => {

  const { categories } = useSelector((store) => store.dataList)

  return (
    <div className="w-[87%] m-auto mt-[100px] p-4">
      <h2 className="text-red-500 font-semibold mb-2 flex items-center">
        <span className="inline-block mr-2 bg-red-500 w-3 h-10 rounded-full"></span>
        Categories
      </h2>
      <h3 className="text-2xl font-bold mb-4">Browse By Category</h3>
      <div className="w-[100%] flex items-center space-x-4 flex-wrap justify-center lg:gap-[10px]">
        {categories?.map((category, index) => (
          <div
            key={index}
            className={`w-[200px] h-[170px] p-4 border rounded-lg flex flex-col items-center justify-center hover:bg-red-500 hover:text-white`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <span className="font-semibold">{category.name}</span>
          </div>
        ))}
        <button className="text-gray-500 hover:text-black">
        </button>
      </div>
    </div>
  );
};

export default Category;