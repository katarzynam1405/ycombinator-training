export default function getJobsApi(page){
    return new Promise((resolve, reject)=>{
        document.querySelector('button.button.more').setAttribute('disabled', 'disabled');
        resolve(
            fetch(`http://hn.algolia.com/api/v1/search?tags=job&hitsPerPage=20&page=${page}&format=json`)
            .then((response)=>{
             return response.json();
            })
            .then(jobs =>{
                document.querySelector('button.button.more').removeAttribute('disabled');
                console.log(jobs);
                return jobs.hits;
         })
    )})
}