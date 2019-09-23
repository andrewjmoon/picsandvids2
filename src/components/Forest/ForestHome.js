import React from "react";
import { Link } from "react-router-dom";

export default ({ match }) => {
  return (
    <div className="App">
      <Link className="App" to="/blog/forest/forest_photos1">ForestGallery1</Link>
      <br />
    </div>
  );
};
