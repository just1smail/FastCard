import React from "react";
import { Box, TextField, Button, Typography, Grid, Paper, Breadcrumbs } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box className="p-8 pt-[120px]">
      
      <Breadcrumbs aria-label="breadcrumb" sx={{marginBottom:"50px"}}>
        <Link underline="hover" color="inherit" to={"/"}>
          Home
        </Link>
        <Typography color="textPrimary">Contact</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper className="p-4">
            <Box className="flex items-center mb-4">
              <Phone className="text-red-500 mr-2" />
              <Typography variant="h6">Call To Us</Typography>
            </Box>
            <Typography>We are available 24/7, 7 days a week.</Typography>
            <Typography>Phone: +880611122222</Typography>
            <Box className="flex items-center mb-4 mt-6">
              <Email className="text-red-500 mr-2" />
              <Typography variant="h6">Write To Us</Typography>
            </Box>
            <Typography>
              Fill out our form and we will contact you within 24 hours.
            </Typography>
            <Typography>Emails: customer@exclusive.com</Typography>
            <Typography>Emails: support@exclusive.com</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className="p-4">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField label="Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Phone" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} className="flex justify-end">
                <Button variant="contained" color="error">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
