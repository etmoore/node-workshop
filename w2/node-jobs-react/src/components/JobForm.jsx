import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.job;
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const { saveJob } = this.props;
    return (
      <div>
        <Link to="/" className="btn btn-primary"> Cancel </Link>
        <form>
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
              />Contacted?
            </label>
          </div>
          <Link
            to="/"
            className="btn btn-default"
            onClick={event => saveJob(event, this.state)}
          >Save Job
          </Link>
        </form>
      </div>
    );
  }
}
JobForm.propTypes = {
  saveJob: React.PropTypes.func.isRequired,
  job: React.PropTypes.shape({
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    company: React.PropTypes.string,
    email: React.PropTypes.string,
    contacted: React.PropTypes.bool,
  }),
};
JobForm.defaultProps = {
  job: {
    title: '',
    description: '',
    company: '',
    email: '',
    contacted: false,
  },
};

export default JobForm;
