import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, CssBaseline } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    height: '300px',
    backgroundImage: `url('/images/Frogger.jpg')`,
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
      opacity: '1',
    }
  }

})

export default function Frogger() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <div className={classes.projectInfo}>
        <h1>Frogger</h1>
        <p>Add in description here</p>
      </div>
    </Box>
  )
}












// import React from 'react'
// import { Card, CardMedia, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles({
//   card: {
//     maxWidth: '100vw',
//   },
//   media: {
//     height: '300px',
//     backgroundPosition: 'center' 
//   }

// }) 

// const Frogger = () => {
//   const classes = useStyles()

//   return (
//     <Card className={classes.card}>
//       <CardMedia
//       className={classes.media}
//       alt='Frogger arcade game'
//       image='/images/Frogger.jpg'
//       title=''
//       >One-week solo build of a classic arcade game using vanilla JS and CSS
//       </CardMedia>
//     </Card>
//   )


// }

// export default Frogger