import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
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

const Screened = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia
      className={classes.media}
      alt='Various movie stills'
      image='/images/Screened.jpg'
      title=''
      />
    </Card>
  )


}

export default Screened