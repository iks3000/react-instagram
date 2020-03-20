
import React from 'react';
import images from '../assets/data/images.json';

export const Images = () => {
    const imagesJSX = images.map((image) => {
        return (
            <img
                key = { image.id }
                src = { image.src }
            />
        );
    });

    return (
        <div className = 'images'>
            {imagesJSX}
        </div>
    );
};

export default Images;
