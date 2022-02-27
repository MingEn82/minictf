
// Map for (0,3)

import React from "react";
import { South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <South href={"./c9f18ad656657e24402c8e968a43bec1b01ca56731425f8b4426d622d9dc5dfa"} />
      <West href={"./14136a2a13125ae9aa5ff017e657a0e8ea00af064a8de5fadf105c21136045e5"} />
      <East href={"./4c6617b306ad9c78e25313ffa5ca203b97107c6afc90d6323aaa9c5b86ae2809"} />

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
        <img src="/map/0,3.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            