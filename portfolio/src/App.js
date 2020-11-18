import React from 'react'
import Navbar from './components/common/Navbar'
// import { makeStyles } from '@material-ui/core/styles';
// import Projects from './components/projects/Projects'
import Projects2 from './components/projects/Projects2'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Nalu.jpg'})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover'
//   }
// }))

 
export default function App() {
  // const classes = useStyles()

  return (
    <>
    <Navbar />
    <Projects2 />
    </>
  )
}


