import React from 'react';
import links from '../assets/data/links.json';

export const Footer = () => {
    const linksJSX = links.map((links) => {
        return (
            <li key = { links.id } >
                { links.message }
            </li>
        );
    });

    return (
        <section className = 'footer'>
            <ul>
                {linksJSX}
            </ul>
            <span>© {(new Date().getFullYear())} INSTAGRAM FROM FACEBOOK</span>
        </section>
    );
};
