function getAllJobs() {
  return $.getJSON('http://localhost:3000/');
}

function getJob(id) {
  return $.ajax({
    method: 'GET',
    url: `http://localhost:3000/${id}`,
  });
}

function addJob(dataString) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/',
    data: dataString,
  });
}

function updateJob(id, dataString) {
  return $.ajax({
    method: 'PUT',
    url: `http://localhost:3000/${id}`,
    datatype: 'json',
    data: dataString,
  });
}

function deleteJob(id) {
  return $.ajax(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });
}
