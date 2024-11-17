import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { Box,Typography,Button } from '@mui/material';


const SignIn=( )=>{

  const [token, setToken] = useState();
  const [user, setUser] = useState();
  

  const fetchUserInfo=(token)=>{
    console.log("user fetch");
    fetch(`https://www.googleapis.com/oauth2/v2/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {console.log(data);setUser(data);localStorage.setItem("user",JSON.stringify(data));window.location.reload(); })
      .catch(error => console.error('Error:', error));

  };
  
  

  // const handleclick = () => {
  //   if (!token) {
  //     console.log("Token is not available. Please log in first.");
  //     return;
  //   }

  //   fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=25`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Error:', error));
  // };

  
 
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      setToken(tokenResponse.access_token);
      localStorage.setItem("token",tokenResponse.access_token);
      fetchUserInfo(tokenResponse.access_token)
    },
    scope: "https://www.googleapis.com/auth/youtube.readonly" 
  });

  return (
<Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          textAlign: "center",
          letterSpacing: "0.5px",
        }}
      >
        Welcome to React Google Login
      </Typography>
      <Button
        onClick={login}
        variant="contained"
        sx={{
          backgroundColor: "#1a73e8",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#1769aa",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        Sign in with Google 🚀
      </Button>
    </Box>
  );
    
}

export default SignIn;