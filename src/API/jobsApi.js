export default function getJobsApi(page){
    return new Promise((resolve, reject)=>{
        document.querySelector('button.button.more-jobs').setAttribute('disabled', 'disabled');
        resolve(
            fetch(`http://hn.algolia.com/api/v1/search?tags=job&hitsPerPage=20&page=${page}&format=json`)
            .then((response)=>{
             return response.json();
            })
            .then(jobs =>{
                if(jobs.hits.length != 0) {
                    document.querySelector('button.button.more-jobs').removeAttribute('disabled');
                }
                return jobs.hits;
         })
    )})
}
