import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import { Box } from '@material-ui/core'
import useWindowPosition from '../../hooks/useWindowPosition'
import Grid from '@material-ui/core/Grid'
import Nalu from './Nalu'
import Frogger from './Frogger'
import Screened from './Screened'
import About from '../bio/About'
import Contact from '../bio/Contact'
import Skills from '../bio/Skills'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}))


export default function Projects() {
  const classes = useStyles()
  const checked = useWindowPosition('a')

  return (
    <div className={classes.root}>
  <Grid container spacing={1}>
    <Grid item xs={12} id='projects'>
      <Nalu />
    </Grid>
    <Grid item sm={6} xs={12}>
      <Frogger />    
    </Grid>
    <Grid item sm={6} xs={12}>
      <Screened />
    </Grid>
    <Grid item xs={12}>
      <Skills checked={checked} />
    </Grid>
    <Grid item sm={6} xs={12} id='about'>
      <About />
    </Grid>
    <Grid item sm={6} xs={12} id='contact'>
      <Contact />
    </Grid>
  </Grid>
  </div>

  )
}

