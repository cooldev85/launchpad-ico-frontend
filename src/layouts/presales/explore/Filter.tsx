import React from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CssBaseline from "@mui/material/CssBaseline";

const networks = [
  {
    id: 1,
    label: "ETH",
  },
  {
    id: 2,
    label: "BSC",
  },
  {
    id: 3,
    label: "Ethos",
  },
  {
    id: 4,
    label: "Polygon",
  },
];

const filter_by = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Status",
  },
];

const sort_by = [
  {
    id: 1,
    label: "Gold Tier",
  },
  {
    id: 2,
    label: "Gold",
  },
];

const Filter = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
        <CssBaseline />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={networks}
          sx={{ width: 150, color: "#FFFFFF" }}
          renderInput={(params) => (
            <TextField {...params} label="Networks" sx={{ color: "#FFFFFF" }} />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={filter_by}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Filter By" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sort_by}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Sort By" />}
        />
    </Box>
  );
};

export default Filter;
