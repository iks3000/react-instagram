
import React from 'react';
import avatar from '../assets/images/nasa.jpg';

export const Profile = () => {
    return (
        <div className = 'profile'>
            <img
                className = 'avatar'
                src = { avatar }
            />
            <div className = 'main'>
                <span className = 'nickname'>nasa</span>
                <div className = 'stats'>
                    <div>
                        <span>2.616</span>&nbsp;posts
                    </div>
                    <div>
                        <span>46.6</span>&nbsp;folowers
                    </div>
                    <div>
                        <span>91</span>&nbsp;folowing
                    </div>
                </div>
                <span className = 'name'>NASA</span>
                <p>
                    Explore the universe and
                    discover our home planet
                    with the official NASA Instagram account
                </p>
            </div>
        </div>
    );
};

export default Profile;
