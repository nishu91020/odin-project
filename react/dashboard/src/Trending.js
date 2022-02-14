import { Card } from '@mui/material';
import React from 'react';
import User from './User';

function Trending () {
    return (
        <div>
            <h2>Trending</h2>
            <Card style={{ padding: '2%' }}>
                <User />
                <hr />
                <User />
                <hr />
                <User />
            </Card>
        </div>
    );
}

export default Trending;
