/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
    return (
        <nav className='flex justify-between items-center px-10 py-5 bg-blue-200 h-20'>
            <div className="logo">
                <h3 className='text-blue-500 font-bold text-3xl'>React API</h3>
            </div>
            <div className="flex ">
                {
                    isAuthenticated && 
                    <div className='flex flex-row justify-between items-center bg-red-50 rounded-full px-3 py-2'>
                        <img className='w-10 rounded-full' src={user.picture} alt="user-image" />
                        <p className='ms-3'>{user.name}</p>
                    </div> 
                }
                {
                    isAuthenticated ? 
                    <button className='bg-blue-500 ms-2 px-4 py-2 rounded-md text-white' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button>
                    :
                    <button className='bg-blue-500 ms-2 px-4 py-2 rounded-md text-white' onClick={() => loginWithRedirect()}>
                        Log In
                    </button>
                }
                
                
            </div>
        </nav>
    );
};

export default Header;