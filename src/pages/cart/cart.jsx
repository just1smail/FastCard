import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { axiosRequest, ImageApi } from "../../utils/axiosRequest/axiosRequest";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data2, setData2] = useState([]);

  async function getCarts() {
    try {
      const { data } = await axiosRequest.get("Cart/get-products-from-cart");
      setData2(data?.data[0]?.productsInCart);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCart(id) {
    try {
      const {data} = await axiosRequest.delete("Cart/delete-product-from-cart?id=" + id)
      getCarts(); 
    } catch (error) {
      console.error(error);
    }
  }

  async function Clear () {
    try {
      const {data} = await axiosRequest.delete("Cart/clear-cart")
      getCarts();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCarts();
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = data2.map((item) =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setData2(updatedItems);
  };


  const totalAmount = data2.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <Container className="p-4 pt-[150px]">
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Paper variant="outlined" className="p-4 mb-4">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Product
          </Grid>
          <Grid item xs={2}>
            Price
          </Grid>
          <Grid item xs={3}>
            Quantity
          </Grid>
          <Grid item xs={2}>
            Subtotal
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        {data2.map((item) => (
          <Grid
            container
            spacing={2}
            key={item.id}
            alignItems="center"
            className="my-2"
          >
            <Grid item xs={4}>
              <Box display="flex" alignItems="center">
                <img
                  src={ImageApi + item.product.image}
                  alt={item.product.productName}
                  width="50"
                  className="mr-2"
                />
                <Typography variant="body1">
                  {item.product.productName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">${item.product.price}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Select
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="w-full"
              >
                {[...Array(10).keys()].map((x) => (
                  <MenuItem key={x + 1} value={x + 1}>
                    {x + 1}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                ${item.product.price * item.quantity}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                color="error"
                onClick={() => deleteCart(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Link to={"/product"}>
          <Button variant="contained" color="primary">
            Return To Shop
          </Button>
          </Link>
          <Button variant="contained" color="error">
            Update Cart
          </Button>
          <Button onClick={() => Clear()} variant="outlined" color="error">
            Remove all
          </Button>
        </Box>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Coupon Code"
            variant="outlined"
            fullWidth
            className="mb-2"
          />
          <Button variant="contained" color="primary" className="mt-2">
            Apply
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Paper variant="outlined" className="p-4">
            <Typography variant="h6">Cart Total</Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1">Subtotal:</Typography>
              <Typography variant="body1">${totalAmount}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1">Shipping:</Typography>
              <Typography variant="body1">Free</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">${totalAmount}</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mt-2"
            >
              Proceed to Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
