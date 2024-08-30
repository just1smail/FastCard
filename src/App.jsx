import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Account from "./pages/account/account";
import Cart from "./pages/cart/cart";
import CheckOut from "./pages/checkOut/checkOut";
import Contact from "./pages/contact/contact";
import Info from "./pages/info/info";
import Login from "./pages/login/login";
import NotFound from "./pages/notFound/notFound";
import Product from "./pages/product/product";
import Register from "./pages/register/register";
import WishList from "./pages/wishList/wishList";
import Category from "./pages/category/category";
import SubCategory from "./pages/subCategory/subCategory";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Layout />
        </Suspense>,
      children: [
        {
          index: true,
          element: <Suspense>
            <Home/>
          </Suspense>,
        },
        {
          path: "/about",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <About />
        </Suspense>,
        },
        {
          path: "/account",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Account />
        </Suspense>,
        },
        {
          path: "/cart",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Cart />
        </Suspense>,
        },
        {
          path: "/checkOut",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <CheckOut />
        </Suspense>,
        },
        {
          path: "/contact",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Contact />
        </Suspense>,
        },
        {
          path: "/:id",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Info />
        </Suspense>,
        },
        {
          path: "/login",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Login />
        </Suspense>,
        },
        {
          path: "/notFound",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <NotFound />
        </Suspense>,
        },
        {
          path: "/product",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Product />
        </Suspense>,
        },
        {
          path: "/register",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Register />
        </Suspense>,
        },
        {
          path: "/wishList",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <WishList />
        </Suspense>,
        },
        {
          path: "/category/:id",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <Category />
        </Suspense>,
        },
        {
          path: "/category/:id/:subId",
          element: 
          <Suspense
          fallback={
            <Box sx={{ display: "flex" }}><CircularProgress /></Box>}>
          <SubCategory />
        </Suspense>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
