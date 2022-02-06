import { makeStyles, Button } from '@material-ui/core';
import BasicInfoForm from './components/basicInfoForm';
import EducationalDetailsForm from './components/educationalDetailsForm';
import IndustryExperienceForm from './components/industryExperienceForm';

function App () {
    const useStyles = makeStyles({
        App: {
            padding: '0px',
            margin: '-8px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f2ef',
            fontStyle: 'italic'
        },
        btn: {
            marginBottom: '1vw'
        }
    });
    const classes = useStyles();
    return (
        <div className={classes.App}>
            <h2>Resume</h2>
            <BasicInfoForm />
            <EducationalDetailsForm />
            <IndustryExperienceForm />
            <Button className={classes.btn} color="primary" variant="contained">
                Submit
            </Button>
        </div>
    );
}

export default App;
