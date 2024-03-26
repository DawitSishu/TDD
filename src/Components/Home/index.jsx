import React from "react";
import Navbar from "../Navbar";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
  useMediaQuery,
  Icon,
} from "@mui/material";
import test from "../../assets/test.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "./style.css";
import { data } from "./detailsData";

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
  const ismobile = useMediaQuery("(max-width:860px)");
  return (
    <div>
      <Navbar />
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            sx={{
              width: "100%",
              flexDirection: "column",
              height: "100vh",
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
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: "100vh",
            width: "100%",
            display: ismobile ? "none" : "block",
          }}
        >
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
      <br />
      <Grid container justifyContent="center">
        <Grid xs={12}>
          <Typography variant="h3" textAlign="center">
            What happens at{" "}
            <span style={{ color: "#F2B31D", fontWeight: "bold" }}>
              The Disruptors Den
            </span>
          </Typography>
          <Divider
            sx={{
              marginTop: 2,
              width: "30%",
              height: "2px",
              margin: "20px auto",
              backgroundColor: "#F2B31D",
            }}
          />
        </Grid>
        <Grid container justifyContent="center" spacing={2} p={5}>
          {data.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={4} style={{ width: "100%" }}>
              <Paper
                elevation={3}
                sx={{
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "15px",
                }}
              >
                <item.icon sx={{ fontSize: 60, color: "#F2B31D" }} />
                <br />
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <br />
                <Typography variant="body1">{item.detail}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
