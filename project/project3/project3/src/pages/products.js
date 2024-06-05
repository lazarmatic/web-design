import React from "react";
import { Grid, Typography, Button } from "@mui/material";

function YourComponent() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "50vh" }}
    >
      <Grid item xs={10} md={8} lg={6}>
        <Typography variant="h2" color="primary" align="center">
          Custom Themed Heading
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center">
          This is a body text with the custom theme applied.
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" fullWidth>
              Primary Button
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" color="secondary" fullWidth>
              Secondary Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default YourComponent;
