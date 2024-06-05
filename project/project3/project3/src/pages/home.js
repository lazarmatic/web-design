import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";

const MyForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSuccess(true);
      // Handle form submission here
    } else {
      setErrors(formErrors);
    }
  };

  const handleReset = () => {
    setFormData({ username: "", password: "" });
    setErrors({});
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setSuccess(false);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh", backgroundColor: "#f5f5f5" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card sx={{ maxWidth: "100%", p: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Login Form
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Please enter your login details below.
              </Typography>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                  display: "flex",
                  flexDirection: "column",
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  error={!!errors.username}
                  helperText={errors.username}
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ m: 1 }}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ m: 1 }}
                    onClick={handleReset}
                  >
                    Cancel
                  </Button>
                </CardActions>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Form has been reset
        </Alert>
      </Snackbar>
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MyForm;
