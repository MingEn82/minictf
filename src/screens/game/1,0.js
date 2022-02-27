
// Map for (1,0)

import React from "react";
import { North, South, East } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <North href={"./178e450bf3726515417cea82ea10b5bc36540c49a66f460c4f847d9c39de037b"} />
      <South href={"./c1e75495ca446296f02b7b450cce457a190d1941fe2a2a2b9ba23df61a26f6cb"} />
      <East href={"./44a4fb7a5de1e98d6ceafbeab1d6358f52d7649bea27b1ba29f531c3e8f2ac46"} />

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
        <img src="/map/1,0.png" alt="map" height="30%" />
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
        <a download={"treasure map.jpg"} href={"/game/map.jpg"}>
          <img 
            src="/game/map.jpg" 
            alt="map"
            style={{height: "70vh", display: "absolute"}}
          />
        </a>
      </div>
    </div>
  );
}       
            