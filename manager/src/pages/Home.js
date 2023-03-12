import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#0A2647", height: "1000px" }}>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        <Card sx={{ width: 350, backgroundColor: "#2C74B3" }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
            <Typography variant="h5" component="div">
              {bull}Products
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              543
            </Typography>
            {/* <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          </CardContent>
        </Card>
        <Card sx={{ width: 350, backgroundColor: "#2C74B3" }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
            <Typography variant="h5" component="div">
              {bull}Products
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              543
            </Typography>
            {/* <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          </CardContent>
        </Card>
        <Card sx={{ width: 350, backgroundColor: "#2C74B3" }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
            <Typography variant="h5" component="div">
              {bull}Products
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              543
            </Typography>
            {/* <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          </CardContent>
        </Card>
        <Card sx={{ width: 350, backgroundColor: "#2C74B3" }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
            <Typography variant="h5" component="div">
              {bull}Products
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              543
            </Typography>
            {/* <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
