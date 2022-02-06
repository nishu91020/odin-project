import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Card, Button, TextField } from '@material-ui/core';

const styles = theme => ({
    form: {
        padding: '1vw',
        width: '70vw',
        borderRadius: '1vw',
        textAlign: 'left',
        margin: '1vw'
    },
    feildContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30vw',
        paddingBottom: '1vw'
    },
    standardBasic: {
        marginBottom: '1vw'
    }
});
class BasicInfoForm extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Card className={classes.form}>
                <h3>Basic Information</h3>
                <div className={classes.feildContainer}>
                    <TextField className={classes.standardBasic} label="Name" type="text" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Email" type="email" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Phone" type="phone" variant="outlined" />
                </div>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </Card>
        );
    }
}

export default withStyles(styles)(BasicInfoForm);
