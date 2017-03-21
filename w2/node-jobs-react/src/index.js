import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';
import NewJobForm from './components/NewJobForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      jobs: [],
      showForm: false,
    }
  }

  componentWillMount(){
    this.getJobs()
  }

  addJob(data) {
    axios.post('http://localhost:8080/', data)
      .then(() => {
        this.getJobs();
      });
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

  toggleShowForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Node Jobs</h1>
        <button className="btn btn-primary" onClick={() => this.toggleShowForm()}>{ this.state.showForm ? 'Cancel' : 'Add Job' }</button>

        { this.state.showForm && // TODO: Refactor this to use React Router
          <NewJobForm
            addJob={this.addJob.bind(this)}
            toggleShowForm={this.toggleShowForm.bind(this)} />
        }
        { !this.state.showForm &&
          <JobList
            jobs={ this.state.jobs }
            toggleShowForm={this.toggleShowForm.bind(this)} />
        }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
