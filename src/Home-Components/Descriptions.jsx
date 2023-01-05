import React from 'react'
import './Descriptions.css'

function Descriptions() {
    return (
        <>
            <div className="description__wrapper">
                <h1 className="dwHeader">Common Questions</h1>
                <div className="description__items">
                    <div className="description">
                        <h2 className="descriptionHeader">Who are these programs for?</h2>
                        <p className="descriptionAnswer">This program is primarily oriented towards men ages 16-35 that want to maximise their muscle gains in the gym.</p>
                    </div>
                    <div className="description">
                        <h2 className="descriptionHeader">Why use a fitness program?</h2>
                        <p className="descriptionAnswer">A fitness program can improve physical strength and overall health, reduce stress, and increase self-confidence.</p>
                    </div>
                    <div className="description">
                        <h2 className="descriptionHeader">Does this work for beginners?</h2>
                        <p className="descriptionAnswer">Of course, we have both beginner and intermediate programs. This will work for you no matter your experience level!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descriptions