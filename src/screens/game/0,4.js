
// Map for (0,4)

import React from "react";
import { South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <South href={"./c4cb76dc1e76e0daaffc5cd502846bd975d739151fbaa4a61073734b7d13e457"} />
      <West href={"./7a5fda9a307e8871cbf2de85874d66342eff72165abc2581f586b3f1dbfa0604"} />
      <East href={"./1844d9e5b2307ca9f1b3e0cb6803ce5ebe013db7697c0267d3c11f94faec0b6c"} />

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
        <img src="/map/0,4.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            