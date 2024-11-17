import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import SearchComponent from "./SearchBar";
import RadioButton from "./RadioButton";
import ProductList from "./ProductList";
import CachedIcon from '@mui/icons-material/Cached';
import "../globalStyles/styles.css"
 

const ManageProduct = ({playListVideos}) => {
const videos=playListVideos?.items
const noOfVideos=playListVideos?.pageInfo?.totalResults
  return (
    <Box
      sx={{
        backgroundColor: "#27272f",
        color: "#fff",
        width: "460px",
        height: "525px",
        m: 2,
        pl: 1,
        mt:2,
        pr: 1,
        ml: 0,
        borderRadius: "15px",
        display:"flex",
        flexDirection:"column",
        justifyItems:"center"
      }}
    >
      

      <Typography variant="h7" sx={{ m:2,ml:1.2 ,fontWeight:"600" ,color:"rgba(255, 255, 255, 0.8)"}}>Thumbnail Title</Typography>
      <SearchComponent customStyles={{width: "295px",ml:1.2}} placeholder={"Get Sporty in Style"}/>
      <Typography variant="h7" sx={{ m:1,ml:1.2,mt:2,fontWeight:"600",color:"rgba(255, 255, 255, 0.8)" }}> Video status</Typography>
      <RadioButton/>
      <Typography variant="h6" sx={{ ml:1.2,mt:1 ,fontWeight:"550"}}>Product List</Typography>
      <Box  className="container">
     { videos && videos.map((video)=>
      (<ProductList key={video.id} video={video} noOfVideos={noOfVideos} />)
     )}
      </Box>
      <Button variant="contained" sx={{ textTransform: "none" ,width:"165px" ,borderRadius:"13px",margin:"auto" ,mb:2,mt:2}}>
      <CachedIcon/>
      <Typography variant="h8">
        Update PlayList
      </Typography>
      </Button>
    </Box>
  );

};

export default ManageProduct;
