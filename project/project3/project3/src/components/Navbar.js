import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  return (
    <AppBar position="static" style={{ marginBottom: "20px" }}>
      {" "}
      {/* Extend height */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Matic Agency
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: isSmallScreen ? "16px" : "0",
          }}
        >
          <Grid
            container
            spacing={2}
            direction={isSmallScreen ? "column" : "row"}
          >
            <Grid item>
              <Button
                color={
                  location.pathname === "/products" ? "primary" : "inherit"
                } // Set active indicator
                component={Link}
                to="/products"
              >
                Products
              </Button>
            </Grid>
            <Grid item>
              <Button
                color={location.pathname === "/about" ? "primary" : "inherit"} // Set active indicator
                component={Link}
                to="/about"
              >
                About
              </Button>
            </Grid>
            <Grid item>
              <Button
                color={location.pathname === "/home" ? "primary" : "inherit"} // Set active indicator
                component={Link}
                to="/home"
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button
                color={location.pathname === "/posts" ? "primary" : "inherit"} // Set active indicator
                component={Link}
                to="/posts"
              >
                Posts
              </Button>
            </Grid>
            <Grid item>
              <Button
                color={
                  location.pathname === "/portfolio" ? "primary" : "inherit"
                } // Set active indicator
                component={Link}
                to="/portfolio"
              >
                Portfolio
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
