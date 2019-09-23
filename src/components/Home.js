import React from "react";

import NavBar from "./Styles/NavBar";
import PicsvidHero from "./Styles/PicsvidHero";
import PicsvidHeroLayout from "./Styles/PicsvidHeroLayout";
import Menu from "./Menu";

export default props => {
  return (
    <div className="App">
      <NavBar />
      <PicsvidHero />
      <PicsvidHeroLayout />
    </div>
  );
};
