import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/tddAddis.jpg";
import Adm from "../../assets/tddAdama.jpg";
import Adv from "../../assets/tddAdv.jpg";

const eventData = [
  {
    img: logo,
    title: "Coffee Meetup Addis-Ababa ☕",
    desc: "Dive into the world of business. This weekly event is the perfect spot to learn new insights and connect with fellow entrepreneurs in an amazing environment.",
    items: ["Saturday at 2:00 pm", "At the ALX Ethiopia 22 Hub"],
  },
  {
    img: Adm,
    title: "Coffee Meetup Adama ☕",
    desc: "Held bi-weekly, It's a splendid opportunity to meet like-minded entrepreneurs and explore the realms of business together.",
    items: [
      "Starting at 2:00 pm",
      "Adama Science and Technology University (ASTU) Lounge",
    ],
  },
  {
    img: Adv,
    title: "TDD Adventure 🌿",
    desc: "Step out of the business hustle and join us for a monthly retreat into nature. This unique event offers entrepreneurs a chance to rejuvenate, network, and gain fresh perspectives amidst serene surroundings.",
    items: [],
  },
];

const Events = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Typography variant="h3" textAlign="center">
        Regular{" "}
        <span style={{ color: "#F2B31D", fontWeight: "bold" }}>Events</span>
      </Typography>
      <Grid container spacing={isSmScreen ? 2 : 4} p={3}>
        {eventData.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item {...event} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const Item = (props) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="230"
        image={props.img}
        alt="Event Image"
        style={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
        {props.items.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Details:
            </Typography>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {props.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Events;
