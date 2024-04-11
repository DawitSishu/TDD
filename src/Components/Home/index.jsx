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
  IconButton,
} from "@mui/material";
import test from "../../assets/test.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "./style.css";
import { data } from "./detailsData";
import Disruptors from "./Disruptors";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "../Footer";
import footerBackgroundImage from "../../assets/tdd.png";
import Carousel from "./Carousel";
import About from "./About";
import Events from "./Events";

const Index = () => {
  const ismobile = useMediaQuery("(max-width:860px)");

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Carousel />
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
            <Grid key={idx} item xs={12} sm={6} style={{ width: "100%" }}>
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
      <br />
      <About />
      <br />
      <br />
      <Events />
      <br />
      <Grid container justifyContent="center">
        <Grid item xs={12} mb={ismobile ? 0 : 2}>
          <Typography textAlign="center" variant="h3">
            Gallery
          </Typography>
        </Grid>
        <Grid item sx={{ width: ismobile ? "100%" : "72%" }}>
          <Gallery />
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center">
            Meet{" "}
            <span style={{ color: "#F2B31D", fontWeight: "bold" }}>
              The Team
            </span>
          </Typography>
          <Divider
            sx={{
              marginTop: 2,
              width: "10%",
              height: "2px",
              margin: "20px auto",
              backgroundColor: "#F2B31D",
            }}
          />
          <Box sx={{ pl: ismobile ? 2 : 40, pr: ismobile ? 2 : 40 }}>
            <Typography textAlign="center">
              Meet the Team: Behind The Disruptors Den stands a dynamic team of
              founders and organizers. United by a vision to revolutionize the
              entrepreneurial journey, they blend diverse expertise and a shared
              passion for innovation to foster a community where ideas flourish,
              partnerships form, and future leaders emerge!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center">
        <div style={{ width: ismobile ? "100%" : "72%" }}>
          <Disruptors />
        </div>
      </Grid>
      <br />
      <Grid>
        <Contact />
      </Grid>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Index;
