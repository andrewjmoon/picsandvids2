import React from "react";
import YouTube from "@u-wave/react-youtube";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link className="Link" to="/blog/autumn/">
        <li>Autumn Menu</li>
      </Link>
      <YouTube
        style={{ height: "300vh" }}
        video="J89qQl36mY8"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="mA4mN7aCmU0"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="S4Zir_DrRbE"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="LFbQzEiQpzY"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="llbNGpLWwxw"
        width="100%"
        height="100%"
      />
      <br />
    </div>
  );
};
