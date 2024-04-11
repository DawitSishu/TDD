import React, { useState, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { Link } from "react-scroll";
import { Link as Linker, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

function CustomAppBar({ isWhite, reload }) {
  const isSmallScreen = useMediaQuery("(max-width:860px)");
  const ismobile = useMediaQuery("(max-width:860px)");
  const [sidebar, setSidebar] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <AppBar
        position="fixed"
        className={navColour ? "sticky" : "navbar"}
        sx={{ backgroundColor: "white" }}
        elevation={0}
      >
        <Toolbar>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <IconButton size="large" edge="start">
              <img
                src={logo}
                style={{ maxWidth: "120px", maxHeight: "80px" }}
              />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "black",
              display: ismobile ? "none" : "block",
              marginRight: "auto",
            }}
          ></Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: isSmallScreen ? "none" : "flex",
              textAlign: "center",
            }}
          >
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                sx={{
                  ml: 10,
                  color: "black",
                  transition: "all 0.1s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderBottom: "5px solid #7C7C7C",
                    elevation: "0",
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                sx={{
                  color: "black",
                  transition: "all 0.1s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderBottom: "5px solid #7C7C7C",
                    elevation: "0",
                  },
                }}
              >
                About Us
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                sx={{
                  color: "black",
                  transition: "all 0.1s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderBottom: "5px solid #7C7C7C",
                    elevation: "0",
                  },
                }}
              >
                Events
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                sx={{
                  color: "black",
                  transition: "all 0.1s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderBottom: "5px solid #7C7C7C",
                    elevation: "0",
                  },
                }}
              >
                Team
              </Button>
            </Link>
            {/* <Link
              to="/media"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                sx={{
                  color: "black",
                  transition: "all 0.1s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderBottom: "5px solid #7C7C7C",
                    elevation: "0",
                  },
                }}
              >
                Media
              </Button>
            </Link> */}
          </Stack>
          <IconButton
            edge="end"
            sx={{
              marginLeft: "auto",
              display: !isSmallScreen ? "block" : "none",
              color: "white",
              backgroundColor: "#F2B31D",
              borderRadius: "28px",
              transition: "all 0.1s",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#7C7C7C",
                elevation: "0",
              },
            }}
          >
            <Linker
              to="https://www.linkedin.com/company/disruptorsden/"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              <Button
                sx={{
                  color: "white",
                }}
              >
                Join Community
              </Button>
            </Linker>
          </IconButton>
          <IconButton
            size="large"
            edge={isSmallScreen ? "end" : false}
            sx={{
              display: isSmallScreen ? "block" : "none",
              marginLeft: isSmallScreen ? "auto" : 0,
              color: "black",
            }}
            onClick={showSidebar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav style={{ width: "100vw" }}>
        <Drawer
          variant="temporary"
          anchor="right"
          sx={{
            width: "250px",
            "& .MuiDrawer-paper": {
              width: "250px",
            },
          }}
          open={sidebar}
          onClose={showSidebar}
        >
          <List>
            <ListItem>
              <IconButton onClick={showSidebar}>
                <AiIcons.AiOutlineClose color="#000" />
              </IconButton>
            </ListItem>
            <Divider />
            {SidebarData.map((item, index) => {
              if (item.title === "Add Listing") {
                return (
                  <ListItem
                    key={index}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <IconButton
                      edge="end"
                      sx={{
                        marginLeft: "auto",
                        display: !isSmallScreen ? "block" : "none",
                        color: "white",
                        backgroundColor: "#F2B31D",
                        borderRadius: "28px",
                        transition: "all 0.1s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          backgroundColor: "#7C7C7C",
                          elevation: "0",
                        },
                      }}
                    >
                      <Linker
                        to="https://www.linkedin.com/company/disruptorsden/"
                        style={{ textDecoration: "none", color: "inherit" }}
                        target="_blank"
                      >
                        <Button
                          sx={{
                            color: "white",
                          }}
                        >
                          Join Community
                        </Button>
                      </Linker>
                    </IconButton>
                  </ListItem>
                );
              } else {
                return (
                  <Link
                    to={item.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ textDecoration: "none", color: "inherit" }}
                    key={index}
                  >
                    <ListItem
                      key={index}
                      onClick={showSidebar}
                      sx={{ "&:hover": { backgroundColor: "#7C7C7C" } }}
                    >
                      <ListItemButton alignItems="center">
                        {/* {item.icon} */}
                        <ListItemText
                          primary={item.title}
                          sx={{
                            textAlign: "center",
                            fontSize: "26px !important",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                );
              }
            })}
          </List>
        </Drawer>
      </nav>
    </div>
  );
}

export default CustomAppBar;
