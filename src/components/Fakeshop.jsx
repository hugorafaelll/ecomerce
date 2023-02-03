import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../components/fakeShop.scss";

const Fakeshop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card">
      {products.map((product) => (
        <Card sx={{ maxWidth: 345 }} className="produtos">
          <CardMedia
            component="img"
            alt={product.description}
            height="auto"
            src={product.images[0]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Price: {product.price}</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Fakeshop;
