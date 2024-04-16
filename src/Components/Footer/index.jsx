import React, { useState, useEffect } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import footerBackgroundImage from "../../assets/Tddfotter2.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TelegramIcon from "@mui/icons-material/Telegram";

const TikTokIcon = ({ color = "white" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="40px"
      height="38px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

export default function Footer() {
  const isMobile = useMediaQuery("(max-width:860px)");
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerBackgroundImage})`,
        // paddingTop: "50px",
        backgroundSize: "cover",
        backgroundPosition: "95% 45%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000000",
          opacity: "80%",
          p: isMobile ? "15px" : null,
        }}
      >
        <Box
          component="footer"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
    
            <Grid item xs={12} sm={5} ml={isMobile ? null : 3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link
                  to="/Serviços"
                  style={{
                    textDecoration: "none",
                    width: "160px",
                  }}
                >
                  <Typography
                    variant="h5"
                    color="primary"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: "#eee2b1",
                      // "&:hover": {
                      //   transform: "scale(1.1)",
                      //   borderBottom: "5px solid #0000ff",
                      //   elevation: "0",
                      // },
                    }}
                  >
                    CONTACT US
                  </Typography>
                </Link>
                <Typography
                  variant={isMobile ? null : "h6"}
                  color="text.secondary"
                  sx={{ fontSize: isMobile ? "18px" : null, color: "#ffffff" }}
                >
                  {/* {lang[3]}{" "} */}
                  <EmailIcon /> contact@thedisruptorsden.org
                </Typography>
                <Typography
                  variant={isMobile ? null : "h6"}
                  sx={{ fontSize: isMobile ? "18px" : null, color: "#ffffff" }}
                  color="text.secondary"
                >
                  <PhoneIcon /> +251-9-133-985-61
                </Typography>
                <Typography
                  variant={isMobile ? null : "h6"}
                  sx={{ fontSize: isMobile ? "18px" : null, color: "#ffffff" }}
                  color="text.secondary"
                >
                  <LocationOnIcon />
                  ALX Ethiopia 22 Hub
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#eee2b1" }}
                color="primary"
              >
                FOLLOW US
              </Typography>
              <Link
                to="https://www.linkedin.com/company/disruptorsden/"
                color="inherit"
                target="_blank"
              >
                <LinkedInIcon
                  sx={{ height: "38px", width: "40px", color: "#ffffff" }}
                />
              </Link>
              <Link
                to="https://www.instagram.com/the_disruptors_den/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
                target="_blank"
              >
                <Instagram
                  sx={{ height: "38px", width: "40px", color: "#ffffff" }}
                />
              </Link>
              <Link
                to="https://t.me/disruptorsden"
                color="inherit"
                target="_blank"
                sx={{ pl: 1, pr: 1 }}
              >
                <TelegramIcon
                  sx={{ height: "38px", width: "40px", color: "#ffffff" }}
                />
              </Link>
              <Link
                to="https://www.youtube.com/@the_disruptors_den"
                color="inherit"
                target="_blank"
              >
                <YouTube
                  sx={{ height: "40px", width: "40px", color: "#ffffff" }}
                />
              </Link>
              <Typography
                variant={isMobile ? null : "h6"}
                sx={{ fontSize: isMobile ? "18px" : null, color: "#ffffff" }}
                color="text.secondary"
                width="100%"
              >
                Developed By{" "}
                <Link
                  to="https://www.linkedin.com/in/dawitsishu/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#eee2b1",
                  }}
                >
                  Dawit
                </Link>{" "}
                &{" "}
                <Link
                  to="https://www.linkedin.com/in/dagim-wallelgne/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#eee2b1",
                  }}
                >
                  Dagim
                </Link>
                {"."}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mt={5}>
          <Typography
            variant={isMobile ? null : "h6"}
            sx={{ fontSize: isMobile ? "18px" : null, color: "#ffffff" }}
            color="text.secondary"
            align="center"
          >
            Copyright ©
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#eee2b1",
              }}
            >
              The Disruptors Den
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
        <br />
      </Box>
    </Box>
  );
}
