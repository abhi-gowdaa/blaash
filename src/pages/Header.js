import { Button, Card, Typography, Box } from "@mui/material";
import "../globalStyles/styles.css";
import SearchComponent from "../component/SearchBar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect,useState } from "react";
import Profile from "../component/Profile";

const Header = () => {
  const [user,setUser]=useState([])
  useEffect(()=>{
    const userData=JSON.parse(localStorage.getItem("user")) 
    setUser(userData)
    console.log(userData['picture']);
  },[])
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

        <SearchComponent placeholder={"Search Project..."}>
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
        </SearchComponent>

        <img className="notifi" src="./btnIcons/notifi.png" alt="notifi" />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img className="profilePhoto" src={user['picture']} alt="profile" />
          <Typography>
            {(user['name'])?.slice(0,8)}...
          </Typography>
         {user && <Profile/>}
        </Box>
      </Box>
    </Card>
  );
};

export default Header;
