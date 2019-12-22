document.getElementById("issueInputForm").addEventListener("submit", saveIssue);
function saveIssue(e) {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issuesSeverity = document.getElementById("issueSeverityInput").value;
  var issueAssignedTo = document.getElementById("issueAssignedToInput").value;
  var issueId = chance.guid();
  var issueStatus = "Open";

  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issuesSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  };

  if (localStorage.getItem("issues") == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem("issues"));
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  document.getElementById("issueInputForm").reset();

  fetchIssues();

  e.preventDefault();
}

function setStatusClosed() {
  var issues = JSON.parse(localStorage.getItem("issues"));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id) {
      issues[i].status = "closed";
    }
  }
  localStorage.setItem("issues", JSON.stringify(issues));
  fetchIssues();
}

function deleteIssue(Id) {
  var issues = JSON.parse(localStorage.getItem("issues"));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id) {
      issues.splice(i, 1);
    }
  }
  localStorage.setItem("issues", JSON.stringify(issues));
  fetchIssues();
}

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem("issues"));
  var issuesList = document.getElementById("issuesList");

  issuesList.innerHTML = "";

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innerHTML +=
      '<div class="well">' +
      "<h6> Issue ID:</h6>" +
      id +
      "</h6>" +
      '<p><span class="label label-info">' +
      status +
      "</span></p>" +
      "<h3>" +
      desc +
      "</h3>" +
      '<p><span class="glyphicon glyphicon-time">' +
      severity +
      "</span></p>" +
      '<p><span class="glyphicon glyphicon-user">' +
      assignedTo +
      "</span></p>" +
      '<a href="#" onclick="setStatusClosed(\'' +
      id +
      '\')" class="btn btn-warning">Close</a>' +
      '<a href="#" class="btn btn-warning" onclick="deleteIssue(\'' +
      id +
      "')\">Delete</a>" +
      "</div>";
  }
}
