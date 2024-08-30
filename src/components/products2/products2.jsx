import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../reducers/dataList/dataListSlice";
import { ImageApi } from "../../utils/axiosRequest/axiosRequest";
import { Link } from "react-router-dom";



const Products2 = () => {

  const data = useSelector((store) => store.dataList.data)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <Box sx={{ padding: 3 }} width="87%" margin="auto" mt="100px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <h2 className="text-red-500 font-semibold mb-2 flex items-center">
            <span className="inline-block mr-2 bg-red-500 w-3 h-10 rounded-full"></span>
            This Month
          </h2>
          <Typography variant="h4">Best Selling Products</Typography>
        </Box>
        <Link to={"/product"}>
        <Button variant="contained" color="error">
          View All
        </Button>
        </Link>
      </Box>
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {data.slice(5).map((el) => (
          <Grid item xs={12} sm={6} md={3} key={el.id}>
            <Card
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Link to={"/" + el.id}>
              <img className="h-[300px]" src={ImageApi + el.image} alt="" />
              </Link>
              <CardContent>
                <Typography variant="h6">{el.productName}</Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body1"
                    color="error"
                    sx={{ marginRight: 1 }}
                  >
                    {el.price}
                  </Typography>
                  {el.discountPrice && (
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: "line-through" }}
                    >
                      {el.discountPrice}
                    </Typography>
                  )}
                </Box>
                <Box display="flex" alignItems="center" mt={1}>
                  {[...Array(5)].map((_, i) => (
                    <Typography
                      key={i}
                      color={i < el.rating ? "error" : "disabled"}
                    >
                      ★
                    </Typography>
                  ))}
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    ({el.reviews})
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ display:"flex", flexDirection:"column", position: "absolute", top: 8, right: 8 }}>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <Link to={"/" + el.id}>
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products2;
