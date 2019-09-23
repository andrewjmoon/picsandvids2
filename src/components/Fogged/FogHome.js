import React from "react";
import { Link } from "react-router-dom";

export default ({ match }) => {
  return (
    <div className="App">
      <Link className="App" to="/blog/fogged/fog_photos1">FogGallery1</Link>
      <br />
      <Link className="App" to="/blog/fogged/fog_videos1">FogVideo1</Link>
    </div>
  );
};
