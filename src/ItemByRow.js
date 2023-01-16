import * as React from "react";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Toolbar, Typography, styled } from "@mui/material";

export default function VerticalToggleButtons({view, setView}) {


  const handleChange = () => {
    view == "module" 
    ?
    setView("list")
    :
    setView("module")
   
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <StyledToolbar>
      {view == "module" ? (
        <Typography variant="h6" component="div" sx={{ color: "black", marginRight:"10px" }}>
          3 Items by row
        </Typography>
       ) : ( 
        <Typography variant="h6" component="div" sx={{ color: "black", marginRight:"10px"  }}>
          4 Items by row
        </Typography>
       )} 
      <ToggleButtonGroup
        orientation="horizantal"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton
          value="module"
          aria-label="module"
          sx={{ marginRight: "10px" }}
        >
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list">
          <ViewCompactIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </StyledToolbar>
  );
}
