
// Map for (1,4)

import React from "react";
import { North, South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <North href={"./4c6617b306ad9c78e25313ffa5ca203b97107c6afc90d6323aaa9c5b86ae2809"} />
      <South href={"./308d7bd2536b433ae2ec880ede725c0923ce3f80cf37dc99194037bec6102e76"} />
      <West href={"./c9f18ad656657e24402c8e968a43bec1b01ca56731425f8b4426d622d9dc5dfa"} />
      <East href={"./c5620637b414f9ee28f9276290f23687047abd02696185fd4253061a16a3847c"} />
      
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
        <img src="/map/1,4.png" alt="map" height="30%" />
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
        ← ᚤᚭᚣᚲ, ᚰᚴᚠᚱᚳᚤᚱ ᚠ ᚣᚮᚹᚤᚭ, ᚠᚭᚣ ᚸᚮᚴ' →<br/>
        ᚶᚧᚠᚳ ᚠᚬ ᚨ
        </p>
      </div>
    </div>
  );
}       
            