import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

// Import your image
import nikeImage from "./images/nike.png";
import appleImage from "./images/apple.png";
import kfcImage from "./images/kfc.png";

const projects = [
  {
    title: "Nike running shoes",
    description: "Best shoes money can buy!",
    image: nikeImage,
  },
  {
    title: "2024 Apple Macbook",
    description: "New powerful M3 chip!",
    image: appleImage,
  },
  {
    title: "Kentucky Fried Chicken",
    description: "Finger lickin' good!",
    image: kfcImage,
  },
];

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        mt: 2,
      }}
    >
      {projects.map((project, index) => (
        <Card key={index} sx={{ maxWidth: 345, m: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={project.image}
            alt={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleClickOpen(project)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
      >
        <DialogTitle id="project-dialog-title">
          {selectedProject?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="project-dialog-description">
            {selectedProject?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Portfolio;
