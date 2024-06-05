import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const MyForm = () => {
  const handleButtonClick = () => {
    // Add functionality here
    alert("Welcome!");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh", backgroundColor: "#f5f5f5" }}
      >
        <Grid item xs={10} sm={8} md={6} lg={5} xl={4}>
          <Card
            sx={{
              maxWidth: "100%",
              padding: 2,
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Welcome to Matic Agency!
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                We are excited to have you here. Explore the features and enjoy
                your stay. If you have any questions or need assistance, feel
                free to reach out.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: "#007bff",
                  color: "#ffffff",
                  "&:hover": { backgroundColor: "#0056b3" },
                }}
                onClick={handleButtonClick}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyForm;
