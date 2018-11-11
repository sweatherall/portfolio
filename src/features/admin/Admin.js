import React, {Component} from 'react'

class AdminUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      newProject: {
        name: '',
        type: '',
        images: [], // image object = { order: num, previewImage: boolean }
        tags: [],
        date: { month: '', day: 1, year: 2018 }
      }
    }

    this.uploadProjectImage = this.uploadProjectImage.bind(this)
    this.addProject = this.addProject.bind(this)
    this.removeProject = this.removeProject.bind(this)
    this.editProject = this.editProject.bind(this)
  }

  uploadProjectImage() {
    console.log('uploadProjectImage!');
    console.log(this);
  }

  addProject() {
    console.log("Add Project");
  }

  removeProject() {
    console.log("remove Project");
  }

  editProject() {
    console.log("edit Project");
  }

  render () {
    return (

      // render existing list of projects
      // ability to remove a project
      // ability to edit a project

      // creating a new project preview
      // allow for multiple images
      <div className='admin_upload_container'>
        <p> creation station </p>
        <input className='project_name_input'/>
        <input className='project_description_input'/>

        <input className='project_img_upload'/>

        <button onClick={this.addProject} id="add_project_btn"> Add Project </button>
      </div>
    )
  }
}

export default AdminUpload
