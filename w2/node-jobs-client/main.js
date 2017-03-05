$(function() {
  getAllJobs()
    .done(jobs => buildJobsTable(jobs))
    .fail(err => console.log(err));
});


$('body').on('click', '.delete-job', function(){
  // TODO: add confirm; if no more jobs, display message
  let id = $(this).data('id');
  $(this).parents('tr').remove(); // remove the row from the table
  deleteJob(id) // make DELETE request to api
    .done(data => console.log(data))
    .fail(err => console.log(err));
});

$('.modal').on('submit', 'form', function(e){
  e.preventDefault();
  let dataString = $('form').serialize();

  addJob(dataString)
    .then(() => {
      $('form').find("input, textarea").val("");
      $('#contacted').prop('checked', false);
      $('tbody').html('');
    })
    .then(getAllJobs)
    .then(buildJobsTable)
    .then(() => $('#myModal').modal('toggle'))
    .catch(err => console.log(err));
});

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
