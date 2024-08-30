import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Footer from "../components/footer/footer";
import logo from "../../public/Group 1116606595.svg"

const Layout = () => {
  const location = useLocation();

  return (
    <div className="w-full h-[70px]">
      <div className="w-full h-[80px] bg-white flex justify-between items-center p-4 fixed z-50">
        <div className="mt-[-10px]">
          <img src={logo} alt="" className="h-[60px] lg:h-[50px] md:h-[40px]" />
        </div>

        <div className="flex w-[25%] justify-around lg:w-[40%]">
          <Link
            to="/"
            className={`text-black ${location.pathname === '/' ? 'border-b-2 border-black' : ''} pb-[2px]`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`text-black ${location.pathname === '/contact' ? 'border-b-2 border-black' : ''} pb-[2px]`}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={`text-black ${location.pathname === '/about' ? 'border-b-2 border-black' : ''} pb-[2px]`}
          >
            About
          </Link>
          <Link
            to="/register"
            className={`text-black ${location.pathname === '/register' ? 'border-b-2 border-black' : ''} pb-[2px]`}
          >
            Sign Up
          </Link>
        </div>

        <div className="w-[32%] flex justify-around items-center ">
          <div className="w-[250px] lg:hidden">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 250,
                height: "35px",
                backgroundColor: "#F5F5F5",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What are you looking for?"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>

          <div className="flex justify-around w-auto lg:w-[60%]">
            <Link to="/wishList">
              <IconButton>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Link>

            <Link to="/cart">
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Link>

            <Link to="/account">
              <IconButton>
                <PersonOutlineOutlinedIcon />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
