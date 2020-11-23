import React from 'react'
import { Card, CardMedia, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  card: {
    maxWidth: '100vw',
  },
  media: {
    height: '300px',
    backgroundPosition: 'center', 
    opacity: '1',
    '&:hover': {
      opacity: '0',
    }
  },
  wrapper: {
    backgroundColor: '#1f26ff',
  },
  projectInfo: {
    opacity: '0',
    '&:hover': {
      opacity: '1',
    }
  }
    
}) 

const Nalu = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Box className={classes.wrapper}>
        <CardMedia
        className={classes.media}
        alt='Breaking waves on beach'
        image='/images/Nalu.jpg'
        title=''
        >
          <Box className={classes.projectInfo}>
            Hello
          </Box>
        </CardMedia>
      </Box>
    </Card>
  )


}

export default Nalu