export default function searchJobs() {
    
    const jobsList = document.querySelector('ul.jobs');
    const input = document.querySelector('#search-input.jobs');
    const jobs = Array.from(jobsList.querySelectorAll('li'));
    console.log('jobs');
    input.addEventListener('input', function (event) {
        let inputValue = event.target.value.toLowerCase();

        if (inputValue === null) {
            return;
        } else {
            for (var i = 0; i < jobs.length; i++) {
                jobs[i].classList.add('hidden');
            }
        }

        for (var i = 0; i < jobs.length; i++) {
            if (jobs[i].innerHTML.toLowerCase().indexOf(inputValue) !== -1) {
                jobs[i].classList.remove('hidden');
            }
        }
        document.querySelector('button.button.more-jobs').style.display = "none";
    });
};