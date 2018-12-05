import React, {Component} from 'react'

class CreateProject extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      name: '',
      description: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSumbit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render () {
    return (
      <div className='project_form_container'>
        <form className='project_form'>
          <div className='input_field'>
            <input type='text' id='title' onChange={this.handleInputChange}/>
          </div>
          <div className='input_field'>
            <textarea type='text' id='description' onChange={this.handleInputChange}/>
          </div>
          <div className='submit_button_container'>
            <button className='submit_button' onClick={this.handleSumbit}> create </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
