// Sidebar.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getCategoryById } from "../../reducers/dataList/dataListSlice";

const Sidebar = () => {
  
  const categories = useSelector((store) => store.dataList.categories);
  
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="w-[90%] m-auto flex lg:flex-col-reverse lg: justify-around pt-[100px]">
      <aside className="w-60 p-4 bg-white border-r border-gray-200 lg:mt-[20px] lg:w-[50%] lg:m-auto">
        <nav className="space-y-4">
          {categories?.map((el) => (
            <Link
              to={"/category/" + el.id}
              onClick={() => dispatch(getCategoryById(el.id))}
              key={el.id}
              className="flex justify-between items-center text-lg text-black hover:text-blue-500"
            >
              {el.categoryName} <span className="ml-2">➔</span>
            </Link>
          ))}
        </nav>
      </aside>

        <div className="w-[80%] lg:w-[100%] box-border">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide>
            <img src="public/106742568-1602615652022-gettyimages-1229049972-APPLE-IPHONES.jpg" alt="foto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="public/e755dcaf32cdc3144a7facb65f9c8934.jpg" alt="foto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="public/ZXY7HODATVPLHH65JVSIUX5LXM.jpg" alt="foto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="public/airpods-pro-2.jpg" alt="foto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="public/Uj_Bontatlan_Macbook_Pro_13___16__Apple_M1_M2_chip_Magyar_Billentyuzet_400002349222182.jpg" alt="foto" />
        </SwiperSlide>

      </Swiper>
        </div>

    </div>
  );
};

export default Sidebar;
