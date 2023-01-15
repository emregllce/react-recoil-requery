import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
  } from "@mui/material";
  import ItemByRow from "./ItemByRow"

export default function ButtonAppBar({view, setView}) {
  return (
    <Box sx={{ flexGrow: 1, width:"95%", margin:"auto", marginBottom: "30px"  }}>
      <AppBar position="sticky" sx={{background:"white", display:"flex", alignItems:"center"}}>
        <Toolbar sx={{background:"white", width:"90%"}}>
       
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color:"black"}}>
            Products
          </Typography>
          
          <ItemByRow view={view} setView = {setView} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}