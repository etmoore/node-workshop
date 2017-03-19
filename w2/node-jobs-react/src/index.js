import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      <ul>
      {
        this.state.jobs.map((job) => {
          return <li key={ job.id }>{ job.title }</li>
        })
      }
      </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
