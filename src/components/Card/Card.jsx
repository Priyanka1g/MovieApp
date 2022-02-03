import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        src={`https://image.tmdb.org/t/p/w200${props.posterPath}`}
        alt={`${props.name} Poster`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Favourite</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
