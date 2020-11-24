import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, CssBaseline } from '@material-ui/core'


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
  content: {
    margin: '0'
  },

})

export default function Nalu2() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <div className={classes.projectInfo}>
        <h1>Nalu</h1>
        <p className={classes.content}>One-week group build of a MERN full-stack surfing community app</p>
      </div>
    </Box>
  )
}