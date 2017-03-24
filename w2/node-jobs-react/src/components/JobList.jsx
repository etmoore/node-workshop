import React from 'react';
import { Link } from 'react-router-dom';

const JobList = (props) => {
  const { jobs, deleteJob } = props;
  return (
    <div>
      <Link
        to="/new"
        className="btn btn-primary"
      >Add Job
      </Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Company</th>
            <th>Email</th>
            <th>Contacted?</th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map(job => (
              <tr key={job.id}>
                <td>{ job.id }</td>
                <td>{ job.title }</td>
                <td>{ job.description }</td>
                <td>{ job.company }</td>
                <td>{ job.email }</td>
                <td>{ job.contacted ? 'yes' : 'no' }</td>
                <td>
                  <Link
                    to={`/update/${job.id}`}
                    className="btn btn-default"
                  >Update Job
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteJob(job.id)}
                  >Delete Job
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
JobList.propTypes = {
  jobs: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    company: React.PropTypes.string,
    email: React.PropTypes.string,
    contacted: React.PropTypes.bool,
  })),
  deleteJob: React.PropTypes.func.isRequired,
};
JobList.defaultProps = {
  jobs: [{}],
};

export default JobList;
