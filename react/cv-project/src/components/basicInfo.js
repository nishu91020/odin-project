import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Card, Button, TextField, Typography } from '@material-ui/core';

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
    constructor (props) {
        super();
        this.state = {
            submitted: false,
            name: '',
            phone: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
    }
    handleSubmit (event) {
        this.setState({ submitted: true });
    }
    handleEdit (event) {
        this.setState({ submitted: false });
    }
    changeName (event) {
        this.setState({ name: event.target.value });
    }
    changePhone (event) {
        this.setState({ phone: event.target.value });
    }
    changeEmail (event) {
        this.setState({ email: event.target.value });
    }
    render () {
        const { classes } = this.props;
        if (this.state.submitted || this.props.formSubmitted) {
            return (
                <Card className={classes.form}>
                    <h2>Basic Information</h2>
                    <div>
                        <Typography variant="subtitle1">Name - {this.state.name}</Typography>
                        <Typography variant="subtitle1">Email - {this.state.email}</Typography>
                        <Typography variant="subtitle1">Phone - {this.state.phone}</Typography>
                        {!this.props.formSubmitted && (
                            <Button variant="contained" color="primary" onClick={this.handleEdit}>
                                Edit
                            </Button>
                        )}
                    </div>
                </Card>
            );
        }
        else {
            return (
                <Card className={classes.form}>
                    <h2>Basic Information</h2>
                    <div className={classes.feildContainer}>
                        <TextField className={classes.standardBasic} onChange={this.changeName} value={this.state.name} label="Name" type="text" variant="outlined" />
                        <TextField className={classes.standardBasic} onChange={this.changeEmail} value={this.state.email} label="Email" type="email" variant="outlined" />
                        <TextField className={classes.standardBasic} onChange={this.changePhone} value={this.state.phone} label="Phone" type="phone" variant="outlined" />
                    </div>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Card>
            );
        }
    }
}

export default withStyles(styles)(BasicInfoForm);
