import React from 'react'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '',
    backgroundImage: '/static/images/Nalu.jpg',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))

export default function Nalu() {
  const classes = useStyles()
  return(
    <div className={classes.root}>
    </div> 
  )
}

