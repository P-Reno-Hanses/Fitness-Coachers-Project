import React, { useState, useEffect } from 'react'
import './Frontpage.css'

function Frontpage() {
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000) // 1000 milliseconds = 1 second
    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <>
      <div className="frontPage__wrapper">
        <div className="frontPage__items">
            </div>
          <div className="frontPage__img--wrapper">
              <div className="countdown-timer">
                <h3>30% Discount</h3>
                <h3 className='timer'> <span className='white'>Time Left: </span> {Math.floor(timeLeft / 3600)}h {Math.floor((timeLeft % 3600) / 60)}m {timeLeft % 60}s</h3>
              </div>
            <div className="frontPage__image">
              <div className="img__header">
                <h1>Your Goals, OUR MISSION</h1>
              </div>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1583969430754-a4ca5030bb21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="bottom__cta">
              <h2>Ready to Take Action?</h2>
            <h3 className="cta__button">SEE OUR PROGRAMS</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frontpage
