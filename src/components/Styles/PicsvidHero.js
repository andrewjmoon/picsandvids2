import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PicsvidHeroLayout from "./PicsvidHeroLayout";
import { Link } from "react-router-dom";

const backgroundImage =
  "https://images.unsplash.com/photo-1568046909580-57b2061d46db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <div>
      <PicsvidHeroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img style={{ display: "none" }} src={backgroundImage} alt="" />

        <Typography
          color="inherit"
          align="center"
          variant="h5"
          className={classes.h5}
        >
          An eclectic mix of photos and videos capturing seasons and landscapes.
        </Typography>

        <Typography>
          <Link className="Link" to="/menu">
            {" "}
            Main Menu{" "}
          </Link>
        </Typography>
      </PicsvidHeroLayout>
    </div>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
