
// Map for (3,4)

import React from "react";
import { North, South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <North href={"./308d7bd2536b433ae2ec880ede725c0923ce3f80cf37dc99194037bec6102e76"} />
      <South href={"./c1ef461e1a44abbc733181c22e93ef12d8954656d5412e5eef1de00202ee9a33"} />
      <West href={"./d524785fe8b567ead9fb1a7de90b248bcbf33d0f6ceac04d08f374460e5207da"} />
      <East href={"./a4a36aa85bae181263894423377d7ec54fa027f92efcbbbf0474b026662f5de9"} />

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
        <img src="/map/3,4.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            