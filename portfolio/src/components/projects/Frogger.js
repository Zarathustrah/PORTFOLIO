import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import { IconContext } from "react-icons"




import { 
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGithub,  
} from "react-icons/si"

import { FaExternalLinkSquareAlt } from "react-icons/fa"



const useStyles = makeStyles(theme => ({
  root: {
    height: '300px',
    background: `url('https://i.ibb.co/jw0R9bp/Frogger.jpg')`,    
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  projectInfo: {
    height: '300px',
    background: '#1f26ff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    opacity: '0',
    '&:hover': {
      opacity: '0.9'
    },
    transition: '0.4s'
  },
  icon: {
    fontSize: '8px',
    textAlign: 'center',
    margin: '20px'
  },
  linkIcon: {
    fontSize: '8px',
    textAlign: 'center',
    margin: '15px',
    color: 'white',
    '&:hover': {
      color: '#ff0127',
    },
  },
  anchor: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#ff0127',
    }
  },
  heading: {
    marginTop: '10px',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '20px',
      marginTop: '30px'
    }

  },
  subheading: {
    margin: '15px',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '12px',
    }

  }

}))

export default function Frogger() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <Typography variant='h4' className={classes.heading}>Frogger</Typography>
          <Box className={classes.subheading}>
            <Typography variant='subtitle1'>One-week solo build of a classic game in vanilla JS
            </Typography>
          </Box>
        <Grid 
        container
        direction='row'
        justify='center'>
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div className={classes.icon}>
              <SiCss3 />
              <p>Css</p>
            </div>
            <div className={classes.icon}>
              <SiJavascript />
              <p>JavaScript</p>
            </div>
            <div className={classes.icon}>
              <SiHtml5 />
              <p>HTML</p>
            </div>
          </IconContext.Provider>
        </Grid>
        <Grid 
        container
        direction='row'
        justify='center'>
       <IconContext.Provider value={{ size: '1.8rem' }}>
          <div className={classes.linkIcon}>
            <a className={classes.anchor} href='https://github.com/Zarathustrah/FROGGER/blob/main/README.md' target='_blank' rel='noopener  noreferrer'>
            <SiGithub />
            </a>
          </div>
          <div className={classes.linkIcon}>
            <a className={classes.anchor} href='https://zarathustrah.github.io/FROGGER/' target='_blank' rel='noopener  noreferrer'>
            <FaExternalLinkSquareAlt />
            </a>
          </div>
      </IconContext.Provider>
        </Grid>
      </div>
    </Box>
  )
}
