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

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.createNewJob = this.createNewJob.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, description, company, email, contacted } = this.state;
    const { addJob } = this.props;
    return (
      <form onSubmit={event => addJob(event, this.state)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3" id="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            className="form-control"
            id="company"
            value={company}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="contacted">
            <input
              id="contacted"type="checkbox"
              name="contacted"
              checked={contacted}
              onChange={this.handleInputChange}
            /> Contacted?
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}
NewJobForm.propTypes = {
  addJob: React.PropTypes.func.isRequired,
};

export default NewJobForm;
