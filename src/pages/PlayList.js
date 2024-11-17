import React,{useEffect, useState} from 'react';
import ProductMain from '../component/ProductMain';
import ManageProduct from '../component/ManageProduct';
import { Button, Typography } from '@mui/material';
import {closestCorners, DndContext} from  "@dnd-kit/core"
import { arrayMove } from '@dnd-kit/sortable';
import { collection, setDoc, doc ,getDoc} from "firebase/firestore";
import { db } from "../firebaseConfig"
import TransformData from '../component/FireStore/Firebase';
import LinkIcon from '@mui/icons-material/Link';


const PlayList = () => {
   const [ytdata,setData]=useState([])
   const [isClicked,setIsClicked]=useState(false)
   const [playListVideos, setPlayListVideos] = useState();
   console.log("play list",ytdata);


   

   useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(localStorage.getItem("user")); 

      if (!user || !user.id) {
        console.error("User ID not found in localStorage.");
        return;
      }

      try {
        const playlistRef = collection(db, "ytdata");
        const userDocRef = doc(playlistRef, user.id);
        const response = await getDoc(userDocRef);

        if (response.exists()) {
          const data = response.data();
          console.log("fire base fetched data:", data.data);
          setData(data.data)
        } else {
          console.warn("No document found for the provided ID.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        
      }
    };

    fetchData();
  }, []);
 
    const isclicked=(data)=>{
      setIsClicked(true)
      setPlayListVideos(data)
    }

   
   const updateFirebase = async (updatedData) => {
    const playlistRef = collection(db, "ytdata"); // 'ytdata' is the collection name
    try {
      const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user's info
      if (!user || !user.id) {
        throw new Error("User not found in localStorage or missing ID");
      }
    
      const userDocRef = doc(playlistRef, user.id); // Create a document for the user based on their ID
    
      // Save user-specific data
      await setDoc(userDocRef, { id: user.id, data: updatedData });
    
      // Retrieve the user's data to confirm
      const response = await getDoc(userDocRef);
    
      if (response.exists()) {
        console.log("Playlist updated in Firebase for user:", response.data());
        const firedata = TransformData(response); // Transform data if needed
        console.log("Transformed Data:", firedata);
      } else {
        console.error("Document does not exist.");
      }
    } catch (error) {
      console.error("Error updating Firebase:", error);
    }
  };
  
    const importPlaylist = async () => {
        const token=localStorage.getItem("token")
        if (!token) {
          console.log("Token is not available. Please log in first.");
          return;
        }
    
        await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=25`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(data => {
            setData(data.items  || []);
            localStorage.setItem("playlist",JSON.stringify(data.items))
            if(data?.error?.code===401){
                localStorage.removeItem("token");
                window.location.reload();
            }
          
          })
          .catch(error => console.error('Error:', error));
      };
     
      const getPlayListPos = (id) => ytdata?.findIndex((data) => data.id === id)
      const handleDrag = event =>{
        const {active,over}=event;
        if (!active || !over || !active.id || !over.id) {
          console.error("Drag event missing necessary data", { active, over });
          return;
        }
        if(active.id===over.id) return;

        setData(ytdata =>{
          const originalPos=getPlayListPos(active.id);
          const newPos=getPlayListPos(over.id)

          
    const updatedData = arrayMove(ytdata, originalPos, newPos);

     localStorage.setItem("playlist", JSON.stringify(updatedData));
     updateFirebase(updatedData);

    return updatedData;
          
        })
      }
 

  return (
    <>
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography variant='h7' sx={{fontWeight:"650" ,ml:1}}>Product Playlists</Typography>
          <Button onClick={importPlaylist} sx={{ textTransform: "none", height: "35px", borderRadius: "10px" }} variant="contained">
            Import From Youtube
          </Button>

          <Button  sx={{  marginLeft: "auto",mr:"25px",textTransform: "none", height: "35px", borderRadius: "10px" }} variant="contained">
            <LinkIcon/>
             Generate Code
          </Button>
        </div>
    <div style={{ display: "flex", width: "100%" }}>
    <DndContext onDragEnd={handleDrag}
    collisionDetection={closestCorners}>
       <ProductMain ytdata={ytdata} isclicked={isclicked}/>
      </DndContext>
      {isClicked && <ManageProduct  playListVideos={playListVideos}/>}
        </div>
    </>
   
  )
}

export default PlayList