import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../components/fakeShop.scss";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import Favorite from "@material-ui/icons/Favorite";
import BasicModal from "./BasicModal";

const Fakeshop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const url = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const openModal = (item) => {
    setSelectedProduct(item);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="card">
      {products.map((item) => (
        <Card
          sx={{ maxWidth: 345, padding: "10px" }}
          key={item.id}
          className="produtos"
        >
          <CardMedia
            component="img"
            alt={item.brand}
            height="auto"
            src={item.images[0]}
            sx={{ position: "relative", zIndex: 0 }}
            onClick={() => openModal(item)}
          />
          <Fab
            aria-label="like"
            size="small"
            className="fab-icon"
            sx={{
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
              {item.title}
            </Typography>
            <Typography component="legend">
              <Rating name="read-only" value={4} readOnly />
            </Typography>
            <Typography component="legend" variant="h6">
              Frete Grátis
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <BasicModal
              item={item}
              openModal={() => openModal(item)}
              closeModal={closeModal}
              selectedProduct={selectedProduct}
            />
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Fakeshop;
