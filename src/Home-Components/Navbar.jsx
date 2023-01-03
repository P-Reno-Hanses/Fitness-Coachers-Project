import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar__wrapper'>
        <div className="navBar__items">
            <div className="navBar__logo">
                <img className='navBar__logo' src="https://mail.google.com/mail/u/1?ui=2&ik=4f2327e1dc&attid=0.1&permmsgid=msg-a:r250852269851286060&th=1857899460c83c41&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8gy_oDeK6m-exY5nZogLZMcXU1aVvEsPI22KsARzdVU7NaRY_Xjgwl72i-wvR955aKAwK6RH2Krt9ffpFVROPY3AN3sBR7qUg-aqniF2T2IpnT1boqBtQiLs0&disp=emb&realattid=ii_lcghfq7p0" alt="" />
            </div>
            <div className="navBar__links">
                <div className="navBar__link">
                    <h3 className='navBar__link white'>Programs</h3>
                </div>
                <div className="navBar__link white">
                <h3 className='navBar__link white'>About Us</h3>
                </div>
                <div className="navBar__link white">
                <h3 className='navBar__link white'>Contact</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar