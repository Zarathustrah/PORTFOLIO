import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import projectData from '../../static/projectData'
import Nalu from './Nalu'
// import Frogger from './Frogger'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#188DA5'
  },
}))


export default function Projects() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <Paper 
      className={classes.paper} 
      square>
        <Nalu />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} square>Frogger</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} square>Screened</Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper} square>Skills</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} square>Bio</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} square>Contact</Paper>
    </Grid>
  </Grid>
  </div>

  )
}

