/* eslint react/jsx-filename-extension: "off" */
/* eslint no-console: ["warn", { allow: ["error"] }] */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';
import JobForm from './components/JobForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
    };

    this.getJobs = this.getJobs.bind(this);
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  componentWillMount() {
    this.getJobs();
  }

  getJobs() {
    axios.get('http://localhost:8080/')
      .then((res) => {
        this.setState({
          jobs: res.data,
        });
      })
      .catch(console.error);
  }

  addJob(event, newJobData) {
    axios.post('http://localhost:8080/', newJobData)
      .then(this.getJobs)
      .catch(console.error);
  }

  updateJob(event, jobData, id) {
    axios.put(`http://localhost:8080/${id}`, jobData)
      .then(this.getJobs)
      .catch(console.error);
  }

  deleteJob(id) {
    axios.delete(`http://localhost:8080/${id}`)
      .then(this.getJobs)
      .catch(console.error);
  }

  render() {
    const { jobs } = this.state;
    return (
      <Router>
        <div className="container">
          <h1>Node Jobs</h1>
          <Route
            exact path="/"
            render={() => (
              <JobList
                jobs={jobs}
                deleteJob={this.deleteJob}
              />
            )}
          />
          <Route
            path="/new"
            render={() => <JobForm saveJob={this.addJob} />}
          />
          <Route
            path="/update/:id"
            render={() => (
              <JobForm
                saveJob={this.updateJob}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'), // eslint-disable-line no-undef
);
