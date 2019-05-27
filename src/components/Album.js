import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
//import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
//import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ScrollableAnchor from "react-scrollable-anchor";

//import for another page
import {Link} from "react-router-dom"

//import
//import Sidebar2 from "./sidebar2"

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

// for portfolio
const portfolioItems = [
  {
    imgSrc: "./img/Dos.jpg",
    heading: "DoS Protection",
    description: "A yellow pencil with envelopes on a clean, blue backdrop!"
  },
  {
    imgSrc: "./img/Delete.jpg",
    heading: "Delete Request",
    description:
      "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!"
  },
  {
    imgSrc: "./img/GET-request.jpg",
    heading: "Cross Site Scripting",
    description:
      "Strawberries are such a tasty snack, especially with a little sugar on top!"
  },
  {
    imgSrc: "./img/Patch-Request.jpg",
    heading: "Patch Request",
    description:
      "A yellow workspace with some scissors, pencils, and other objects."
  }
];
// end portfolio


function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              We Clean and Protect Websites
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Do you require a custom solution or need to protect multiple sites? We offer flexible plans to meet your requirements.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  {/* <Button variant="contained" color="primary">
                    SignUp
                  </Button> */}
                  <Link to="/subscribe/CheckOut" className="btn btn-primary btn-xl js-scroll-trigger" >Subscribe</Link>
                </Grid>
              </Grid>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
        <ScrollableAnchor id="portfolio">
       <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Attacks</h3>
          <h2 className="mb-5">Attacks Performed!</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="https://en.wikipedia.org/wiki/Denial-of-service_attack">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
        </div>
        </div>
        
        
      </main>
      {/* Footer */}
    
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);