import React from 'react'
import { Box, Typography } from '@mui/material';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "../globalStyles/styles.css";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const DragPlaylist = ({pylist , handleClick}) => {
 
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: pylist.id});

const style={
  transition,
  transform:CSS.Transform.toString(transform)
}

  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners}  key={pylist.id}  onClick={()=>handleClick(pylist.id)} sx={{ maxWidth: "270px", position: "relative", listStyleType: "none",m:"auto"  }}>
        <Box sx={{ position: "relative" }}>
            <img className="plyTumbnail" src={pylist.snippet.thumbnails.medium.url} alt="yt playlist" style={{  borderRadius: "25px" }} />
            <MoreHorizIcon sx={{ position: "absolute", top: 0, right: 0, bgcolor: "#36373b", borderRadius: "30%" }} />
            <Box sx={{ position: "absolute", bottom: 40, left: -0.3, display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: "25px", height: "30px",bgcolor: "#017ffa", borderRadius: "50%" ,borderTopLeftRadius:"1px",borderBottomLeftRadius:"1px"}} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#fff" }}>
                  {pylist.snippet.title}
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
                {pylist.contentDetails["itemCount"]} videos
              </Typography>
            </Box>
          </Box>
        </Box>
  )
}

export default DragPlaylist