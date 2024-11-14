import React from 'react';
import ProductMain from '../component/ProductMain';
import ManageProduct from '../component/ManageProduct';
import { Button } from '@mui/material';

const PlayList = () => {

    const importPlaylist = ()=>{
        
    }
  return (
    <>
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <h3>Product Playlists</h3>
          <Button onClick={importPlaylist} sx={{ textTransform: "none", height: "40px", borderRadius: "10px" }} variant="contained">
            Import From Youtube
          </Button>
        </div>
    <div style={{ display: "flex", width: "100%" }}>
       <ProductMain/>
       <ManageProduct/>
        </div>
    </>
   
  )
}

export default PlayList