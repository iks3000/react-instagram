import React from 'react';
import Profile from './Profile';
import Stories from './Stories';
import Images from './Images';

export const Content = () => {
    return (
        <div className = 'content' >
            <Profile />
            <Stories />
            <Images />
        </div>
    );
};
