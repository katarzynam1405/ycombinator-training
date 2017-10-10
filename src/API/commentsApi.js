export default function getCommentsApi(objectID){
    console.log(objectID);
    return new Promise((resolve, reject)=>{
        resolve(
            fetch(`http://hn.algolia.com/api/v1/search?tags=comment,story_${objectID}&hitsPerPage=100`)
            .then((response)=>{
             return response.json();
            })
            .then(function(comment){
                console.log(comment.hits, 'z api')
                return comment.hits; 
            }))
    })}