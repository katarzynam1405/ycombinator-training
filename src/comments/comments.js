var moment = require('moment');

export default function createComment(news, comments) {
    // console.log(news, comments, 'news = > comments');
    const commentListUl = document.createElement('ul');
    commentListUl.classList.add('comments', 'hidden');
    
    let i;
    const max = comments.length;
    for(i = 0; i<max; i++){
        
        let commentsTime = moment(comments[i].created_at_i).toString();
        let commentsHTML =
            `<div class="comment--info"><p class="author">author:${comments[i].author}</p><p class="time">${commentsTime}</p></div>
            <p class="comment--content"></p>${comments[i].comment_text}</p>`;
        const commentLi = document.createElement('li');
        commentLi.innerHTML = commentsHTML;
        commentListUl.appendChild(commentLi);
    }  
    news.appendChild(commentListUl);      

     news.addEventListener('click', ()=>{
            commentListUl.classList.toggle('hidden');
    })
}