export default function createComment(comments){
    const commentsList = document.querySelector('.comments-list');
    const commentsHTML =
        `<div class="comment--info"><p class="author">author:</p><p class="time">x hours ago</p></div>
         <p class="comment--content"></p>Sieeeeema</p>`;

    const comment = document.createElement('li');

    comment.innerHTML = commentsHTML;
    commentsList.appendChild(comment);
}