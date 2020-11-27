import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, Box, Collapse, IconButton, Menu, MenuItem } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link as Scroll } from 'react-scroll'



const useStyles = makeStyles((theme) =>  ({
  typography: {
    flex: 1,
  }, 
  buttonTitle: {
    color: 'white',
    fontSize: '25px'
  },
  buttonStyle: {
    color: 'white',
    fontSize: '12px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flex: 1,
  }
 }))

export default function Navbar() {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <AppBar 
    position='static'
    style={{
      boxShadow: 'none',
      background: 'transparent',
    }}>
      <Toolbar>
        <Typography className={classes.typography}>
          <Button className={classes.buttonTitle}>Dan Price</Button>
        </Typography>
        <div>
          {isMobile ? (
          <>
            <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}>
              <Scroll to='projects' smooth={true}>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
              </Scroll>
              <Scroll to='about' smooth={true}>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Scroll>
              <Scroll to='contact' smooth={true}>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Scroll>
            </Menu>
          </>
          ) : (
            <>
          <Scroll to='projects' smooth={true}>
            <Button className={classes.buttonStyle}>Projects</Button>
          </Scroll>
          <Scroll to='about' smooth={true}>
            <Button className={classes.buttonStyle}>About</Button>
          </Scroll>
          <Scroll to='contact' smooth={true}>
            <Button className={classes.buttonStyle}>Contact</Button>
          </Scroll>
        </>    
          )        
        }
        </div>
      </Toolbar>
    </AppBar>
  )
}

