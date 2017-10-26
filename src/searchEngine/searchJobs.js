export default function searchJobs() {
    
    const jobsList = document.querySelector('ul.jobs');
    const input = document.querySelector('#search-input.jobs');
    const jobs = Array.from(jobsList.querySelectorAll('li'));

    const paginationList = document.querySelector('.pagination');
    const serchedPrePage = 5;

    input.addEventListener('input', function (event) {
        let inputValue = event.target.value.toLowerCase();
        paginationList.innerHTML = "";

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
        
        document.querySelector('button.button.more-jobs').style.display = "none";

        paginationList.classList.remove('hidden');

        for(let i = 0; i< (jobsSerachResults.length/serchedPrePage); i++) {
            paginationList.innerHTML += `<span data-value="${i}"> [${i + 1}] </span>`;
        }

        let page = 0;
        const spans = paginationList.querySelectorAll('span');
        for(let i = 0; i <spans.length; i++) {
        spans[i].addEventListener('click', function(event){
            page = parseInt(event.target.dataset.value);
            pagination(page, jobsSerachResults);
        });
    }
});

    function pagination(page, jobsSerachResults) {
        const results = jobsSerachResults.slice((page * serchedPrePage), ((page + 1)*serchedPrePage));
        results.forEach((result) => result.classList.remove('hidden'));
    }
};