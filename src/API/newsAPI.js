const fetchJsonp = require('fetch-jsonp');

export default function getNewsApi(page){

    return new Promise((resolve, reject)=>{
        document.querySelector('button.button.more').setAttribute('disabled', 'disabled');
        resolve(
            fetch(`https://hn.algolia.com/api/v1/search?query=tags=story&hitsPerPage=20&page=${page}&format=json`)
            .then((response)=>{
             return response.text()
            })
            .then(function(stories){
                document.querySelector('button.button.more').removeAttribute('disabled');
                return stories ? JSON.parse(stories):{}; 
            }))
    })}
