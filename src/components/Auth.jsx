import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import singinImage from '../assets/signup.jpg';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = () => {}

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={() => {}}>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="fullName">Full Name</label>
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
                                <label htmlFor="username">Username</label>
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
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input 
                                    name="phoneNumber" 
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}   
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="avatarURLr">Avatar URL</label>
                                <input 
                                    name="avatarURL" 
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="password">Password</label>
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
                                <label htmlFor="password">Confirm Password</label>
                                <input 
                                    name="confirmPassword" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}        
                    </form>
                    <div className='auth__form-container_fields-account'>
                            <p>
                                {isSignup
                                ? "Already have an account?"
                                : "Don' t hanve an account?" 
                                }
                                <span onClick={switchMode}>
                                {isSignup ? 'Sign In' : 'Sign Up'}
                                </span>
                            </p>
                    </div>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={singinImage} alt="sign in" />
            </div>
        </div>
    );
}

export default Auth;
