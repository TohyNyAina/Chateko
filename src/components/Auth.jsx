import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signupImage from '../assets/signup.jpg';

const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
};

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Fixed typo in preventDefault()

        const { fullName, username, password, phoneNumber, avatarURL } = form;

        const URL = 'https://gika.onrender.com/auth';

        try {
            const { data: { token, userId, hashedPassword } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
                username, password, fullName, phoneNumber, avatarURL,
            });

            cookies.set('token', token);
            cookies.set('username', username);
            cookies.set('fullName', fullName);
            cookies.set('userId', userId);

            if (isSignup) {
                cookies.set('phoneNumber', phoneNumber);
                cookies.set('avatarURL', avatarURL);
                cookies.set('hashedPassword', hashedPassword);
            }

            window.location.reload();
        } catch (error) {
            // Handle error here
            console.error('Authentication error:', error);
        }
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignup ? 'Hisoratra anarana' : 'Hiditra'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="fullName">Anarana Feno</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="username">Anaran'ny mpampiasa</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="phoneNumber">Laharan' ny finday</label>
                                <input
                                    name="phoneNumber"
                                    type="number"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {/* {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="avatarURL">Rohy ahitana ny sarinao</label>
                                <input
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )} */}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="password">Teny fanalahidy</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="confirmPassword">Hamarino ny teny fanalahidy</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignup ? 'Hisoratra anarana' : 'Hiditra'}</button>
                        </div>
                    </form>
                    <div className='auth__form-container_fields-account'>
                        <p>
                            {isSignup
                                ? "Efa manana kaonty?"
                                : "Tsy mbola manana kaonty?"
                            }
                            <span onClick={switchMode}>
                                {isSignup ? 'Hiditra' : 'Hisoratra anarana'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={signupImage} alt="sign up" />
            </div>
        </div>
    );
};

export default Auth;
