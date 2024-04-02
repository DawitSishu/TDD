import { useState } from "react";
import { Grid, IconButton, useMediaQuery } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import tst from "../../assets/test.jpg";
import tdd from "../../assets/tdd.png";

const imgUrls = [tst, tdd, tst, tdd, tst, tdd];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:860px)");

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <Grid
        container
        sx={{ mt: isMobile ? 0 : 2, position: "relative", p: isMobile ? 2 : 0 }}
      >
        <Grid
          item
          className="img-grid"
          sx={{
            width: "100%",
            minHeight: "400px",
            aspectRatio: "16/9",
            objectFit: "fill",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "transparent",
          }}
        >
          <img
            src={imgUrls[currentImageIndex === -1 ? 0 : currentImageIndex]}
            alt="Main"
            loading="lazy"
            style={{
              height: isMobile ? "auto" : "100%",
              width: isMobile ? "100%" : "auto",
              maxHeight: "100%",
              maxWidth: "100%",
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: isMobile ? 0 : 2 }}>
        {imgUrls.map((thumbnail, index) => (
          <Grid item key={index} ml={isMobile ? 1 : 2}>
            <img
              src={thumbnail}
              alt={`Thumbnail ${index}`}
              loading="lazy"
              onClick={() => handleThumbnailClick(index)}
              style={{
                width: isMobile ? "80px" : "100px",
                height: isMobile ? "80px" : "100px",
                cursor: "pointer",
                border:
                  currentImageIndex === index ? "2px solid #F2B31D" : "none",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;
