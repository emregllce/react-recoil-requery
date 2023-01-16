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
import { useRecoilState } from "recoil";
import { addToCart} from "./state"

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export default function HomeCard({ product }) {

  const [addItem, setAddItem] = useRecoilState(addToCart)


  return (
    <Card sx={{ width: 280, maxWidth: 280 }}>
      <Box sx={{ position:"relative" }}>
        <CardMedia
          sx={{ height: 140, width: 280 }}
          image={product.image}
          title={product.title}
        />
        <CardActions>
          <AddShoppingCartIcon
            onClick={()=>setAddItem(addItem+1)}
            sx={{ cursor: "pointer", position:"absolute", right:"0", top:"0" }}
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
