// Fallback page
import React from "react";

export default function Tutorial7(props) {

  return (
    <div style={{ margin: 20 }}>
      <p>
        Hi, this page doesnt exist. Click{" "}
        <a href={"https://" + window.location.href.split('/')[2] + "/tutorial/welcome"}>here </a>
        to go to where you started.
      </p>
    </div>
  );
}
