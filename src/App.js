import React, { useEffect, useState } from 'react';
import SignIn from './component/SignIn';
import DesignStudio from './pages/DesignStudio';


function App() {

  const [isAuth,setIsAuth]=useState()

  useEffect(()=>{
    const token=localStorage.getItem("token");
    setIsAuth(token)
  },[])
  const handleAuth=(token)=>{
    // setIsAuth(token)
    console.log("hi");
  }

  return (
    <div>
     { isAuth ?
      <DesignStudio/>:
      <SignIn handleAuth={handleAuth}/> 
    }
    
     </div>
  );
}

export default App;
