import React from "react";
import Navbar from "../Navbar";
import { Grid, Typography, Box } from "@mui/material";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Grid container justifyContent="center" sx={{ height: "80vh" }}>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            sx={{
              height: "100%",
              width: "100%",
              flexDirection: "column",
              // p: ,
            }}
            p={7}
            justifyContent="center"
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </div>
  );
};

export default Index;
