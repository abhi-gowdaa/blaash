import React, { useState } from 'react';
import SignIn from './component/SignIn';
import DesignStudio from './pages/DesignStudio';


function App() {

  // const [isAuth,setIsAuth]=useState()

  // const handleAuth=(token)=>{
  //   setIsAuth(token)
  //   console.log("token is",token);
  // }

  return (
    <div>
     {/* { isAuth ?
      <h1> login sucessFull</h1>:
      <SignIn handleAuth={handleAuth}/>  
     
    } */}
    <DesignStudio/>
     </div>
  );
}

export default App;
