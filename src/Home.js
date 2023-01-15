import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HomeCard from "./HomeCard";
import Dropdown from "./Dropdown";
import { useQuery } from "react-query";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const fetchProducts = () => {
//   return axios.get(`https://fakestoreapi.com/products?limit=5`);
// };

export default function ResponsiveGrid({ view }) {
  const [item, setItem] = React.useState(6);

  //   const { isLoading, isError, error, data } = useQuery(
  //     "products", // unique querie key
  //     fetchProducts
  //   );
  const { isLoading, isError, data, refetch} = useQuery(
    "products",
    () => {
      return axios.get(`https://fakestoreapi.com/products?limit=${item}`);
    },
    {
      refetchInterval: 2000,
    }
    
    );
    
    const handleChange = (event) => {
      setItem(event.target.value);
      // refetch()
    };
  if (isLoading) {
    return <h4 style={{ textAlign: "center" }}>Loading...</h4>;
  }

  if (isError) {
    return (
      <h3 style={{ textAlign: "center" }}>
        Something went wrong please try again later...
      </h3>
    );
  }
  return (
    <Box>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          columnSpacing={{ md: -30 }}
        >
          {data?.data.map((product) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={view == "module" ? 4 : 3}
              key={product.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <HomeCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "100px",
        }}
      >
        <Dropdown handleChange={handleChange}  item={item} />
      </Box>
    </Box>
  );
}
