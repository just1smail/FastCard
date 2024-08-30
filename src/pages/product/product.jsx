import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCategory,
  getFilterBrand,
  getFilterCategory,
  getFilterColor,
  getFilterPrice,
  getProducts,
  getProductsBrands,
  getProductsColor,
} from "../../reducers/dataList/dataListSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  TextField,
  MenuItem,
  Slider,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import { FavoriteBorder, Visibility } from "@mui/icons-material";
import { ImageApi } from "../../utils/axiosRequest/axiosRequest";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.dataList.data);
  const colors = useSelector((store) => store.dataList.colors);
  const brands = useSelector((store) => store.dataList.brands);
  const categories = useSelector((store) => store.dataList.categories);

  const filterCategory = useSelector((store) => store.dataList.filterCategory);
  const filterBrand = useSelector((store) => store.dataList.filterBrand);
  const filterColor = useSelector((store) => store.dataList.filterColor);
  const filterPrice = useSelector((store) => store.dataList.filterPrice);

  const [open ,setOpen] = useState("All")
  const [price, setPrice] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
    dispatch(getProductsColor());
    dispatch(getProductsBrands());
  }, [dispatch]);

  
  return (
    <div className="pt-[150px] flex">
      <Box className="w-1/4 p-4">
        
        <Typography variant="h6" sx={{marginBottom:"10px"}}>Categories</Typography>
        <Typography variant="h6" sx={{":hover":{color:"red"}}} onClick={() => setOpen("All")}>All Category</Typography>
        {categories.map((el) => {
          return <Typography key={el.id} variant="h6" sx={{":hover":{color:"red"}}} onClick={() => {dispatch(getFilterCategory(el.id)); setOpen("category")}}> {el.categoryName} </Typography>
        })}

        <Typography variant="h6" sx={{marginBottom:"10px", marginTop:"30px"}}>Brands</Typography>
        {brands.map((el) => {
          return <Typography key={el.id} variant="h6"  sx={{":hover":{color:"red"}}} onClick={() => {dispatch(getFilterBrand(el.id)); setOpen("brand")}}>{el.brandName} </Typography>
        })}

        <Typography variant="h6" sx={{marginBottom:"10px", marginTop:"30px"}}>Price range</Typography>
        <Slider
          value={price}
          onChange={(e, newValue) => setPrice(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={100000}
          className="my-4"
        />
        <Button variant="outlined" fullWidth onClick={() => {dispatch(getFilterPrice(price)); setOpen("price")}}>
          Apply
        </Button>

        <Typography variant="h6" sx={{marginBottom:"10px", marginTop:"30px"}}>Colors</Typography>
        {colors.map((el) => {
          return <Typography key={el.id} variant="h6"  sx={{":hover":{color:"red"}}} onClick={() => {dispatch(getFilterColor(el.id)); setOpen("color")}}>{el.colorName} </Typography>
        })}
      </Box>


      {open === "All" ? (
        <div className="flex-1 flex flex-wrap gap-5">
        {data.map((el) => (
          <Card key={el.id} className="w-64 h-[450px] flex-shrink-0 relative">
            {el.hasDiscount && (
              <Box className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                -{el.discountPrice}%
              </Box>
            )}
            <Box className="absolute top-0 right-0">
              <IconButton aria-label="add to favorites">
                <FavoriteBorder />
              </IconButton>
              <Link to={"/" + el.id}>
                <IconButton aria-label="view">
                  <Visibility />
                </IconButton>
              </Link>
            </Box>
            <Link to={"/" + el.id}></Link>
            <img style={{ height: "300px" }} src={ImageApi + el.image} alt="" />
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
                <span className="line-through text-gray-500">${el.price}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span className="text-red-600">{el.discountPrice}%</span> off
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    dispatch(addToCart(el.id));
                    alert("Product has been added");
                  } else {
                    alert("You need to login to add items to cart");
                    navigate("/login");
                  }
                }}
                variant="text"
                className="w-full"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", fontWeight: "500" },
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      ) : open === "category" ? (
        <div className="flex-1 flex flex-wrap gap-5">
        {filterCategory?.map((el) => (
          <Card key={el.id} className="w-64 h-[450px] flex-shrink-0 relative">
            {el.hasDiscount && (
              <Box className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                -{el.discountPrice}%
              </Box>
            )}
            <Box className="absolute top-0 right-0">
              <IconButton aria-label="add to favorites">
                <FavoriteBorder />
              </IconButton>
              <Link to={"/" + el.id}>
                <IconButton aria-label="view">
                  <Visibility />
                </IconButton>
              </Link>
            </Box>
            <Link to={"/" + el.id}></Link>
            <img style={{ height: "300px" }} src={ImageApi + el.image} alt="" />
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
                <span className="line-through text-gray-500">${el.price}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span className="text-red-600">{el.discountPrice}%</span> off
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    dispatch(addToCart(el.id));
                    alert("Product has been added");
                  } else {
                    alert("You need to login to add items to cart");
                    navigate("/login");
                  }
                }}
                variant="text"
                className="w-full"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", fontWeight: "500" },
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      ) : open === "brand" ? (
        <div className="flex-1 flex flex-wrap gap-5">
        {filterBrand?.map((el) => (
          <Card key={el.id} className="w-64 h-[450px] flex-shrink-0 relative">
            {el.hasDiscount && (
              <Box className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                -{el.discountPrice}%
              </Box>
            )}
            <Box className="absolute top-0 right-0">
              <IconButton aria-label="add to favorites">
                <FavoriteBorder />
              </IconButton>
              <Link to={"/" + el.id}>
                <IconButton aria-label="view">
                  <Visibility />
                </IconButton>
              </Link>
            </Box>
            <Link to={"/" + el.id}></Link>
            <img style={{ height: "300px" }} src={ImageApi + el.image} alt="" />
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
                <span className="line-through text-gray-500">${el.price}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span className="text-red-600">{el.discountPrice}%</span> off
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    dispatch(addToCart(el.id));
                    alert("Product has been added");
                  } else {
                    alert("You need to login to add items to cart");
                    navigate("/login");
                  }
                }}
                variant="text"
                className="w-full"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", fontWeight: "500" },
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      ) : open === "color" ? (
        <div className="flex-1 flex flex-wrap gap-5">
        {filterColor?.map((el) => (
          <Card key={el.id} className="w-64 h-[450px] flex-shrink-0 relative">
            {el.hasDiscount && (
              <Box className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                -{el.discountPrice}%
              </Box>
            )}
            <Box className="absolute top-0 right-0">
              <IconButton aria-label="add to favorites">
                <FavoriteBorder />
              </IconButton>
              <Link to={"/" + el.id}>
                <IconButton aria-label="view">
                  <Visibility />
                </IconButton>
              </Link>
            </Box>
            <Link to={"/" + el.id}></Link>
            <img style={{ height: "300px" }} src={ImageApi + el.image} alt="" />
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
                <span className="line-through text-gray-500">${el.price}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span className="text-red-600">{el.discountPrice}%</span> off
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    dispatch(addToCart(el.id));
                    alert("Product has been added");
                  } else {
                    alert("You need to login to add items to cart");
                    navigate("/login");
                  }
                }}
                variant="text"
                className="w-full"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", fontWeight: "500" },
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      ) : open === "price" ? (
        <div className="flex-1 flex flex-wrap gap-5">
        {filterPrice?.map((el) => (
          <Card key={el.id} className="w-64 h-[450px] flex-shrink-0 relative">
            {el.hasDiscount && (
              <Box className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">
                -{el.discountPrice}%
              </Box>
            )}
            <Box className="absolute top-0 right-0">
              <IconButton aria-label="add to favorites">
                <FavoriteBorder />
              </IconButton>
              <Link to={"/" + el.id}>
                <IconButton aria-label="view">
                  <Visibility />
                </IconButton>
              </Link>
            </Box>
            <Link to={"/" + el.id}></Link>
            <img style={{ height: "300px" }} src={ImageApi + el.image} alt="" />
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
                <span className="line-through text-gray-500">${el.price}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span className="text-red-600">{el.discountPrice}%</span> off
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    dispatch(addToCart(el.id));
                    alert("Product has been added");
                  } else {
                    alert("You need to login to add items to cart");
                    navigate("/login");
                  }
                }}
                variant="text"
                className="w-full"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", fontWeight: "500" },
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      ) : null}


    </div>
  );
};

export default Product;
