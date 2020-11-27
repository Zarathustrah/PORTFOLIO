import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Collapse } from '@material-ui/core'

const useStyles = makeStyles({

})

export default function Home() {
  
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
            {/* <h3 style={{ 
            marginLeft: '35px',
            marginBottom: '20px',
            }}>
            Software Engineer
            </h3> */}
          </div>
        </Collapse>
  )


}
