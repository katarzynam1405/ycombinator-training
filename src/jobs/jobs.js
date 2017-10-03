export default function createJobs(jobs){
    const jobsList = document.querySelector('ul.jobs');
    
    const jobsHTML =
        `<h4>Irure aliquip culpa velit labore quis id amet laboris qui qui adipisicing et dolore quis.</h4><p><a href="#">(smithsonianmag.com)</a></p>
        <div class="jobs__post-info"><p class="time">x hours ago</p></div>`;

    const jobsElement = document.createElement('li');
    jobsElement.innerHTML = jobsHTML;
    jobsList.appendChild(jobsElement);
}