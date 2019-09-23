import React from "react";
import YouTube from "@u-wave/react-youtube";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link className="App" to="/blog/fogged/">
        Fog Menu{" "}
      </Link>
      <YouTube
        style={{ height: "300vh" }}
        video="mTsBmFjaGxk"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="duR1GcM2TtA"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="Ci_2A3aaCaQ"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="N06cJSKHV14"
        width="100%"
        height="100%"
      />
      <br />
    </div>
  );
};
