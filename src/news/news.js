export default function createNews(stories){
    const newsList = document.querySelector('ol.news-list');
    
    const newsHTML =
        `<h4>${stories.title}</h4><p><a href="${stories.url}">(${stories.url})</a></p>
        <div class="news-list__post-info"><p class="score">Score: ${stories.score} |</p><p class="author">Author: ${stories.by} |</p><p class="comment"><a href="comments.html">Comments: ${stories.kids ? stories.kids.length : 0 } </a></p></div>`;

    const news = document.createElement('li');
    news.innerHTML = newsHTML;
    newsList.appendChild(news);
}