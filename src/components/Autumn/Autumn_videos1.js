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
        video="Al9JNL0XF4w"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="TV8JMigIYb8"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="bIUhQ8-z28E"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="zmfQb6LQkMI"
        width="100%"
        height="100%"
      />
      <br />
      <ReactPlayer
        url="https://vimeo.com/2323616"
        className="react-player"
        playing={false}
        width="100%"
        height="100%"
      />
    </div>
  );
};
