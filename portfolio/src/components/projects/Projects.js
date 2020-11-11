import React from 'react'
import { Grid } from '@material-ui/core'
import Nalu from './Nalu'

const Projects = () => {
  return (
  <Grid container spacing={2}>
    <Grid item xs={10}>
      <Nalu />
    </Grid>

  </Grid>

  )
}

export default Projects