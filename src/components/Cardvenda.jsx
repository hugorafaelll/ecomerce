import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardVenda(props) {
  return (
    <Card sx={{ maxWidth: 345 }} key={props.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.category}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
