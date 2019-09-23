import React from "react";
import { Link } from "react-router-dom";

export default ({ match }) => {
  return (
    <div className="App">
      <Link className="App" to="/blog/moon/moon_photos1">MoonGallery1</Link>
    </div>
  );
};
