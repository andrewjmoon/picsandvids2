import React, { useState, useEffect } from "react";
import { ForestPhotos } from "./ForestPhotos";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { Link } from "react-router-dom";

export default () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === ForestPhotos.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="App">
      <Link className="App" to="/blog/forest/">
        <li>Forest Menu</li>
      </Link>
      <Gallery
        style={{
          height: "100vh",
          width: "100vw",
          background: "black"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {ForestPhotos.map(image => (
          <GalleryImage key={index} objectFit="contain" src={image} />
        ))}
      </Gallery>
    </div>
  );
};
