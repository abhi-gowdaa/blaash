import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Card } from "@mui/material";

export default function SearchComponent() {
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
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff" }}
        placeholder="Search Project..."
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Card
          sx={{
            height: "26px",
            width: "26px",
            borderRadius: "10px",
            bgcolor: "transparent",
            border: "2px solid #484851",
          }}
        >
          <SearchIcon sx={{ color: "#fff" }} />
        </Card>
      </IconButton>
    </Box>
  );
}
