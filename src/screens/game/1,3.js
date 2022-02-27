
// Map for (1,3)

import React from "react";
import { North, South, East, West } from "../../common/MapLinks";

export default function TutorialMain() {
  return (
    <div>
      <North href={"./7a5fda9a307e8871cbf2de85874d66342eff72165abc2581f586b3f1dbfa0604"} />
      <South href={"./be7cc5b081354059d0bd0a8f82d3d1c40b622e2c5618942b431ea4431eb12c87"} />
      <West href={"./15bafed7aff5e5084fbbf7660d14156d447cbe1db316aa2857efb93de3cb77f8"} />
      <East href={"./c4cb76dc1e76e0daaffc5cd502846bd975d739151fbaa4a61073734b7d13e457"} />

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
        <img src="/map/1,3.png" alt="map" height="30%" />
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
        ᚨ ᚠᚬ ᚠ ᚭᚴᚬᚡᚤᚱ ᚶᚨᚳᚧ ᚠ ᚢᚮᚴᚯᚫᚤ ᚮᚥ ᚥᚱᚨ →
        </p>
      </div>
    </div>
  );
}       
            