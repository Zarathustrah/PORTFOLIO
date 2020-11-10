import './styles/main.scss'
import Navbar from './components/common/Navbar'
import {
  Button, 
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  textSex: {
   color: 'pink'
  }
})
 
export default function App() {
  const classes = useStyles()

  return (
    <>
    <Navbar />
   <h1>Hello World</h1>
   <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Typography 
      className={classes.textSex}
      variant='h1'>
      This is a headline
    </Typography>
   </>
  )
}


