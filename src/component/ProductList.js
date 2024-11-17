import { Box, Card, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';


const ProductList = ({video,noOfVideos}) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
      
  return (
    <Box sx={{p:1,borderRadius:"13px",border:"1px solid rgba(255, 255, 255, 0.1)",position:"relative",background:" rgba(34, 34, 42, 1)" ,display:"flex",gap:1, mb:1}}> 
        <img style={{height:"60px",width:"60px",borderRadius:"13px"}} src={video.snippet.thumbnails.default.url} alt='thumbnail'/>
        <div>
            <Typography variant='body2' sx={{color: "rgba(255, 255, 255, 0.9)"}}>
            {video.snippet.title.slice(0,20)}..
            </Typography>
            <Card sx={{m:0.5,background:" rgba(53, 55, 59, 1)" ,borderRadius:"20px", width:"60px",justifyItems:"center",color:"#fff"}}>
            <Typography sx={{fontSize:"10px", fontWeight:"800"}}>
            4.05.60
            </Typography>
             
            </Card>
            <Typography variant='body2' sx={{color:"#C0C0D6"}} >
             Products Attached:{noOfVideos} 
            </Typography>
        </div>
        <Box
  sx={{
    background: "rgba(53, 55, 59, 1)",
    display: "flex", 
    justifyContent: "center",  
    alignItems: "center",  
    height: "40px",
    width: "40px",
    borderRadius:"10px",
    top: 0,  
    right: 0,
    position: "absolute",
    borderTopLeftRadius:"0px",
    borderBottomRightRadius:"0px"
    
  }}
>
  <Checkbox sx={{ color: "white" , borderRadius:"20px"}} {...label} />
</Box>
    </Box>
  )
}

export default ProductList