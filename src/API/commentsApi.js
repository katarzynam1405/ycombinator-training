export default function getCommentsApi(objectID){
    return new Promise((resolve, reject)=>{
        resolve(
            fetch(`http://hn.algolia.com/api/v1/search?tags=comment,story_${objectID}&hitsPerPage=20`)
            .then((response)=>{
             return response.json();
            })
            .then(function(comment){
                return comment.hits; 
            }))
    })}