import React from 'react'
import Project from './Project';

const ProjectList = () => {

  const eachProject = (p,i) => {
    return (
      <Project  key={i}
                id={p.id}
                index={i}
                project={p}>
      </Project>
    )
  }

  //  {this.props.projects.map(this.eachProject)}
  return (
    <div className='portfolio_projects'>
    </div>
  )

}

export default ProjectList
