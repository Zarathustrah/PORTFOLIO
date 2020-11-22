import React from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  card: {
    maxWidth: '100vw',
  },
  media: {
    height: '300px',
    backgroundPosition: 'center' 
  }

}) 

const About = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia
      className={classes.media}
      alt='Book cover'
      image='/images/About.jpg'
      title=''
      />
    </Card>
  )


}

export default About