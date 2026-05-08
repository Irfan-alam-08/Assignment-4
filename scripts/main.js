let totalJobs = document.getElementById("totalJobs");
let interviewed = document.getElementById("totalInterview");
let rejected = document.getElementById("totalRejected");
let availableJobs = document.getElementById("availableJobs");
let currentFilter = "all";

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allJobsSection = document.getElementById("jobCardContainer");

function calculateCount() {

    const jobCards = document.querySelectorAll(".job-card");
    const interviewCount =
        document.querySelectorAll('[data-status="interview"]').length;

    const rejectedCount =
        document.querySelectorAll('[data-status="rejected"]').length;

    totalJobs.innerText = jobCards.length;
    interviewed.innerText = interviewCount;
    rejected.innerText = rejectedCount;
    availableJobs.innerText = jobCards.length + " Jobs";
}
calculateCount();