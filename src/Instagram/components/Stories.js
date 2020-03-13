import React from 'react';
import stories from '../assets/data/stories.json';

export const Stories = () => {

    const Story = (props) => {
        return props.message ? (
            <div className = 'story'>
                <div>
                    <img src = { props.src } />
                </div>
                <span>{props.message}</span>
            </div>
        ) : null;
    };

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
