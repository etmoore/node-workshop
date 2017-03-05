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

function generateId() {
  return jobs.reduce((prev, curr) => {
    return curr.id > prev ? curr.id : prev;
  }, 0) + 1;
}

function hasRequiredFields(jobObj){
  let requiredFields = [
    'title',
    'description',
    'company',
    'email',
    'contacted',
  ];
  for (let i = 0; i < requiredFields.length; i++){
    let field = requiredFields[i];
    if (!Object.hasOwnProperty.call(jobObj, field))
      return false;
  }
  return true;
}

function getAllJobs(){
  return new Promise((resolve, reject) => {
    if (jobs) resolve(jobs);
    else reject('Not Found');
  });
}

function getJob(id){
  return new Promise((resolve, reject) => {
    let job = jobs.filter(job => job.id === id)[0];
    if (job)
      resolve(job);
    else
      reject('Not Found');
  });
}

function updateJob(data, id){
  return new Promise((resolve, reject) => {
    if (!data || !id)
      reject('Unable to complete request');
    if (!hasRequiredFields(data))
      reject('Missing required data');
    data.id = id;
    data.contacted = data.contacted === 'on' ? true : false;
    jobs = jobs.filter(job => job.id !== id);
    jobs.push(data);
    let updatedJob = jobs.filter(job => job.id === id)[0];
    resolve(updatedJob);
  });
}

function createNewJob(newJob){
  return new Promise((resolve, reject) => {
    if (!hasRequiredFields(newJob)) {
      reject('Please make a POST request with the required Job data');
    }
    newJob.contacted = newJob.contacted === 'on' ? true : false;
    newJob.id = generateId();
    jobs.push(newJob);
    resolve(newJob);
  });
}

function deleteJob(id) {
  return new Promise((resolve, reject) => {
    if (jobs.filter(job => job.id === id).length === 0) {
      reject('Job does not exist');
    }
    jobs = jobs.filter(job => job.id !== id);
    resolve({ status: 'Success' });
  });
}

module.exports = {
  getAllJobs,
  createNewJob,
  getJob,
  updateJob,
  deleteJob,
};
