
// Map for (1,5)

import React from "react";
import { North, South, West } from "../../common/MapLinks";


export default function TutorialMain() {
  return (
    <div>
      <North href={"./1844d9e5b2307ca9f1b3e0cb6803ce5ebe013db7697c0267d3c11f94faec0b6c"} />
      <South href={"./da0e89c6383cf5b697c5b3427c5a00b972d0b6dc85e2501cb28ac0d5bc014bca"} />
      <West href={"./c4cb76dc1e76e0daaffc5cd502846bd975d739151fbaa4a61073734b7d13e457"} />
      
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
        <img src="/map/1,5.png" alt="map" height="30%" />
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
        <p>
        ← ᚫᚫ ᚥᚨᚭᚣ ᚬᚤ ᚠᚦᚠᚨᚭ
        </p>
      </div>
    </div>
  );
}       
            