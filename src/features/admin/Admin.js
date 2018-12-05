import React, {Component} from 'react';
import CreateProject from './components/CreateProject';

class CreationStation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      newProject: {
        name: '',
        description: '',
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
    this.handleChange = this.handleChange.bind(this)
  }

  uploadProjectImage() {
    console.log('uploadProjectImage!');
    console.log(this);
  }

  addProject(e) {
    e.preventDefault();
    console.log("Add Project");
  }

  removeProject() {
    console.log("remove Project");
  }

  editProject() {
    console.log("edit Project");
  }

  handleChange = (e) => {
    e.persist()
    this.setState(prevState => ({
      newProject: {
        ...prevState.newProject,
        [e.target.id]: e.target.value
      }
    }))
    console.log(this.state)
  }

  render () {
    return (

      // render existing list of projects
      // ability to remove a project
      // ability to edit a project

      // creating a new project preview
      <CreateProject/>
    )
  }
}

export default CreationStation
