import React from 'react';
import stories from '../assets/data/stories.json';

import { Story } from './Story';

export const Stories = () => {
    const storiesJSX = stories.map((story) => {
        return (
            <Story
                key = { story.id }
                message = { story.message }
                src = { story.src }
            />
        );
    });

    return <div className = 'stories'>{storiesJSX}</div>;
};

export default Stories;
