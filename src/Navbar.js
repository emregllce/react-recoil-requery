import * as React from "react";
import { alpha } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRecoilValue } from "recoil";
import { addToCart } from "./state";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, yellow } from "@mui/material/colors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    border: "solid 1px black",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "12ch",
      },
    },
  },
}));
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
});
export default function SearchAppBar() {
  const addItem = useRecoilValue(addToCart);
  // console.log(addItem);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{}}>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            eCommerce
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginBottom: "10px",
            }}
          >
            <Toolbar>
              <ThemeProvider theme={theme}>
                <Badge
                  badgeContent={addItem}
                  color="secondary"
                  sx={{ marginTop: "20px", color: "black" }}
                >
                  <ShoppingCartOutlinedIcon
                    sx={{ color: "black", marginBottom: "20px" }}
                  />
                </Badge>
              </ThemeProvider>
              <Typography
                bgcolor="white"
                sx={{ color: "black", marginLeft: "10px" }}
              >
                Shopping Cart
              </Typography>
            </Toolbar>
            <Search sx={{ marginRight: "0" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
