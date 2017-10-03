var moment = require('moment');

export default function createJobs(jobs){
    const jobsList = document.querySelector('ul.jobs');
    const jobsTime = moment(jobs.time).toString();
    
    const jobsHTML =
        `<h4>${jobs.title}</h4><p><a href="${jobs.url}">(${jobs.url})</a></p>
        <div class="jobs__post-info"><p class="time">${jobsTime}</p></div>`;

    const jobsElement = document.createElement('li');
    jobsElement.innerHTML = jobsHTML;
    jobsList.appendChild(jobsElement);
}