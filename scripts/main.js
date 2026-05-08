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

function setActiveButton(activeBtn) {
    const filterButtons = document.querySelectorAll(".tabButton");

    filterButtons.forEach(button => {
        if (button === activeBtn) {
            button.classList.add("bg-gray-700", "text-white");
            button.classList.remove("border-gray-700");
        } else {
            button.classList.remove("bg-gray-700", "text-white");
            button.classList.add("border-gray-700");
        }
    });
}

function filterCards(type) {
    currentFilter = type;

    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach(card => {
        if (type === "all") {
            card.style.display = "block";
        }
        else if (card.dataset.status === type) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    });
    checkEmptyState();
}