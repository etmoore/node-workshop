import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';

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

  addJob(e) {
    e.preventDefault();
    console.log('yeah! you added a job');
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

        { this.state.showForm &&
          <form onSubmit={ (e) => this.addJob(e) }>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="form-control" id="title" defaultValue="job title"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" rows="3" id="description" defaultValue="this is a description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" className="form-control" id="company" defaultValue="job title"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" id="email" defaultValue="email@example.com"/>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="contacted"/> Contacted?
              </label>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
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
