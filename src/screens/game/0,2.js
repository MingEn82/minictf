
// Map for (0,2)

import React from "react";
import { South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <South href={"./15bafed7aff5e5084fbbf7660d14156d447cbe1db316aa2857efb93de3cb77f8"} />
      <West href={"./8b12122a6833284482026d67cfa484c58fd0ff536fadc5db0bce9cef41ab990c"} />
      <East href={"./7a5fda9a307e8871cbf2de85874d66342eff72165abc2581f586b3f1dbfa0604"} />

      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          textAlign: "center",
          margin: "5px",
          border: "5px solid black",
        }}
      >
        <img src="/map/0,2.png" alt="map" height="30%" />
      </div>
      <div 
          style={{
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            color: "black",
          }}
        >
          <p>Theres nought here but a worn out path leading south</p>
          <img src="/backgrounds/path1.jpg" alt="path1" styles={{width: "100%"}}/>
        </div>
        
    </div>
  );
}       
            