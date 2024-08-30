import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { FavoriteBorder, Visibility } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { ImageApi } from "../../utils/axiosRequest/axiosRequest";
import { addToCart, getProducts } from "../../reducers/dataList/dataListSlice";


const Products = () => {

  const data = useSelector((store) => store.dataList.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const [time, setTime] = useState("");

  const timer = setTimeout(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    setTime(timeString);
  }, 1000);

  const date = new Date();
  const day = date.getDate();

  const navigate = useNavigate();

  return (
    <Box className="w-[87%] m-auto p-6 mt-[100px]">
      <h2 className="text-red-500 font-semibold mb-2 flex items-center">
        <span className="inline-block mr-2 bg-red-500 w-3 h-10 rounded-full"></span>
        Today's
      </h2>
      <Box className="flex gap-[100px]">
        <Typography variant="h3" sx={{ marginTop: "30px" }}>
          Flash Sales
        </Typography>

        <Box className="flex flex-col">
          <Box className="flex space-x-4 mb-1">
            <Box className="text-center">
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                Days
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                Hours
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                Minutes
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                Seconds
              </Typography>
            </Box>
          </Box>
          <p className="text-[40px] font-[600] tracking-[10px]">
            {day}:{time}
          </p>
        </Box>
      </Box>
      <Box className="w-[100%] flex justify-around mt-[20px] lg:hidden">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
          {data?.map((el) => (
            <SwiperSlide key={el.id}>
              <Card className="w-64 flex-shrink-0 relative mb-[30px] xl:w-[95%]">
             
             {
              el.hasDiscount && (
                <Box className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                  -{el.discountPrice}%
                </Box>
              )
             }
            <Box className="absolute top-0 right-0">
              <IconButton color="error" aria-label="add to favorites">
                <FavoriteBorder />
              </IconButton>

              <Link to={"/" + el.id}>
              <IconButton color="primary" aria-label="view">
                <Visibility />
              </IconButton>
              </Link>


            </Box>
            <Link to={"/" + el.id}>
             <img style={{height:"300px"}} src={ImageApi + el.image} alt="" />
            </Link>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="line-clamp-2"
              >
                {el.productName}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                className="font-bold"
              >
                ${el.price}{" "}
                <span className="line-through text-gray-500">
                  ${el.price}
                </span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span className="text-red-600">{el.discountPrice}%</span> off
              </Typography>
            </CardContent>
            <CardActions>
            <Button onClick={() => {
                if (localStorage.getItem('access_token')) {
                  dispatch(addToCart(el.id))
                  alert("Product has been added")
                }
                else {
                  alert('You need to login to add items to cart')
                  navigate('/login')
                }
              }} variant="text" className="w-full" sx={{backgroundColor:"black", color:"white", ":hover":{color: "black", fontWeight:"500"}}}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
          </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box className="text-center mt-6">
        <Link to={"/product"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              ":hover": { backgroundColor: "red" },
            }}
          >
            View All Products
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Products;
