import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import { IconContext } from "react-icons"

import {
  SiGithub,
  SiLinkedin
} from "react-icons/si"

const useStyles = makeStyles(theme => ({
  root: {
    height: '300px',
    background: `url('https://i.ibb.co/NZKsSc3/Contact.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  projectInfo: {
    height: '300px',
    background: '#1f26ff',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    '&:hover': {
      opacity: '0.9',
    },
    transition: '0.4s'
  },
  heading: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '20px',
      marginTop: '-20px'
    }

  },
  subheading: {
    margin: '15px',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '12px',
    }
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

}))

export default function Contact() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <Typography variant='h4' className={classes.heading}>Contact</Typography>
        <Typography variant='subtitle1' className={classes.subheading}>danielparkerprice@gmail.com</Typography>
        <Grid 
        container
        direction='row'
        justify='center'>
       <IconContext.Provider value={{ size: '1.8rem' }}>
          <div className={classes.linkIcon}>
            <a className={classes.anchor} href='https://github.com/Zarathustrah' target='_blank' rel='noopener  noreferrer'>
            <SiGithub />
            </a>
          </div>
          <div className={classes.linkIcon}>
            <a className={classes.anchor} href='https://www.linkedin.com/in/daniel-p-price/' target='_blank' rel='noopener  noreferrer'>
            <SiLinkedin />
            </a>
          </div>
      </IconContext.Provider>
        </Grid>
      </div>
    </Box>
  )
}
