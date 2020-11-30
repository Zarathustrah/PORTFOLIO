import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    height: '300px',
    background: `url('https://i.ibb.co/3sph8Pr/About.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  projectInfo: {
    height: '300px',
    background: '#1f26ff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    opacity: '0',
    '&:hover': {
      opacity: '0.9',
    },
    transition: '0.4s'
  },
  heading: {
    fontFamily: 'Gloria Hallelujah',
     [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '20px',
      marginTop: '0'
    }
  },
  subheading: {
    fontFamily: 'Gloria Hallelujah',
    lineHeight: '20px',
    fontSize: '20px',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px',
    // lineHeight: '0.5',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '15px',
    }
  }

}))

export default function About() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <Typography variant='h4' className={classes.heading}>About Me</Typography>
        <Box className={classes.subheading}>
          <Typography variant='subtitle1' className={classes.subheading}>I am a born-again junior software engineer whose world has been transformed by the magic of programming.<br></br>
          <br></br>
          
          I recently completed the Software Engineering Immersive course at General Assembly, while previously I launched and ran fine dining restaurants in London, taking them from the start-up phase to fully operational businesses.<br></br>
          <br></br>
          
           My goal now is to bring my dedication and creativity to a team as a junior developer.
          </Typography>
        </Box>
        
      </div>
    </Box>
  )
}



