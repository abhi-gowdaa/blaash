import React, { useState } from "react";
import ProductMain from "../component/ProductMain";
import ManageProduct from "../component/ManageProduct";
import { Button } from "@mui/material";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const PlayList = () => {
  const [ytdata, setData] = useState();

  const importPlaylist = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token is not available. Please log in first.");
      return;
    }

    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=25`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        if (data?.error?.code === 401) {
          localStorage.removeItem("token");
          window.location.reload();
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <h3>Product Playlists</h3>
        <Button
          onClick={importPlaylist}
          sx={{ textTransform: "none", height: "40px", borderRadius: "10px" }}
          variant="contained"
        >
          Import From Youtube
        </Button>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <DndProvider backend={HTML5Backend}>
          <ProductMain ytdata={ytdata} />
        </DndProvider>
        <ManageProduct />
      </div>
    </>
  );
};

export default PlayList;
