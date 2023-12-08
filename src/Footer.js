// Footer.js
import React from 'react'
import LinkedInBadge from './LinkedInBadge'
import GitHubBadge from './GitHubBadge'
import MailBadge from './MailBadge'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <LinkedInBadge
          profileLink="https://www.linkedin.com/in/akinkunmi-akinnitire-b44b1323a/"
          username="LinkedIn"
        />
      </div>
      <div>
        <GitHubBadge
          profileLink="https://github.com/akinkunmiak123"
          username="GitHub"
        />
      </div>
      <div>
        <MailBadge email="tetisimiak@gmail.com" />
      </div>
    </div>
  )
}

export default Footer
