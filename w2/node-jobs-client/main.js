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

$('#new-job-modal').on('submit', '#new-job-form', function(e){
  e.preventDefault();
  let dataString = $('#new-job-form').serialize();
  console.log("datastring: ", dataString)

  addJob(dataString)
    .then(() => {
      $('form').find("input, textarea").val("");
      $('#job-contacted').prop('checked', false);
      $('tbody').html('');
    })
    .then(getAllJobs)
    .then(buildJobsTable)
    .then(() => $('#new-job-modal').modal('toggle'))
    .catch(console.error);
});

$('body').on('click', '.update-job', function(){
  let id = $(this).data('id');
  getJob(id)
    .then(job => {
      $("#job-id").val(job.id);
      $("#job-title").val(job.title);
      $("#job-description").val(job.description);
      $("#job-company").val(job.company);
      $("#job-email").val(job.email);
      $("#job-contacted").prop('checked', job.contacted);
    })
    .catch(console.error);
});

$('#update-job-modal').on('submit', '#update-job-form', function(e){
  e.preventDefault();

  let id = $("#job-id").val();
  let dataString = $('form').serialize();

  updateJob(id, dataString)
    .then(() => {
      $('form').find("input, textarea").val("");
      $('#job-contacted').prop('checked', false);
      $('tbody').html('');
    })
    .then(getAllJobs)
    .then(buildJobsTable)
    .then(() => $('#update-job-modal').modal('toggle'))
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
          <td><a class="update-job btn btn-warning" data-id=${job.id} data-toggle="modal" data-target="#updateJobModal">Update</a></td>
          <td><a class="delete-job btn btn-danger" data-id=${job.id}>Delete</a></td>
        </tr>`
    );
  });
}
