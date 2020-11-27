import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Collapse } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  text: {
    marginBottom: '20px',
    marginLeft: '33px',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: '27px',
    }
  }

}))

export default function Home() {
  const classes = useStyles()
  
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])


  return (
    <Collapse
          in={checked}
          {...(checked ? { timeout: 1500 } : {})}
          collapsedHeight={0}>
          <div id='a'>
            <Typography variant='subtitle2' className={classes.text}>Software Engineer</Typography>
          </div>
        </Collapse>
  )


}