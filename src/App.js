import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AutumnGallery1 from './components/Autumn/AutumnGallery1';
import AutumnHome from './components/Autumn/AutumnHome';
import Autumn_videos1 from './components/Autumn/Autumn_videos1';
import Autumn_videos2 from './components/Autumn/Autumn_videos2';
import FogHome from './components/Fogged/FogHome';
import FogGallery1 from './components/Fogged/FogGallery1';
import Fog_videos1 from './components/Fogged/Fog_videos1';
import ForestHome from './components/Forest/ForestHome';
import ForestGallery1 from './components/Forest/ForestGallery1';
import MoonHome from './components/Moon/MoonHome';
import MoonGallery1 from './components/Moon/MoonGallery1';
import Menu from './components/Menu';
import { useAuth0 } from './react-auth0-wrapper';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
//import { FogHome, FogGallery1, Fog_videos1 } from "./components/Fog/";

export default () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router>
        <header>
          <Home />
        </header>
        <Switch>
          <PrivateRoute exact path="/menu" component={Menu} />
          <PrivateRoute
            exact
            path="/blog/autumn/photos_page1"
            component={AutumnGallery1}
          />
          <PrivateRoute
            exact
            path="/blog/autumn/videos_page1"
            component={Autumn_videos1}
          />
          <PrivateRoute
            exact
            path="/blog/autumn/videos_page2"
            component={Autumn_videos2}
          />
          <PrivateRoute exact path="/blog/autumn" component={AutumnHome} />
          <PrivateRoute exact path="/blog/fogged/" component={FogHome} />
          <PrivateRoute
            exact
            path="/blog/fogged/fog_photos1"
            component={FogGallery1}
          />
          <PrivateRoute
            exact
            path="/blog/fogged/fog_videos1"
            component={Fog_videos1}
          />

          <PrivateRoute exact path="/blog/forest/" component={ForestHome} />
          <PrivateRoute
            exact
            path="/blog/forest/forest_photos1"
            component={ForestGallery1}
          />

          <PrivateRoute exact path="/blog/moon/" component={MoonHome} />
          <PrivateRoute
            exact
            path="/blog/moon/moon_photos1"
            component={MoonGallery1}
          />
        </Switch>
      </Router>
    </div>
  );
};
