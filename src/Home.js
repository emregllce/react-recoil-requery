import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HomeCard from "./HomeCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{md:-30}}
      >
        {Array.from(Array(8)).map((_, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center"}}
          >
            <HomeCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
