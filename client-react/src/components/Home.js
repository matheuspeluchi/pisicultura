import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth, provider } from '../config/database'
import { Component } from 'react';






class Home extends Component {
    
    static defaultProps ={
        
        user: {
            displayName:'No user',
            photoURL: null
        }
    }
    constructor(props){
        
        super(props)
        
        this.state ={
            user: null,
            anchorEl: null,
            setAnchorEl: null
        }
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then(({user}) =>{         
                console.log(user)       
                this.setState(({ user }))
            })
    };

    userMenuClick = event =>{
        console.log(event.currentTarget)
        this.setState({
            setAnchoEl: event.currentTarget
        })
    }
    userMenuClose = () => {
        this.setState({
            setAnchoEl: null
        })
    }

    
    logout = () => {
        this.setState({
            user: null,

        })
    }
    
    
   styles= {
        root: {
            flexGrow: 1,
            
        },
        menuButton: {
            marginRight: 2,
        },
        title: {
            flexGrow: 1,
        },
        avatar: {
            margin: 10,
        },
    };        
  
   
   
    render(){
        const  classes  = this.styles
        const {state} = this
        console.log(classes)
        return (
            <div style={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" style={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={classes.title}>
                        News
                    </Typography>
                    {state.user ?
                        <div className="row">
                            <Avatar alt="Remy Sharp" src={state.user.photoURL} style={classes.avatar} />
                            <Button color="inherit"
                                onClick = {this.userMenuClick}
                                aria-controls="user-menu" 
                                aria-haspopup="true"
                            >
                                {state.user.displayName}
                            </Button>
                            <Menu
                                id="user-menu"
                                anchorEl={state.anchorEl}
                                keepMounted
                                open={console.log(Boolean(state.anchorEl))}
                                onClose={this.userMenuClose}
                            >
                                <MenuItem onClick={this.logout}>Logout</MenuItem>
                            </Menu>
                        </div>
                        : 
                        <Button color="inherit"
                            onClick = {this.login}>Login</Button>
                    }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Home
