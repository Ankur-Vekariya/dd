import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";

const ProductList = () => {
  return (
    <Box>
      <Navbar />
      <Typography variant="h5" component="div">
        All Products
      </Typography>
    </Box>
  );
};

export default ProductList;
