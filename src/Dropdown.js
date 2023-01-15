import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography, Box } from "@mui/material";

export default function SelectSmall({item, handleChange}) {

  

  return (
    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
      <Box sx={{display:"flex", alignItems:"center"}}>
        <Typography sx={{marginRight:"10px"}}>Items per page</Typography>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={item}
          onChange={handleChange}
        >
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={20}>All</MenuItem>
        </Select>
      </Box>
    </FormControl>
  );
}
