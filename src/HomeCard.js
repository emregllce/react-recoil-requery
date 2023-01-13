import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const handleAddToCart = () => {
    console.log("I am woking");
}


export default function HomeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div style={{display:"flex"}}>
        <CardMedia
          sx={{ height: 140 }}
          image="./venuexTask.png"
          title="green iguana"
        />
        <CardActions>
          <AddShoppingCartIcon onClick={()=>handleAddToCart()} style={{cursor:"pointer"}}/>
        </CardActions>
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
