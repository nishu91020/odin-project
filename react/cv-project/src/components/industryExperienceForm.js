import React, { Component } from 'react';
import { TextField, Card, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    form: {
        padding: '1vw',
        width: '70vw',
        borderRadius: '1vw',
        textAlign: 'left',
        margin: '1vw'
    },
    eachFeildContainer: {
        paddingBottom: '1vw'
    },
    standardBasic: {
        margin: '0.5vw'
    }
});
class IndustryExperienceForm extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Card className={classes.form}>
                <h3>Educational details</h3>
                <div className={classes.eachFeildContainer}>
                    <TextField className={classes.standardBasic} label="Year" type="year" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Organization" type="text" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Position" type="email" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Responsibility" type="text" multiline rows={3} variant="outlined" />
                </div>
                <div className={classes.eachFeildContainer}>
                    <TextField className={classes.standardBasic} label="Year" type="year" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Organization" type="text" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Position" type="email" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Responsibility" type="text" multiline rows={3} variant="outlined" />
                </div>
                <div className={classes.eachFeildContainer}>
                    <TextField className={classes.standardBasic} label="Year" type="year" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Organization" type="text" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Position" type="email" variant="outlined" />
                    <TextField className={classes.standardBasic} label="Responsibility" type="text" multiline rows={3} variant="outlined" />
                </div>

                <Button color="primary" variant="contained">
                    Submit
                </Button>
            </Card>
        );
    }
}

export default withStyles(styles)(IndustryExperienceForm);
