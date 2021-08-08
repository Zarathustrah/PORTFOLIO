import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Navbar from './components/common/Navbar'
import Home from './components/bio/Home'
import Projects from './components/projects/Projects'

const useStyles = makeStyles({
root: {
  backgroundColor: '#ff0127',
  fontFamily: ['Sigmar One', 'cursive'],
  color: 'white'
}
})

 
export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <Home />
      <Projects />
    </div>
  )
}


