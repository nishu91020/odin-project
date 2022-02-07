import { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import BasicInfo from './components/basicInfo';
import EducationalDetails from './components/educationalDetails';
import IndustryExperience from './components/industryExperience';
import Header from './components/header';

function App () {
    const [ submitted, setSubmitted ] = useState(false);
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
    const classes = useStyles();
    const handleSubmit = () => {
        setSubmitted(!submitted);
    };
    if (!submitted) {
        return (
            <div className={classes.App}>
                <Header />
                <BasicInfo formSubmitted={submitted} />
                <EducationalDetails formSubmitted={submitted} />
                <IndustryExperience formSubmitted={submitted} />

                <Button className={classes.btn} color="primary" variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        );
    }
    else {
        return (
            <div className={classes.App}>
                <h2>Resume</h2>
                <BasicInfo formSubmitted={submitted} />
                <EducationalDetails formSubmitted={submitted} />
                <IndustryExperience formSubmitted={submitted} />

                <Button className={classes.btn} color="primary" variant="contained" onClick={handleSubmit}>
                    Edit
                </Button>
            </div>
        );
    }
}

export default App;
