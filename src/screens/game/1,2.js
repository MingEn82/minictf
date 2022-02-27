
// Map for (1,2)

import React from "react";
import { North, South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <North href={"./14136a2a13125ae9aa5ff017e657a0e8ea00af064a8de5fadf105c21136045e5"} />
      <South href={"./44dc07ddb13fb0e633c7837e5050322c0f3a5e153b2bcb81780afdb7b2067a67"} />
      <West href={"./44a4fb7a5de1e98d6ceafbeab1d6358f52d7649bea27b1ba29f531c3e8f2ac46"} />
      <East href={"./c9f18ad656657e24402c8e968a43bec1b01ca56731425f8b4426d622d9dc5dfa"} />

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
        <img src="/map/1,2.png" alt="map" height="30%" />
      </div>

      <div 
          style={{
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            color: "black",
            // width: "70vw",
          }}
        >
          <p>A beaten looking path splits into three</p>
          <img src="/backgrounds/path2.jpg" alt="path2" styles={{width: "100%"}}/>
        </div>
    </div>
  );
}       
            