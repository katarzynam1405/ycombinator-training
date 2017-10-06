export default function getCommentsApi(postId){
    console.log(postId);
    return new Promise((resolve, reject)=>{
        resolve(
            fetch(`http://hn.algolia.com/api/v1/search?tags=comment,story_${postId}`)
            .then((response)=>{
             return response.json();
            })
            .then(function(comment){
                console.log(comment, 'z api')
                return comment; 
            }))
    })}