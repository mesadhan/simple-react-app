import React from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};


const appTopBar = (props) => {

    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        onClick={props.toggleDrawerClicked('leftSideBar', true)}
                        className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">Monster Shop</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );

};

appTopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(appTopBar);
