import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Navbar from './components/common/Navbar'
import Projects from './components/projects/Projects'

const useStyles = makeStyles({
root: {
  backgroundColor: '#ff0127'
}
})

 
export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <Projects />
    </div>
  )
}


