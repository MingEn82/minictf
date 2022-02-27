// Ending Page
import React from "react";
import CentreText from "../../common/CentreText"

export default function ending(props) {
  var text = [
    'Well Done! You escaped from the dungeon in one piece!',
    'Thanks for playing the dungeon. We hope you enjoyed it.',
    "Please let us know if you disliked any sections and we'll update the game accordingly."
  ]
  return (
    <CentreText
      children={text}
    >
    </CentreText>
  );
}
