export default function searchJobs() {
    
    const jobsList = document.querySelector('ul.jobs');
    const input = document.querySelector('#search-input.jobs');
    const jobs = Array.from(jobsList.querySelectorAll('li'));

    input.addEventListener('input', function (event) {
        let inputValue = event.target.value.toLowerCase();

        if (inputValue === null) {
            return;
        } else {
            jobs.forEach((job)=>{
                 job.classList.add('hidden');
            })
        }

        const jobsSerachResults = jobs.filter((job)=>{
            return job.innerHTML.toLowerCase().indexOf(inputValue) !== -1
        });
        
        jobsSerachResults.forEach((jobsSerachResult)=> jobsSerachResult.classList.remove('hidden'));

        document.querySelector('button.button.more-jobs').style.display = "none";
    });
};