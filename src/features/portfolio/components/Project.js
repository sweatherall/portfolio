import React, {Component} from 'react'
import Lightbox from '../../lightbox/Lightbox'

class Project extends Component {
  constructor(props) {
    super(props)
    this.focusOnProject = this.focusOnProject.bind(this)

    this.state = {showLightbox: false};
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  
  handleHide() {
    this.setState({showLightbox: false});
  }

  focusOnProject() {
    // when you click on a project_preview
    // open a modal with larger view, more information
    console.log('focus on project!');
    console.log(this);
    this.setState({showLightbox: true});
  }

  render () {

    const lightbox = this.state.showLightbox ? (
      <Lightbox>
        <div className="modal">
          render project details here....
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Lightbox>
    ) : null;

    return (
      <div className='project_preview' onClick={this.focusOnProject}>
        <img alt='project' className='project_preview__img'/>
        <div className='project_preview__description'>
          <p> {this.props.name} </p>
        </div>
        {lightbox}
      </div>
    )
  }
}

export default Project