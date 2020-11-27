import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    height: '300px',
    background: `url('/images/About.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  projectInfo: {
    height: '300px',
    background: '#1f26ff',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    opacity: '0',
    '&:hover': {
      opacity: '0.9',
    },
    transition: '0.4s'
  }

})

export default function About() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <h1>Bio</h1>
        <p>Add in description here</p>
      </div>
    </Box>
  )
}
