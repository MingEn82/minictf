import React from "react";

export default function Tutorial1(props) {
  return (
    <div style={{ margin: 20 }}>
      <p>This is a tutorial on how to get from place to place.</p>
      <p>
        Anything goes here - get to the next page using any method you can think
        of.
      </p>
      <p>
        Here's a freebie for you. The next page's link is /r0undtw0 - as in
        https://{window.location.href.split('/')[2]}/tutorial/r0undtw0.
      </p>
      <p>
        Access to new pages will be in the form of either clickable links, or
        parts of the url (like /r0undtw0)
      </p>
    </div>
  );
}
