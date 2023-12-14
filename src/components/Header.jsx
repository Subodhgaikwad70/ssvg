import React from 'react'

const Header = () => {
    return (
        <>
            <section className="home">
                <div className="intro-text-container" style={{ visibility: 'visible', opacity: 0.91, transform: 'translateY(-13.5px)' }}>
                    <div className="intro-text">
                        <h1><span>Tune in Together.</span></h1>
                        <p><span>Music is more than simply pressing play. Welcome to Resso, a new music app that lets you express yourself and connect, through the tracks you love and the ones you're about to discover.</span></p>
                        <div className="button-group">
                            <button className="download-button"><span>Explore</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header