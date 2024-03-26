import React from "react";
import Navbar from "../Navbar";
import { Grid, Typography, Box, Paper, Button } from "@mui/material";
import test from "../../assets/test.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "./style.css";

const ImageBox = ({ imageSrc }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper style={{ padding: 20, textAlign: "center" }}>
        <img
          src={imageSrc}
          alt="box"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
          }}
        />
      </Paper>
    </Grid>
  );
};

const Index = () => {
  return (
    <div>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        sx={{ height: "80vh" }}
        spacing={4}
      >
        <Grid item xs={12} sm={6}>
          <Grid
            container
            sx={{
              height: "100%",
              width: "100%",
              flexDirection: "column",
            }}
            p={7}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" fontWeight="bold">
                Home to entrepreneurs and aspiring ones
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Connect online and in-person, find opportunities, learn,
                collaborate and grow with a community of people just like you.
              </Typography>
              <br />
              <Link
                to="https://www.linkedin.com/company/disruptorsden/"
                target="_blank"
              >
                <Button variant="contained" sx={{ color: "white" }}>
                  Join Us <LinkedInIcon sx={{ ml: 1 }} />
                </Button>
              </Link>
              <Button sx={{ ml: 3, color: "black" }} variant="outlined">
                Events
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="main">
            <div className="box blue">
              <div className="image"></div>
            </div>
            <div className="box green">
              <div className="image"></div>
            </div>
            <div className="box red">
              <div className="image"></div>
            </div>
            <div className="box yellow">
              <div className="image"></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
