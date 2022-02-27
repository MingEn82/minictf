
// Map for (0,0)

import React from "react";
import { South, East } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <South href={"./fe2267d9198219da887760a0f36389966c7c4d745613ecde9a4924d181059aec"} />
      <East href={"./8b12122a6833284482026d67cfa484c58fd0ff536fadc5db0bce9cef41ab990c"} />

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
        <img src="/map/0,0.png" alt="map" height="30%" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <img 
            src="/backgrounds/underground forest.jfif" 
            alt="underground forest"
            style={{height: "60vh", display: "absolute"}}
        />
        <div 
          style={{
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <p>
            The cave opens to an underground forest. <br/>
            While you stare at the forest in confusion, you spot a note nailed on a tree.<br/><br/>
            <a href="/game/parchment-2.txt" download="parchment-2.txt" style={{color: "white"}}>
              Parchment-2.txt
            </a>
            <br/><br/>A message is scrawled on the trunk: <br/>
            The Forest of Mirages alters the <b>TYPE</b> of its inhabitants.
          </p>
        </div>
      </div>
    </div>
  );
}       
            