import { Box } from "@mui/material";
import LeftDrawer from "./LeftDrawer";
import Header from "./Header";
import PlayList from "./PlayList";

const DesignStudio = () => {
  return (
    <Box sx={{display: "flex",gap: 1,m: "auto",color: "#fff",}}>
      
      <LeftDrawer />

      <div style={{ width: "100%", rowGap: 1}} >
        <Header />
        <PlayList />
      </div>
    </Box>
  );
};

export default DesignStudio;
