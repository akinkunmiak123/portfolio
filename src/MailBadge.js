// MailBadge.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MailBadge = ({ email }) => {
  return (
    <a href={`mailto:${email}`} className="mail-badge">
      <FontAwesomeIcon icon={faEnvelope} size="2x" color="#D44638" />
      <span style={{ marginLeft: '8px' }}>Email</span>
    </a>
  )
}

export default MailBadge
