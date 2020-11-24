import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Nalu from './Nalu'
import Frogger from './Frogger'
import Screened from './Screened'
import About from '../bio/About'
import Contact from '../bio/Contact'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: 'white',
  //   backgroundColor: '#188DA5'
  // },
}))


export default function Projects() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <Nalu />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Frogger />    
    </Grid>
    <Grid item xs={12} sm={6}>
    <Screened />
    </Grid>
    <Grid item xs={12}>
      <Box>SKILLS</Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <About />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Contact />
    </Grid>
  </Grid>
  </div>

  )
}

