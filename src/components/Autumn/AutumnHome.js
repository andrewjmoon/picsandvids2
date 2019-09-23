import React from "react";
import { Link } from "react-router-dom";

export default ({ match }) => {
  return (
    <div className="App">
      <Link className="App" to="/blog/autumn/photos_page1">
        AutumnGallery1
      </Link>
      <br />
      <Link className="App" to="/blog/autumn/videos_page1">
        AutumnVideo1
      </Link>
      <br />
      <Link className="App" to="/blog/autumn/videos_page2">
        AutumnVideo2
      </Link>
    </div>
  );
};
