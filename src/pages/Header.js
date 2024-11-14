import { Button, Card, Typography, Box } from "@mui/material";
import "../globalStyles/styles.css";
import SearchComponent from "../component/SearchBar";
import ExpandMore from '@mui/icons-material/ExpandMore';

const Header = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#27272f",
        color: "#fff",
        borderRadius: "15px",
        height: "60px",
        m: 2,
        ml: 1,
        p: 1,
        mt: 2.2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
    
      <Typography sx={{ fontWeight: "800", ml: 2 }}>
        Design Studio
      </Typography>

       
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          sx={{
            textTransform: "none",
            height: "40px",
            borderRadius: "12px",
            border: "2px solid #0273e4",
            display: "flex",
            alignItems: "center",
          }}
          variant="outlined"
        >
          <img className="btnImg" src="./btnIcons/btn1.png" alt="btn" />
          <Typography variant="h9" sx={{ color: "#fff", ml: 1 }}>
            Support Request
          </Typography>
        </Button>

        <Button
          sx={{
            textTransform: "none",
            height: "40px",
            borderRadius: "12px",
            border: "2px solid #0273e4",
            display: "flex",
            alignItems: "center",
          }}
          variant="outlined"
        >
          <img className="btnImg" src="./btnIcons/btn2.png" alt="btn" />
          <Typography variant="h9" sx={{ color: "#fff", ml: 1 }}>
            Product Tour
          </Typography>
        </Button>

        <SearchComponent />

        <img className="notifi" src="./btnIcons/notifi.png" alt="notifi" />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img className="notifi" src="./btnIcons/notifi.png" alt="notifi" />
          <Typography>
            abhishek...
          </Typography>
          <ExpandMore />
        </Box>
      </Box>
    </Card>
  );
};

export default Header;
