import React from 'react'
import './Trainers.css'

function Trainers() {
  return (
    <>
    <div className="trainersWrapper">
        <div className="trainerHeader">
            <h1 className='trainerHeader'>Meet Our Coaches</h1>
        </div>
        <div className="trainersItems">
            <div className="trainers">
                <div className="trainerProfile">
                    <img className='trainerImg' src="https://images.unsplash.com/photo-1636373590511-e4c18b2d6167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" />
                    <h3 className='trainerName'>Vadim</h3>
                    <h3 className='subheader'>Men's Nutrition Expert</h3>
                </div>
                <div className="trainerProfile">
                    <img className='trainerImg' src="https://images.unsplash.com/photo-1642218838424-f2e495d26f29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" />
                    <h3 className='trainerName'>Bryce</h3>
                    <h3 className='subheader'>Natural Bodybuilder</h3>
                </div>
                <div className="trainerProfile">
                    <img className='trainerImg' src="https://images.unsplash.com/photo-1627311228334-7e36313cf92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" />
                    <h3 className='trainerName'>John</h3>
                    <h3 className='subheader'>Personal Trainer</h3>
                </div>
            </div>
            <div className="bottom__cta">
              <h2>Get In Touch</h2>
            <h3 className="cta__button">SEE OUR PROGRAMS</h3>
          </div>
        </div>
    </div>
    </>
  )
}

export default Trainers