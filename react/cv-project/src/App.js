import { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import BasicInfo from './components/basicInfo';
import EducationalDetails from './components/educationalDetails';
import IndustryExperience from './components/industryExperience';
import Header from './components/header';

function App () {
    const [ submitted, setSubmitted ] = useState(false);
    const classes = useStyles();
    const handleSubmit = () => {
        setSubmitted(!submitted);
    };
    return (
        <div className={classes.App}>
            <Header />
            <BasicInfo formSubmitted={submitted} />
            <EducationalDetails formSubmitted={submitted} />
            <IndustryExperience formSubmitted={submitted} />

            <Button className={classes.btn} color="primary" variant="contained" onClick={handleSubmit}>
                {!submitted ? 'Submit' : 'Edit'}
            </Button>
        </div>
    );
}
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
        fontStyle: 'italic',
        overflow: 'hidden'
    },
    btn: {
        marginBottom: '1vw'
    }
});
export default App;
