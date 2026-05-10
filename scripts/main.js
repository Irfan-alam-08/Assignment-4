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

    // Dynamic Count Text
    if (type === "all") {
        availableJobs.innerText = jobCards.length + " Jobs";
    }
    else if (type === "interview") {
        availableJobs.innerText =
            "Interviewing " +
            document.querySelectorAll('[data-status="interview"]').length +
            " of " + jobCards.length + " Jobs";
    }
    else if (type === "rejected") {
        availableJobs.innerText =
            "Rejected " +
            document.querySelectorAll('[data-status="rejected"]').length +
            " of " + jobCards.length + " Jobs";
    }

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

const interviewButtons = document.querySelectorAll(".interview-btn");
interviewButtons.forEach(button => {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        card.dataset.status = "interview";

        const badge = card.querySelector(".notApp-badge");
        badge.innerText = "Interview";

        badge.classList.remove("badge-outline", "badge-error", "badge-success");
        badge.classList.add("badge-success");

        calculateCount();
        checkEmptyState();
        filterCards(currentFilter);
    });

});

const rejectedButtons = document.querySelectorAll(".rejected-btn");
rejectedButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = button.closest(".job-card");

        card.dataset.status = "rejected";

        const badge = card.querySelector(".notApp-badge");

        badge.innerText = "Rejected";

        badge.classList.remove("badge-outline", "badge-error", "badge-success");
        badge.classList.add("badge-error");

        calculateCount();
        checkEmptyState();
        filterCards(currentFilter);
    });

});

const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = button.closest(".job-card");

        card.style.opacity = "0";
        setTimeout(() => {

            card.remove();
            calculateCount();
            checkEmptyState()

        }, 300);

    });
});

function checkEmptyState() {
    const jobCards = document.querySelectorAll(".job-card");
    let hasVisible = false;

    for (let card of jobCards) {
        if (currentFilter === "all") {
            hasVisible = true;
        }
        else if (card.dataset.status === currentFilter) {
            hasVisible = true;
        }
    }
    if (hasVisible) {
        emptyContainer.style.display = "none";
    } else {
        emptyContainer.style.display = "flex";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    filterCards("all");
    setActiveButton(allFilterBtn);
});