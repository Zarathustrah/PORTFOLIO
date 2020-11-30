import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '300px',
    background: `url('https://i.ibb.co/NZKsSc3/Contact.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  projectInfo: {
    height: '300px',
    background: '#1f26ff',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    '&:hover': {
      opacity: '0.9',
    },
    transition: '0.4s'
  },
  heading: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '20px',
      marginTop: '30px'
    }

  },
  subheading: {
    margin: '15px',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '12px',
    }
  }

}))

export default function Contact() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <Typography variant='h4' className={classes.heading}>Contact</Typography>
        <Typography variant='subtitle1' className={classes.subheading}>danielparkerprice@gmail.com</Typography>
      </div>
    </Box>
  )
}
