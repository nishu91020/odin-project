import React from 'react';
import { Button } from '@mui/material';
function BtnGroup () {
    return (
        <div>
            <Button variant="contained" size="small" style={{ margin: '1%' }}>
                New
            </Button>
            <Button variant="contained" size="small" style={{ margin: '1%' }}>
                Upload
            </Button>
            <Button variant="contained" size="small" style={{ margin: '1%' }}>
                Share
            </Button>
        </div>
    );
}

export default BtnGroup;
