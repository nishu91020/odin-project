import React, { Component } from 'react';
import { TextField, Card, Button, TableBody, Table, TableRow, TableHead, TableCell, TableContainer, Paper, Typography } from '@material-ui/core';
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
    textOutput: {
        wordWrap: 'break-word'
    },
    res: {
        width: '25vw',
        marginTop: '0.5vw'
    }
});
class IndustryExperienceForm extends Component {
    constructor (props) {
        super();
        this.state = {
            submitted: false,
            year1: '',
            org1: '',
            pos1: '',
            res1: '',
            year2: '',
            org2: '',
            pos2: '',
            res2: '',
            year3: '',
            org3: '',
            pos3: '',
            res3: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (e) {
        this.setState({ submitted: !this.state.submitted });
    }
    render () {
        const { submitted, year1, org1, pos1, res1, year2, org2, pos2, res2, year3, org3, pos3, res3 } = this.state;
        const { classes } = this.props;
        if (!submitted) {
            return (
                <Card className={classes.form}>
                    <h3> Industry Experience</h3>
                    <div className={classes.eachFeildContainer}>
                        <TextField
                            className={classes.standardBasic}
                            onChange={e => this.setState({ year1: e.target.value })}
                            value={year1}
                            label="Year"
                            type="year"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            onChange={e => this.setState({ org1: e.target.value })}
                            value={org1}
                            label="Organization"
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            onChange={e => this.setState({ pos1: e.target.value })}
                            value={pos1}
                            label="Position"
                            type="email"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            value={res1}
                            onChange={e => this.setState({ res1: e.target.value })}
                            className={classes.res}
                            label="Responsibility"
                            type="text"
                            multiline
                            rows={3}
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.eachFeildContainer}>
                        <TextField
                            className={classes.standardBasic}
                            value={year2}
                            onChange={e => this.setState({ year2: e.target.value })}
                            label="Year"
                            type="year"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            value={org2}
                            onChange={e => this.setState({ org2: e.target.value })}
                            label="Organization"
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            value={pos2}
                            onChange={e => this.setState({ pos2: e.target.value })}
                            label="Position"
                            type="email"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            value={res2}
                            onChange={e => this.setState({ res2: e.target.value })}
                            className={classes.res}
                            label="Responsibility"
                            type="text"
                            multiline
                            rows={3}
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.eachFeildContainer}>
                        <TextField
                            className={classes.standardBasic}
                            value={year3}
                            noWrap
                            onChange={e => this.setState({ year3: e.target.value })}
                            label="Year"
                            type="year"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            value={org3}
                            onChange={e => this.setState({ org3: e.target.value })}
                            label="Organization"
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            value={pos3}
                            onChange={e => this.setState({ pos3: e.target.value })}
                            label="Position"
                            type="email"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.standardBasic}
                            noWrap
                            value={res3}
                            onChange={e => this.setState({ res3: e.target.value })}
                            className={classes.res}
                            label="Responsibility"
                            type="text"
                            multiline
                            rows={3}
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
            const rows = [ { year: year1, org: org1, pos: pos1, res: res1 }, { year: year2, org: org2, pos: pos2, res: res2 }, { year: year3, org: org3, pos: pos3, res: res3 } ];
            return (
                <Card className={classes.form}>
                    <h2>Industry Experience</h2>
                    <TableContainer component={Paper} style={{ width: '60vw' }} elevation={4}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Year</TableCell>
                                    <TableCell>Organization</TableCell>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Responsibility</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.year}>
                                        <TableCell>{row.year}</TableCell>
                                        <TableCell>{row.org}</TableCell>
                                        <TableCell>{row.pos}</TableCell>
                                        <TableCell style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{row.res}</TableCell>
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

export default withStyles(styles)(IndustryExperienceForm);
