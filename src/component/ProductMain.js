 import {  Card } from '@mui/material';
import "../globalStyles/styles.css";
import DragPlaylist from './DragPlaylist';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
 

const ProductMain = ({ ytdata ,isclicked}) => {
 
let items = ytdata?.filter((data) => data.contentDetails["itemCount"] > 4);
 
 const handleClick = async (id)=>{
  console.log(id);
  
      const token= localStorage.getItem("token")
      try{
        console.log("object");
        await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${id}&mine=true&maxResults=25`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log("visei",data) 
            isclicked(data)
          })
          .catch(error => console.error('Error:', error));
      }
    catch{

    }
    
 }
  return (
    <Card
    
      sx={{
        backgroundColor: "#27272f",
        color: "#fff",
        width: "100%",
        height: "510px",
        m: 2,
        mb:0,
        mt:2,
        ml: 1,
        borderRadius: "15px",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        p: 1,
        overflow:"auto"
      }}
    >
      {items && <SortableContext items={items} strategy={horizontalListSortingStrategy}>
      {items && items.map((item) => (
        <DragPlaylist handleClick={handleClick} onClick={console.log(item.id)} id={item.id} key={item.id} pylist={item}/>
      ))}
      </SortableContext>}
     
    </Card>
  );
};

export default ProductMain;

 