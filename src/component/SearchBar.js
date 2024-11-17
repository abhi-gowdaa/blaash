import InputBase from "@mui/material/InputBase";

import { Box } from "@mui/material";

export default function SearchComponent({children,placeholder,customStyles}) {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "200px",
        height: "37px",
        bgcolor: "transparent",
        border: "2px solid #484851",
        borderRadius: "12px",
        ...customStyles,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff" }}
        placeholder={placeholder}
      />
     {children}
    </Box>
  );
}
