import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import Favorite from "@material-ui/icons/Favorite";

const ShopCard = ({ product, handleOpenModal }) => {
  return (
    <Card sx={{ maxWidth: 345, padding: "10px" }} className="produtos">
      <CardMedia
        component="img"
        alt={product.brand}
        height="auto"
        src={product.images[0]}
        style={{ position: "relative", zIndex: 0 }}
      />
      <Fab
        aria-label="like"
        size="small"
        className="fab-icon"
        style={{
          position: "relative",
          zIndex: 1,
          bottom: "248px",
          left: "295px",
          opacity: "0.3",
        }}
      >
        <Favorite />
      </Fab>
      <hr />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography component="legend">
          <Rating name="read-only" value={4} readOnly />
        </Typography>
        <Typography component="legend" variant="h6">
          Frete Grátis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          align="right"
          onClick={() => handleOpenModal(product)}
        >
          R$ {product.price}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
