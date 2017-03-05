function getAllJobs() {
  return $.getJSON('http://localhost:3000/');
}

function addJob(dataString) {
  console.log(dataString);
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/',
    datatype: 'json',
    data: dataString,
  })
}

function updateJob() {}

function deleteJob(id) {
  return $.ajax(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });
}
