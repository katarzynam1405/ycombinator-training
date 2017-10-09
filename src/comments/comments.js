var moment = require('moment');

export default function createComment(comments){
    console.log(comments[0])
    const commentsList = document.querySelector('.comments-list');
    
    for(var i = 0, max = comments.length; i<max; i++){
        let commentsTime = moment(comments[i].created_at_i).toString();
        let commentsHTML =
            `<div class="comment--info"><p class="author">author:${comments[i].author}</p><p class="time">${commentsTime}</p></div>
            <p class="comment--content"></p>${comments[i].comment_text}</p>`;
        const comment = document.createElement('li');
        comment.innerHTML = commentsHTML;
       
        commentsList.appendChild(comment);     
    }        
}