import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';


const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function PortfolioSection2(props) {
  const { classes } = props;

  const images = [
    {
      imgSrc: "./img/Google-localHost.png",
      title: 'Google.com',
      width: '50%',
    },
    {
      imgSrc: "./img/XSS02(local).png",
      title: 'WWW.contentdb.emule-project.net',
      width: '50%',
    },
    {
      imgSrc: "./img/XSS01.png",
      title: 'WWW.contentdb.emule-project.net',
      width: '50%',
    },
    {
      imgSrc: "./img/Sql-Injection01.png",
      title: 'WWW.fspublishers.org',
      width: '50%',
    },
    {
      imgSrc: "./img/Sql-injection02(local).png",
      title: 'WWW.fspublishers.org(Through WAF)',
      width: '100%',
    },
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large" id="portfolio">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div className={classes.imgSrc}>
            <img className="img-fluid" src={image.imgSrc} alt="" />
            </div>
             
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  );
}

PortfolioSection2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioSection2);