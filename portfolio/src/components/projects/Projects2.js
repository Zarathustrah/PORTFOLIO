import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import projectData from '../../static/projectData'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100vw',
    height: '100vh',
  },
}))


function ImageGridList() {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  

  return (
      <div className={classes.root}>
        <GridList cellHeight={475} className={classes.gridList} cols={12}>
        {projectData.map((tile) => (
          <GridListTile key={tile.image} cols={tile.cols}>
            <img src={tile.image} alt={tile.name} />
            <div>{tile.description}</div>
            <span>{`theme.breakpoints.down('sm') matches: ${matches}`}</span>
          </GridListTile>
        ))}
        </GridList>     
    </div>
  );
}

const theme = createMuiTheme()

export default function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <ImageGridList />
    </ThemeProvider>
  );
}
