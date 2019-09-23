import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

export default () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Link
        color="white"
        className="Link"
        variant="contained"
        size="large"
        to="/blog/autumn"
      >
        Autumn
      </Link>
      <br />
      <Link className="Link" to="/blog/fogged">
        Fog
      </Link>
      <br />
      <Link
        component="button"
        variant="body2"
        className="Link"
        to="/blog/forest"
      >
        Forest
      </Link>
      <br />
      <Link className="Link" to="/blog/moon">
        Moon
      </Link>
      <br />
    </div>
  );
};
