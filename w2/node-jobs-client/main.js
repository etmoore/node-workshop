$(function() {
  getAllJobs()
    .done(jobs => buildJobsTable(jobs))
    .fail(err => console.log(err));
});

function getAllJobs() {
  return $.getJSON('http://localhost:3000/');
}

function buildJobsTable(jobs){
  jobs.forEach(job => {
    $('tbody').append(
      `<tr>
          <td>${job.id}</td>
          <td>${job.title}</td>
          <td>${job.description}</td>
          <td>${job.company}</td>
          <td>${job.email}</td>
          <td>${job.contacted ? "yes" : "no"}</td>
          <td><a class="btn btn-warning" href="jobs/${job.id}/update">Update</a></td>
          <td><a class="delete-job btn btn-danger" data-id=${job.id}>Delete</a></td>
        </tr>`
    );
  });
}

// add job
function addJob() {}

// update job
function updateJob() {}

// delete job
$('body').on('click', '.delete-job', function(){
  let id = $(this).data('id');
  $(this).parents('tr').remove(); // remove the row from the table
  deleteJob(id) // make DELETE request to api
    .done(data => console.log(data))
    .fail(err => console.log(err));
});

function deleteJob(id) {
  return $.ajax(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });
}
