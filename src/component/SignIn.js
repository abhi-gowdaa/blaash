import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';

const SignIn=({handleAuth})=>{

  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const fetchUserInfo=(token)=>{
    
    fetch(`https://www.googleapis.com/oauth2/v2/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {console.log(data);setUser(data);handleAuth(data) })
      .catch(error => console.error('Error:', error));
  };
  
  

  const handleclick = () => {
    if (!token) {
      console.log("Token is not available. Please log in first.");
      return;
    }

    fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=25`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  
 
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      setToken(tokenResponse.access_token);
      fetchUserInfo(tokenResponse.access_token)
    },
    scope: "https://www.googleapis.com/auth/youtube.readonly" 
  });

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <button onClick={() => login()}>Sign in with Google 🚀</button>
      <br />
      <button onClick={() => handleclick()}>Fetch YouTube Playlists 🚀</button>
    </div>
  );
    
}

export default SignIn;