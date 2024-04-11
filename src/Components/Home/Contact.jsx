import React from "react";
import { Grid, Typography, Box, ListItem, ListItemIcon } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./contactstyle.css";

const Contact = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "20px", margin: 1 }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
          Contact us
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ paddingLeft: 2 }}>
        <ListItem>
          <Typography>
            Leave your email and we will get back to you within 24 hours
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <Typography>yohannestaye83@gmail.com</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalPhoneIcon />
          </ListItemIcon>
          <Typography>+251-9-133-985-61</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <Typography>
            ALX Ethiopia |Hayahulet Mazoria Hub, 6th Floor|
          </Typography>
        </ListItem>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        zIndex={1}
        justifyContent="center"
        sx={{ height: "50vh", paddingRight: 3 }}
      >
        <Box sx={{ width: "100%", height: "100%" }} className="home-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.2653207111998!2d38.786288!3d9.015262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cbbae45717%3A0xb3bb275f1249acb5!2sALX%20Ethiopia%20%7CHayahulet%20Mazoria%20Hub%2C%206th%20Floor%7C!5e0!3m2!1sen!2set!4v1712056999562!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
