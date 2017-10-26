export default function getNewsApi(page){
    return new Promise((resolve, reject)=>{
        document.querySelector('button.button.more-news').setAttribute('disabled', 'disabled');
        resolve(
            fetch(`http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=20&page=${page}&format=json`)
            .then((response)=>{
             return response.text()
            })
            .then(function(stories){
                document.querySelector('button.button.more-news').removeAttribute('disabled');
                return stories ? JSON.parse(stories):{}; 
            }))
    })}