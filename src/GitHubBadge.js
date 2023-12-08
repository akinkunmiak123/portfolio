// GitHubBadge.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const GitHubBadge = ({ profileLink, username }) => {
  return (
    <a
      href={profileLink}
      target="_blank"
      rel="noopener noreferrer"
      className="github-badge"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" color="#000" />
      <span style={{ marginLeft: '8px' }}>{username}</span>
    </a>
  )
}

export default GitHubBadge
