import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FullWidthTextField(props) {
  return (
    <Box
      sx={{
        width: 1000,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Search your favourite movie"
        id="fullWidth"
        onChange={props.onChange}
      />
    </Box>
  );
}
