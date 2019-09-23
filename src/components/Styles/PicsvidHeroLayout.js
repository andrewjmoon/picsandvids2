import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HideOnScroll from "./HideOnScroll";

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    //position: "relative",
    //display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      minHeight: 200,
      maxHeight: 200
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.lightgrey,
    opacity: 0.5,
    zIndex: -1
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2
  },
  arrowDown: {
    position: "absolute",
    bottom: theme.spacing(4)
  }
});

function ProductHeroLayout(props) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <HideOnScroll>
        <Container className={classes.container}>
          {children}
          <div className={classes.backdrop} />
          <div className={clsx(classes.background, backgroundClassName)} />
        </Container>
      </HideOnScroll>
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHeroLayout);
