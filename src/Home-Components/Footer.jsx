import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer__wrapper">
        <div className="footerHeader">
            <img src="https://mail.google.com/mail/u/1?ui=2&ik=4f2327e1dc&attid=0.1&permmsgid=msg-a:r250852269851286060&th=1857899460c83c41&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8gy_oDeK6m-exY5nZogLZMcXU1aVvEsPI22KsARzdVU7NaRY_Xjgwl72i-wvR955aKAwK6RH2Krt9ffpFVROPY3AN3sBR7qUg-aqniF2T2IpnT1boqBtQiLs0&disp=emb&realattid=ii_lcghfq7p0" alt="" className="footerImg" />
        </div>
        <div className="footerLinks">
            <p className='footerLink'>Programs</p>
            <p className='footerLink'>About</p>
            <p className='footerLink'>Contact</p>
            <p className='footerLink'>Policies</p>
        </div>
        <footer>Copyright © Stronghorn Fitness Coaches 2023</footer>
    </div>
    </>
  )
}

export default Footer