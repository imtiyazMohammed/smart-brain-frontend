import React from 'react'
import 'tachyons';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (

            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signOut')} className='f3 link dim black pa3 underline pointer'>Sign Out</p>
            </nav>
        )
    }

    else {
        return (
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signIn')} className='f3 link dim black pa3 underline pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link dim black pa3 underline pointer'>Register</p>
                </nav>
        )
    }
}

export default Navigation