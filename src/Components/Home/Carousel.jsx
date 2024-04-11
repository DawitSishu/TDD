import React from "react";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/tdd2.jpg";
import img2 from "../../assets/tdd1.jpg";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Paper, Button, Typography,Box,Grid } from "@mui/material";

export default function Example() {
  var items = [img1, img2, img1, img2, img1, img2];

  return (
    <Carousel
      autoPlay={true}
      duration={300}
      navButtonsAlwaysVisible={false}
      indicators={false}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Box
    key={props.key}
    sx={{
      backgroundImage: `url(${props.item})`,
      // paddingTop: "50px",
      backgroundSize: "cover",
      backgroundPosition: "95% 35%",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#000000",
        opacity: "70%",
        // p: ismobile ? "15px" : null,
      }}
    >
      <Grid
        container
        // justifyContent="center"
        spacing={4}
        sx={{ color: "white" }}
      >
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
                collaborate and grow with a community of people just like
                you.
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
              <Button sx={{ ml: 3 }} variant="outlined">
                Events
              </Button>
            </Grid>
          </Grid>
        </Grid>
       
      </Grid>
    </Box>
  </Box>
  );
}
