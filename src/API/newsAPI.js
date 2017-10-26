export default function getNewsApi(page){
    return new Promise((resolve, reject)=>{
        document.querySelector('button.button.more-news').setAttribute('disabled', 'disabled');
        resolve(
            fetch(`https://hn.algolia.com/api/v1/search?query=tags=story&hitsPerPage=20&page=${page}&format=json`)
            .then((response)=>{
             return response.text()
            })
            .then(function(stories){
                if(JSON.parse(stories).hits.length != 0) {
                    document.querySelector('button.button.more-news').removeAttribute('disabled');
               }
                return stories ? JSON.parse(stories):{}; 
            }))
    })}