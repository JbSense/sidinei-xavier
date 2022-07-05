import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function ProjectCard (props) {
  const projects = props.projects
  return projects.map(project => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Link to='#' className='Project-card'>
        <h1 className='Project-card__title'>{project.title}</h1>
        <p className='Project-card__summary'>{project.summary}</p>
      </Link>
    )
  })
}

export default ProjectCard
