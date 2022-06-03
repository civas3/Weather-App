import React from 'react'

const Splash = () => {
    return (
    <div className='splash-hero'>
        <div className='splash-container'>
            <h1 className='splash-welcome'>Welcome to 4°Cast</h1>
            <div className='splash-options'>
            <a href='/forecast'className='splash-button'>Weather Search</a>
            <a href='/about' className='splash-button'>About</a>
            </div>         
        </div>
    </div>
    )
}

export default Splash