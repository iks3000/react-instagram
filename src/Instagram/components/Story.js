import React from 'react';

export const Story = (props) => props.message ? (
    <div className = 'story'>
        <div>
            <img src = { props.src } />
        </div>
        <span>{props.message}</span>
    </div>
) : null;
