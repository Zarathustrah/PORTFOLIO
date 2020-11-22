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

const Contact = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia
      className={classes.media}
      alt='Breaking waves on beach'
      image='/images/Contact.jpg'
      title=''
      />
    </Card>
  )


}

export default Contact