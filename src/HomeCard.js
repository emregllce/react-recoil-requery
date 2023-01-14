import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  AppBar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography
} from "@mui/material";

const handleAddToCart = () => {
    console.log("I am woking");
}

const StyledBox = styled(Box)({
  display:"flex",
  justifyContent:"space-between"

})

export default function HomeCard() {
  return (
    <Card sx={{ width:280 }}>
      <Box sx={{display:"flex"}}>
        <CardMedia
          sx={{ height: 120, width:200 }}
          image="./pic/venuexTask.png"
          title="green iguana"
        />
        <CardActions>
          <AddShoppingCartIcon onClick={()=>handleAddToCart()} style={{cursor:"pointer"}}/>
        </CardActions>
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <StyledBox>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
        </StyledBox>
      </CardContent>
    </Card>
  );
}
