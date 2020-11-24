import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import { IconContext } from "react-icons"

import { 
  SiMongodb,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiGithub,  
} from "react-icons/si"

import { FaExternalLinkSquareAlt } from "react-icons/fa"



const useStyles = makeStyles({
  root: {
    height: '300px',
    background: `url('/images/Nalu.jpg')`,
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
    transition: '0.2s',
    // paddingBottom: '80px'
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
  }


})

export default function Nalu() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <h1>Nalu</h1>
        <p>One-week group build of a MERN full-stack surfing community app</p>
        <Grid 
        container
        direction='row'
        justify='center'>
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div className={classes.icon}>
              <SiMongodb />
              <p>MongoDB</p>
            </div>
            <div className={classes.icon}>
              <SiNodeDotJs />
              <p>NodeJS</p>
            </div>
            <div className={classes.icon}>
              <SiReact />
              <p>React</p>
            </div>
            <div className={classes.icon}>
              <SiSass />
              <p>Sass</p>
            </div>
          </IconContext.Provider>
        </Grid>
        <Grid 
        container
        direction='row'
        justify='center'>
        <IconContext.Provider value={{ size: '1.8rem' }}>
          <div className={classes.linkIcon}>
            <SiGithub 
            href='https://github.com/Zarathustrah/SEI-Project-3'
            target='_blank'
            />
          </div>
          <div className={classes.linkIcon}>
            <FaExternalLinkSquareAlt />
          </div>
        </IconContext.Provider>
        </Grid>
      </div>
    </Box>
  )
}