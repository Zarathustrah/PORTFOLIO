import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, CssBaseline } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    height: '300px',
    background: `url('/images/Screened.jpg')`,
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
    transition: '0.2s'
  }

})

export default function Screened() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <div className={classes.projectInfo}>
        <h1>Director Dictator</h1>
        <p>Add in description here</p>
      </div>
    </Box>
  )
}
