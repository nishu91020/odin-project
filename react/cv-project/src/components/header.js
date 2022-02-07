import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
const styles = theme => ({
    header: {
        color: '#fff',
        background: '#00008b',
        opacity: '0.8',
        width: '100vw',
        textAlign: 'left',
        paddingLeft: '3vw',
        paddingTop: '-0.5vw'
    }
});
class Header extends Component {
    render () {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                {' '}
                <h1>Resume</h1>{' '}
            </div>
        );
    }
}

export default withStyles(styles)(Header);
