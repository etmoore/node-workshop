/* eslint react/jsx-filename-extension: "off" */
/* eslint no-console: ["warn", { allow: ["error"] }] */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';
import JobForm from './components/JobForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      showForm: false,
    };

    this.getJobs = this.getJobs.bind(this);
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
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
    event.preventDefault();
    axios.post('http://localhost:8080/', newJobData)
      .then(() => {
        this.toggleShowForm();
        this.getJobs();
      })
      .catch(console.error);
  }

  deleteJob(id) {
    axios.delete(`http://localhost:8080/${id}`)
      .then(() => this.getJobs())
      .catch(console.error);
  }

  toggleShowForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    const { jobs, showForm } = this.state;
    return (
      <Router>
        <div className="container">
          <h1>Node Jobs</h1>
          <button className="btn btn-primary" onClick={this.toggleShowForm}>
            { showForm ? 'Cancel' : 'Add Job' }
          </button>
          <Route
            exact path="/"
            render={() => (
              <JobList
                jobs={jobs}
                toggleShowForm={this.toggleShowForm}
                deleteJob={this.deleteJob}
              />
            )}
          />
          <Route
            exact path="/new"
            render={() => (
              <JobForm
                addJob={this.addJob}
                toggleShowForm={this.toggleShowForm}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

/*
  render() {
    const { jobs, showForm } = this.state;
    return (
      <div className="container">
        <h1>Node Jobs</h1>
        <button className="btn btn-primary" onClick={this.toggleShowForm}>
          { showForm ? 'Cancel' : 'Add Job' }
        </button>

        {showForm && // TODO: Refactor this to use React Router
          <JobForm
            addJob={this.addJob}
            toggleShowForm={this.toggleShowForm}
          />
        }
        {!showForm &&
          <JobList
            jobs={jobs}
            toggleShowForm={this.toggleShowForm}
            deleteJob={this.deleteJob}
          />
        }
      </div>
    );
  }
}
*/

ReactDOM.render(
  <App />,
  document.getElementById('root'), // eslint-disable-line no-undef
);
