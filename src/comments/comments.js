var moment = require('moment');

export default function createComment(comments){
    const commentsList = document.querySelector('.comments-list');
    let i;
    const max = comments.length;
    for(i = 0; i<max; i++){
        let commentsTime = moment(comments[i].created_at_i).toString();
        let commentsHTML =
            `<div class="comment--info"><p class="author">author:${comments[i].author}</p><p class="time">${commentsTime}</p></div>
            <p class="comment--content"></p>${comments[i].comment_text}</p>`;
        const comment = document.createElement('li');
        comment.innerHTML = commentsHTML;
       
        commentsList.appendChild(comment);     
    }        
}