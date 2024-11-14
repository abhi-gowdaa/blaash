import React from 'react'
import { Box} from '@mui/material'
import "../globalStyles/styles.css"
 
import LeftDrawerList from '../component/LeftDrawerList';
 
const LeftDrawer = () => {
  return (
    <Box
        sx={{
          backgroundColor: "#27272f",
          width: "320px",
          height: "650px",
          m: 1.6,
          color: "#000",
          borderRadius:"15px",
          mt:2.2,
          flex:"display",
          flexDirection:"column",
          p:1,
          justifyContent: "center",
           overflow:"hidden"
        }}
      >
      <div  >

       <img src="./logo.png" alt="logo" className="logo" />
        <LeftDrawerList/>
      </div>

      </Box>
  )
}

export default LeftDrawer;