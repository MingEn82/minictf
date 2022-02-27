
// Map for (0,1)

import React from "react";
import { South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <South href={"./44a4fb7a5de1e98d6ceafbeab1d6358f52d7649bea27b1ba29f531c3e8f2ac46"} />
      <West href={"./178e450bf3726515417cea82ea10b5bc36540c49a66f460c4f847d9c39de037b"} />
      <East href={"./14136a2a13125ae9aa5ff017e657a0e8ea00af064a8de5fadf105c21136045e5"} />
      
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
        <img src="/map/0,1.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            