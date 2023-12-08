// LinkedInBadge.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LinkedInBadge = ({ profileLink, username }) => {
  return (
    <a
      href={profileLink}
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-badge"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
      <span style={{ marginLeft: '8px' }}>{username}</span>
    </a>
  )
}

export default LinkedInBadge
