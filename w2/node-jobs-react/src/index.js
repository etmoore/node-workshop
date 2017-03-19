import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      jobs: [],
    }
  }

  componentDidMount(){
    this.getJobs()
  }

  getJobs() {
    axios.get(`http://localhost:8080/`)
      .then((res) => {
        this.setState({
          jobs: res.data,
        })
      })
      .catch((err) => { console.log(err); })
  }

  render() {
    return (
      <div className="container">
      <h1>Node Jobs</h1>
      <JobList jobs={this.state.jobs}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
