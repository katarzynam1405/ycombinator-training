export default function createNews(stories){
    let news= document.querySelector('.main-content ol.news-list').innerHTML=
        `<li><h4>${stories.title}</h4><p><a href="${stories.url}">(${stories.url})</a></p>
        <div class="news-list__post-info"><p class="score">Score: ${stories.score} |</p><p class="author">Author: ${stories.by} |</p><p class="comment"><a href="comments.html">Comments: ${stories.kids.length} </a></p></div>
        </li>`;
}