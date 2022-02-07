import { makeStyles, Button } from '@material-ui/core';
import BasicInfo from './components/basicInfo';
import EducationalDetails from './components/educationalDetails';
import IndustryExperience from './components/industryExperience';

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
            <BasicInfo />
            <EducationalDetails />
            <IndustryExperience />
            <Button className={classes.btn} color="primary" variant="contained">
                Submit
            </Button>
        </div>
    );
}

export default App;
