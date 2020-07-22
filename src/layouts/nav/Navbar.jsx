import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, makeStyles, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from '../../assets/img/logo-alt.png'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    offset: theme.mixins.toolbar,
    logo_img: {
        width: '170px',
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        }
    }
}))

const Navbar = ({accionAbrir}) => {

    const classes = useStyles()

    return(
        <div>
            <AppBar 
                className={classes.appBar}
                color="primary" 
                aria-label="menu"
            >
                <Toolbar>

                    <IconButton 
                        color="inherit"
                        className={classes.menuButton}
                        onClick={()=>{accionAbrir()}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Link to="/">
                        <img className={classes.logo_img} src={Logo} alt={'logo'}/>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar