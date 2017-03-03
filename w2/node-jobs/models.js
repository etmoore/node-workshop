let jobs = [
  {
    id: 1,
    title: "chief senior officer",
    description: "play all day",
    company: "Google",
    email: "boss@example.com",
    contacted: true,
  },
  {
    id: 2,
    title: "lead architect",
    description: "work work work",
    company: "Microsoft",
    email: "manager@example.com",
    contacted: false,
  },
  {
    id: 3,
    title: "lowly serf",
    description: "be a gopher",
    company: "Yelp",
    email: "hrrep@example.com",
    contacted: false,
  }
];

function _generateId() {
  return jobs.reduce((prev, curr) => {
    return curr.id > prev ? curr.id : prev;
  }, 0) + 1;
}

function getAllJobs(){
  return jobs;
}

function getJob(id){
  return jobs.filter(job => job.id === id)[0];
}

function updateJob(data, id){
  data.contacted = data.contacted === 'on' ? true : false;
  data.id = id;
  jobs = jobs.filter(job => job.id !== id);
  jobs.push(data);
  return jobs.filter(job => job.id === id);
}

function createNewJob(newJob){
  newJob.contacted = newJob.contacted === 'on' ? true : false;
  newJob.id = _generateId();
  jobs.push(newJob);
  return newJob;
}

module.exports = {
  getAllJobs,
  createNewJob,
  getJob,
  updateJob,
};
