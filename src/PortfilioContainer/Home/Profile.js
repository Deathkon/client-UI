/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/m-philbert-a13776226/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://www.instagram.com/govirtual1/'>
                        <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                        <a href='https://github.com/Deathkon'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Philbert</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Enthusiastic Dev 😎',
                                        1000,
                                        'Full Stack Developer 💻',
                                        1000,
                                        'Java Developer 📱',
                                        1000,
                                        'Cross Platform Dev 🔴',
                                        1000,
                                        'React JS Developer🌐',
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                {" "}
                                I'm a Full Stack Developer with a passion for building beautiful, interactive, and user-friendly applications.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me{" "}
                    </button>
                    <a href='resume.pdf' download='Philbert resume.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
