import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Collapse, Grid } from '@material-ui/core'
import { IconContext } from "react-icons"

import {
  SiHtml5,
  SiCss3,
  SiMaterialUi,
  SiGit,
  SiPython,
  SiPostgresql,
  SiDjango,
  SiMongodb,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiGithub,
  SiYarn,
  SiNpm,
  SiHeroku,
  SiJavascript
} from "react-icons/si"

import { FaExternalLinkSquareAlt } from "react-icons/fa"

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1f26ff'
  },
  wrapper: {
    paddingTop: '5px',
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    color: 'white',
    fontSize: '8px',
    textAlign: 'center',
    margin: '20px',
    marginBottom: '0',
    marginTop: '0'
    // padding: '5px'
    // border: '1px solid',
    // borderRadius: '12.5%'
  },
  text: {
    paddingTop: '7px'
  }
})

export default function Skills({ checked }) {
  const classes = useStyles()

  return (
  <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='center'
        className={classes.wrapper}
        >
        <IconContext.Provider value={{ size: '1.5rem' }}>
          <div className={classes.icon}>
            <SiHtml5 />
            <p className={classes.text}>HTML</p>
          </div>
          <div className={classes.icon}>
            <SiCss3 />
            <p className={classes.text}>CSS</p>
          </div>
          <div className={classes.icon}>
            <SiSass />
            <p className={classes.text}>Sass</p>
          </div>
          <div className={classes.icon}>
            <SiJavascript />
            <p className={classes.text}>JavaScript</p>
          </div>
          <div className={classes.icon}>
            <SiReact />
            <p className={classes.text}>React</p>
          </div>
          <div className={classes.icon}>
            <SiNodeDotJs />
            <p className={classes.text}>NodeJS</p>
          </div>
          <div className={classes.icon}>
            <SiMongodb />
            <p className={classes.text}>MongoDB</p>
          </div>
          <div className={classes.icon}>
            <SiMaterialUi />
            <p className={classes.text}>MaterialUI</p>
          </div>
          <div className={classes.icon}>
            <SiPython />
            <p className={classes.text}>Python</p>
          </div>
          <div className={classes.icon}>
            <SiDjango />
            <p className={classes.text}>Django</p>
          </div>
          <div className={classes.icon}>
            <SiPostgresql />
            <p className={classes.text}>PostgresSQL</p>
          </div>
          <div className={classes.icon}>
            <SiYarn />
            <p className={classes.text}>Yarn</p>
          </div>
          <div className={classes.icon}>
            <SiNpm />
            <p className={classes.text}>NPM</p>
          </div>
          <div className={classes.icon}>
            <SiGit />
            <p className={classes.text}>Git</p>
          </div>
          <div className={classes.icon}>
            <SiGithub />
            <p className={classes.text}>GitHub</p>
          </div>
        </IconContext.Provider>
      </Grid>
  </div>
</Collapse>
  )
}