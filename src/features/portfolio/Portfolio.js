import React, {Component} from 'react';
import ProjectList from './components/ProjectList';

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div id='portfolio'>
        <ProjectList />
      </div>

    );
  }
}

export default Portfolio
