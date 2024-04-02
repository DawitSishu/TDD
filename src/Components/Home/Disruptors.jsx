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
import { disruptors } from "./disruptors";

const Item = ({ name, loc, img }) => {
  return (
    <Card sx={{ maxWidth: 340, height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" textAlign="center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {loc}
          </Typography>
        </CardContent>
      </CardActionArea>
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
          <Item name={dis.name} loc={dis.loc} img={dis.img} />
        </div>
      ))}
    </Carousel>
  );
};

export default Disruptors;
