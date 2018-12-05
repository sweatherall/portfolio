import React, {Component} from 'react'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = (e) => {
    // use the id's to tell the difference between username,password
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
      <div className='auth_form_container'>
        <form className='auth_form'>
          <div className='input_field'>
            <input type='text' id='username' onChange={this.handleInputChange}/>
          </div>
          <div className='input_field'>
            <input type='password' id='password' onChange={this.handleInputChange}/>
          </div>
          <div className='login_button_container'>
            <button className='login_button' onClick={this.handleSumbit}> create </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
