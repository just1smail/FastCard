// src/components/Account.js

import React, { useEffect } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../reducers/dataList/dataListSlice";
import { getToken } from "../../utils/token/token";
import { ImageApi } from "../../utils/axiosRequest/axiosRequest";

const Account = () => {


  const profile = useSelector((store) => store.dataList.profile)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile(getToken().sid))
  }, [])

  console.log(profile);


  return (
    <Box className="w-[90%] m-auto flex gap-[50px]">
      <Box className="w-1/4 p-4 pt-[100px]">


      <Breadcrumbs aria-label="breadcrumb" sx={{marginBottom:"50px"}}>
        <Link underline="hover" color="inherit" to={"/"}>
          Home
        </Link>
        <Typography color="textPrimary">My Account</Typography>
      </Breadcrumbs>
      
        <Typography variant="h6" className="mb-4">
          Manage My Account
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="My Profile" className="text-red-600" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Address Book" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Payment Options" />
          </ListItem>
        </List>
        <Typography variant="h6" className="mt-6 mb-4">
          My Orders
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="My Returns" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Cancellations" />
          </ListItem>
        </List>
        <Typography variant="h6" className="mt-6 mb-4">
          My Wishlist
        </Typography>
      </Box>

      <Box className="flex justify-center items-center min-h-screen">
        <Box className="w-full max-w-2xl bg-white p-8 rounded shadow">
          <Typography
            variant="h5"
            className="text-red-600"
            sx={{ marginBottom: "20px" }}
          >
            Profile
          </Typography>
          <form>
            <Box className="grid grid-cols-3 gap-4 mb-4">
              <TextField variant="outlined" fullWidth value={profile.firstName}/>
              <TextField variant="outlined" fullWidth value={profile.lastName}/>
              <img className="w-[100px] h-[100px] rounded-full" src={ImageApi + profile.image} alt="" />
            </Box>
            <Box className="grid grid-cols-2 gap-4 mb-4">
              <TextField variant="outlined" fullWidth value={profile.email}/>
              <TextField variant="outlined" fullWidth value={profile.phoneNumber}/>
            </Box>
            <Typography variant="h6" className="mb-2">
              Password Changes
            </Typography>
            <Box className="grid grid-cols-2 gap-4 mb-4">
              <TextField
                label="Current password"
                variant="outlined"
                fullWidth
                type="password"
              />
            </Box>
            <Box className="grid grid-cols-2 gap-4 mb-4">
              <TextField
                label="New password"
                variant="outlined"
                fullWidth
                type="password"
              />
              <TextField
                label="Confirm new password"
                variant="outlined"
                fullWidth
                type="password"
              />
            </Box>
            <Box className="flex justify-end gap-4">
              <Button variant="outlined" color="inherit">
                Cancel
              </Button>
              <Button variant="contained" color="error">
                Save Changes
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
