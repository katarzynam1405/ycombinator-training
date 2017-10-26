export default function sortByDateApi(endDate){
    return new Promise((resolve, reject)=>{
        document.querySelector('#sort-by-date').setAttribute('disabled', 'disabled');
        resolve(
            fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=comment&hitsPerPage=100&numericFilters=created_at_i>${endDate}`)
            .then((response)=>{
             return response.text()
            })
            .then(function(stories){
                document.querySelector('#sort-by-date').removeAttribute('disabled');
                return stories ? JSON.parse(stories):{}; 
            }))
    })}