import React from 'react'
import { Grid } from '@material-ui/core'
import Paper   from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
// import Nalu from './Nalu'
// import Frogger from './Frogger'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(null),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Projects = () => {
  const classes = useStyles

  return (
    <div className={classes.root}>
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>Nalu</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>Frogger</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>Screened</Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>Skills</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>Bio</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>Contact</Paper>
    </Grid>

  </Grid>
  </div>

  )
}

export default Projects