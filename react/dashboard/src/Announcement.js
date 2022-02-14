import React from 'react';
import { Card } from '@mui/material';
function Announcement () {
    return (
        <div>
            <h2>Announcement</h2>
            <Card style={{ padding: '4%' }}>
                <h4>Heading</h4>
                <p style={{ color: '#8c92ac', paddingBottom: '2%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
                <hr />
                <h4>Heading</h4>
                <p style={{ color: '#8c92ac', paddingBottom: '2%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
                <hr />
                <h4>Heading</h4>

                <p style={{ color: '#8c92ac', paddingBottom: '2%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
            </Card>
        </div>
    );
}

export default Announcement;
