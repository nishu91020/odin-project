import React, { Component } from 'react';
import { TextField, Button, Card, Typography, Table, TableCell, TableContainer, TableRow, TableHead, Paper, TableBody } from '@material-ui/core';
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
    },
    largewid: {
        width: '18vw',
        marginTop: '0.5vw',
        marginRight: '0.5vw'
    }
});
class EducationalDetailsForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            submitted: false,
            year1: '',
            institution1: '',
            course1: '',
            percentage1: '',
            year2: '',
            institution2: '',
            course2: '',
            percentage2: '',
            year3: '',
            institution3: '',
            course3: '',
            percentage3: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        this.setState({ submitted: !this.state.submitted });
    }

    render () {
        const { submitted, year1, institution1, course1, percentage1, year2, institution2, course2, percentage2, year3, institution3, course3, percentage3 } = this.state;
        const { classes } = this.props;
        if (!submitted) {
            return (
                <Card className={classes.form}>
                    <h3>Educational details</h3>
                    <div className={classes.eachFeildContainer}>
                        <TextField
                            className={classes.standardBasic}
                            label="Year"
                            onChange={e => this.setState({ year1: e.target.value })}
                            value={year1}
                            type="year"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            label="Institution"
                            className={classes.largewid}
                            onChange={e => this.setState({ institution1: e.target.value })}
                            value={institution1}
                            type="institution"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            className={classes.largewid}
                            label="Course"
                            onChange={e => this.setState({ course1: e.target.value })}
                            value={course1}
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            label="Percentage"
                            onChange={e => this.setState({ percentage1: e.target.value })}
                            value={percentage1}
                            type="number"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.eachFeildContainer}>
                        <TextField
                            className={classes.standardBasic}
                            label="Year"
                            onChange={e => this.setState({ year2: e.target.value })}
                            value={year2}
                            type="year"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            label="Institution"
                            className={classes.largewid}
                            onChange={e => this.setState({ institution2: e.target.value })}
                            value={institution2}
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            className={classes.largewid}
                            label="Course"
                            onChange={e => this.setState({ course2: e.target.value })}
                            value={course2}
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            label="Percentage"
                            onChange={e => this.setState({ percentage2: e.target.value })}
                            value={percentage2}
                            type="number"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.eachFeildContainer}>
                        <TextField
                            className={classes.standardBasic}
                            label="Year"
                            onChange={e => this.setState({ year3: e.target.value })}
                            value={year3}
                            type="year"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            label="Institution"
                            className={classes.largewid}
                            onChange={e => this.setState({ institution3: e.target.value })}
                            value={institution3}
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            label="Course"
                            className={classes.largewid}
                            onChange={e => this.setState({ course3: e.target.value })}
                            value={course3}
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            label="Percentage"
                            onChange={e => this.setState({ percentage3: e.target.value })}
                            value={percentage3}
                            type="number"
                            variant="outlined"
                        />
                    </div>

                    <Button color="primary" variant="contained" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Card>
            );
        }
        else {
            const rows = [
                { year: year1, ins: institution1, cou: course1, per: percentage1 },
                { year: year2, ins: institution2, cou: course2, per: percentage2 },
                { year: year3, ins: institution3, cou: course3, per: percentage3 }
            ];
            return (
                <Card className={classes.form}>
                    <h2>Educational details</h2>
                    <TableContainer component={Paper} style={{ width: '60vw' }} elevation={4}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Year</TableCell>
                                    <TableCell>Institute</TableCell>
                                    <TableCell>Course</TableCell>
                                    <TableCell>Percentage</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.year}>
                                        <TableCell>{row.year}</TableCell>
                                        <TableCell>{row.ins}</TableCell>
                                        <TableCell>{row.cou}</TableCell>
                                        <TableCell>{row.per}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button onClick={this.handleSubmit} style={{ marginTop: '1vw' }} color="primary" variant="contained">
                        Edit
                    </Button>
                </Card>
            );
        }
    }
}

export default withStyles(styles)(EducationalDetailsForm);
