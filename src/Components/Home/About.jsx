import React from "react";
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
import image from "../../assets/tdd1.jpg";

const About = () => {
  return (
    <>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} p={3}>
            <Box
              sx={{
                backgroundImage: `url(${image})`,
                // paddingTop: "50px",
                backgroundSize: "cover",
                backgroundPosition: "95% 35%",
                height: "100%",
                width: "100%",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              item
              justifyContent="center"
              zIndex={1}
              sx={{ textAlign: "center" }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold" }}
                color="#F2B31D"
              >
                About US
              </Typography>
            </Grid>
            <Grid container spacing={2} p={4}>
              <Typography variant="body1">
                At The Disruptors Den, we're not just building a community;
                we're forging a revolution. Born from the spirit of innovation
                and a steadfast belief in the transformative power of
                entrepreneurship, The Disruptors Den serves as a beacon for
                those who dare to dream differently. Here, every voice matters,
                every idea has the potential to spark change, and every
                individual is on a journey to make their mark on the world.
              </Typography>

              <Typography variant="body1" mt={1}>
                In the heart of The Disruptors Den, collaboration is the
                currency and growth is the goal. We are committed to providing a
                nurturing environment where ideas are not just welcomed but
                celebrated, where every member is encouraged to share, learn,
                and evolve. Our ethos is built around the power of
                connection—not just networking, but forming meaningful bonds
                that foster support, inspiration, and collective advancement.
              </Typography>

              <Typography variant="body1" mt={1}>
                Here, we embrace the unconventional, champion the bold, and
                understand that the path to success is rarely linear. The
                Disruptors Den is more than a community; it’s a movement towards
                empowering the next generation of entrepreneurs to create
                impact, drive change, and achieve their dreams.
              </Typography>

              <Typography variant="body1" mt={1}>
                Join us at The Disruptors Den, where your journey of disruption
                and innovation begins. Together, let’s build a future where
                every entrepreneur has the tools, knowledge, and community to
                flourish.
              </Typography>
              <Typography variant="body1" mt={1}>
                <span style={{ fontWeight: "bold", color: "#F2B31D" }}>
                  Mission{" "}
                </span>{" "}
                Foster a collaborative and inclusive community that transcends
                traditional boundaries and celebrates diversity. By providing a
                supportive environment, we aim to empower individuals/groups to
                reach their full potential and achieve greatness together.
                Through our collective efforts, we strive to create positive
                change and make a lasting impact on society.
              </Typography>
              <Typography variant="body1" mt={1}>
                <span style={{ fontWeight: "bold", color: "#F2B31D" }}>
                  Vision{" "}
                </span>{" "}
                Create an Africa where every entrepreneur has the opportunity to
                thrive and succeed.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
