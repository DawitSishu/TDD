import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Carousel } from "@trendyol-js/react-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/logo.jpg";
import { disruptors } from "./disruptorsData";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Item = ({ name, loc, img, link }) => {
  return (
    <Card sx={{ maxWidth: 340, height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" textAlign="center">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {loc}
        </Typography>

        <Typography textAlign="center">
          <Link to={link} target="_blank">
            <Button variant="contained" sx={{ color: "white" }}>
              Contact <LinkedInIcon sx={{ ml: 1 }} />
            </Button>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

const Disruptors = () => {
  const isMobile = useMediaQuery("(max-width:860px)");

  return (
    <Carousel
      show={isMobile ? 1 : 3}
      slide={isMobile ? 1 : 3}
      swiping={true}
      rightArrow={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "2px",
          }}
        >
          <IconButton sx={{ color: "#F2B31D", backgroundColor: "#7C7C7C" }}>
            <ArrowRight />
          </IconButton>
        </div>
      }
      leftArrow={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <IconButton sx={{ color: "#F2B31D", backgroundColor: "#7C7C7C" }}>
            <ArrowLeft />
          </IconButton>
        </div>
      }
    >
      {disruptors.map((dis, idx) => (
        <div key={idx} style={{ marginRight: "7px", height: "100%" }}>
          <Item name={dis.name} loc={dis.loc} img={dis.img} link={dis.link} />
        </div>
      ))}
    </Carousel>
  );
};

export default Disruptors;
