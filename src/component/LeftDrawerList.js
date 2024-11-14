import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Card, Typography } from '@mui/material';
import "../globalStyles/styles.css"

const itemList = [
  { id: 1, name: "Revenue",img:"./icons/revenue.png" },
  { id: 2, name: "Shoppable Video", subName: "blaash",img:"./icons/img.png"  },
  { id: 3, name: "Story", subName: "blaash",img:"./icons/img.png"  },
  { id: 4, name: "Live Commerece", subName: "blaash" ,img:"./icons/img.png" },
  { id: 5, name: "Playlist Manager", subName: "Product playlist" ,img:"./icons/img.png" },
  { id: 6, name: "One Click Post",img:"./icons/click.png"  },
  { id: 7, name: "Calender",img:"./icons/calender.png" },
  { id: 7, name: "Hire Influencer",img:"./icons/hire.png" },
];

export default function LeftDrawerList() {
  const [openStates, setOpenStates] = React.useState({});

  // here we toggle open for a specific item
  const handleClick = (id) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <List sx={{ width: '100%',}} component="nav">
      {itemList.map((item) => (
        <React.Fragment key={item.id} >
            <Box sx={{
             mt: 2,
             borderTop: openStates[item.id] ? "2px solid #0273e4" : "none",
             borderBottom: openStates[item.id] ? "2px solid #0273e4" : "none",
             borderLeft: openStates[item.id] ? "2px solid #0273e4" : "none",
             borderTopLeftRadius: "10px",
             borderBottomLeftRadius: "10px",
             color:  openStates[item.id] ? "#fff" :"#828293" 
             }}>
          <ListItemButton onClick={() => handleClick(item.id)} sx={{mt:2}}>
          
            <ListItemIcon>
              <img src={item.img} alt="logo" className='drawerLogo' />
            </ListItemIcon>
            <Typography variant='h8' sx={{fontWeight:"650" ,width:"100%"}} >{item.name} </Typography>
          { item.subName && ( openStates[item.id]  ? <ExpandLess /> : <ExpandMore />) }
        
          </ListItemButton>
         {item.subName && <Collapse in={openStates[item.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton >
                <Card  sx={{
                    width:"100%",
                    m:0,
                    bgcolor:"#5A5A68",
                    p:1,
                    borderRadius:"10px",
                    mb:1
                }}>

                <Typography variant='h8' sx={{color:"#fff" ,fontWeight:"bold"}} >{item.subName} </Typography>
                </Card>
              </ListItemButton>
            </List>
          </Collapse>
          
          }
           </Box>
        </React.Fragment>
      ))}
    </List>
  );
}
