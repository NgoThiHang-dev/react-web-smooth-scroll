import React from 'react'
import video from '../../assets/videos/video.mp4'
import '../../assets/css/hero-section.css'

export const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-bg">
                <video loop autoPlay muted>
                    <source
                        src={video}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="hero-content">
                <h1>Virtual Banking Made Easy</h1>
                <p>Sign up for a new account today and receive $250 in credit towards your next payment.</p>
                <div className="hero-btn-wrapp">
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}
