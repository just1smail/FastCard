import React from "react";
import { Box, Typography, Breadcrumbs, Grid } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box className="w-[90%] m-auto p-8 pt-[120px]">
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "50px" }}>
        <Link underline="hover" color="inherit" to={"/"}>
          Home
        </Link>
        <Typography color="textPrimary">About</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "700", marginBottom: "50px" }}>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph sx={{ marginBottom: "30px" }}>
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </Typography>
          <Typography variant="body1" paragraph>
            Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer products.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="public/Side Image.svg"
            alt="Our Story"
            className="w-full h-auto"
          />
        </Grid>
      </Grid>

      <Box className="mt-[100px] flex justify-center lg:justify-around lg:flex-wrap gap-8">
        {[
          { imgSrc: "src/assets/Services.svg", count: "10.5k", text: "Sellers active our site" },
          { imgSrc: "src/assets/Services (1).svg", count: "33k", text: "Monthly Product Sale" },
          { imgSrc: "src/assets/Services (2).svg", count: "45.5k", text: "Customer active in our site" },
          { imgSrc: "src/assets/Services (3).svg", count: "25k", text: "Annual gross sale in our site" }
        ].map((item, index) => (
          <Box key={index} className="w-[90%] lg:w-[270px] h-[230px] flex flex-col justify-center items-center gap-2 border-solid border-2 border-grey rounded-xl hover:bg-[#DB4444] hover:text-white">
            <img src={item.imgSrc} alt="" />
            <Typography variant="h3">{item.count}</Typography>
            <Typography variant="h6" className="text-center">{item.text}</Typography>
          </Box>
        ))}
      </Box>

      <Box className="mt-[150px] flex justify-center lg:justify-around lg:flex-wrap gap-8">
        {[
          { imgSrc: "src/assets/Frame 874.svg", name: "Tom Cruise", title: "Founder & Chairman" },
          { imgSrc: "src/assets/Frame 875.svg", name: "Emma Watson", title: "Managing Director" },
          { imgSrc: "src/assets/Frame 876.svg", name: "Will Smith", title: "Product Designer" }
        ].map((item, index) => (
          <Box key={index} className="w-[90%] lg:w-auto text-center">
            <img className="mb-[40px]" src={item.imgSrc} alt="" />
            <Box>
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="h6" sx={{ marginBottom: "20px" }}>{item.title}</Typography>
              <Box className="flex justify-center gap-[10px]">
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className="mt-[200px] flex flex-wrap justify-center lg:justify-around gap-8 mb-[50px]">
        {[
          { imgSrc: "src/assets/Services (4).svg", title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
          { imgSrc: "src/assets/Services (5).svg", title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
          { imgSrc: "src/assets/Services (6).svg", title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" }
        ].map((item, index) => (
          <Box key={index} className="w-[90%] lg:w-[270px] h-[160px] flex flex-col justify-center items-center gap-4">
            <img src={item.imgSrc} alt="" />
            <Typography variant="h6" className="text-center">{item.title}</Typography>
            <Typography variant="h6" sx={{ fontSize: "14px" }} className="text-center">{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
