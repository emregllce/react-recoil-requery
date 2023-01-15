import * as React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "./Rating";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

const handleAddToCart = () => {
  console.log("I am woking");
};

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export default function HomeCard({ product }) {
  return (
    <Card sx={{ width: 280 }}>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          sx={{ height: 140, width: 280 }}
          image={product.image}
          title={product.title}
        />
        <CardActions>
          <AddShoppingCartIcon
            onClick={() => handleAddToCart()}
            style={{ cursor: "pointer" }}
          />
        </CardActions>
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <StyledBox>
          <Typography variant="body2" color="text.secondary">
            <Rating rating={product.rating.rate} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </StyledBox>
      </CardContent>
    </Card>
  );
}
