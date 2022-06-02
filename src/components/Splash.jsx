import React from 'react'

const Splash = () => {
    return (
    <div className='splash-hero'>
        <div className='splash-container'>
            <h1 className='splash-welcome'>Welcome to 4°Cast</h1>
            <ul className='splash-options'>
                <li><a href='/forecast'className='splash-search-tool'>Weather Search</a></li>
                <li><a href='/about' className='splash-about'>About</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Splash