import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "../globalStyles/styles.css";

const ProductMain = ({ ytdata }) => {
  const data = ytdata?.items;
  const items = data?.filter((data) => data.contentDetails["itemCount"] > 0);
  console.log(items);

  return (
    <Card
      sx={{
        backgroundColor: "#27272f",
        color: "#fff",
        width: "100%",
        height: "465px",
        m: 2,
        ml: 0,
        borderRadius: "15px",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        p: 1,
        overflow:"auto"
      }}
    >
      {items && items.map((item) => (
        <Box key={item.id} onClick={()=>console.log(item.id)} sx={{ maxWidth: "270px", position: "relative", listStyleType: "none",m:"auto" }}>
          
         
          <Box sx={{ position: "relative" }}>
            <img className="plyTumbnail" src={item.snippet.thumbnails.medium.url} alt="yt playlist" style={{  borderRadius: "25px" }} />
            
            {/* Top Right Icon */}
            <MoreHorizIcon sx={{ position: "absolute", top: 0, right: 0, bgcolor: "#36373b", borderRadius: "30%" }} />
            
            
            <Box sx={{ position: "absolute", bottom: 40, left: -0.3, display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: "25px", height: "30px",bgcolor: "#017ffa", borderRadius: "50%" ,borderTopLeftRadius:"1px",borderBottomLeftRadius:"1px"}} />
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#fff" }}>
                {item.snippet.title}
              </Typography>
            </Box>

             
            <Box sx={{
              position: "absolute",
              bottom: 4,
              display: "flex",
              alignItems: "center",
              gap: 1,
              
              bgcolor: "#1c1d22",
              p: 0.5,
              borderRadius: "25px",
              borderTopRightRadius:"1px",
              borderTopLeftRadius:"1px",
              width: "97.3%",
              justifyContent: "center"
            }}>
              <SubscriptionsOutlinedIcon sx={{ color: "#fff" }} />
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {item.contentDetails["itemCount"]} videos
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default ProductMain;
