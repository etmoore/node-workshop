import React, { Component } from 'react';

class NewJobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      company: '',
      email: '',
      contacted: false,
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  createNewJob(e){
    e.preventDefault();
    const jobData = this.state;
    this.props.addJob(jobData);
    this.props.toggleShowForm();
  }

  render() {
    return (
      <form onSubmit={ (e) => this.createNewJob(e) }>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" className="form-control" id="title" value={this.state.title} onChange={this.handleInputChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" name="description" rows="3" id="description" value={this.state.description} onChange={this.handleInputChange.bind(this)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" className="form-control" id="company" value={this.state.company} onChange={this.handleInputChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" id="email" value={this.state.email} onChange={this.handleInputChange.bind(this)}/>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" name="contacted" checked={this.state.contacted} onChange={this.handleInputChange.bind(this)} /> Contacted?
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}

export default NewJobForm;
