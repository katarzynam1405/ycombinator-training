export default function createNews(stories){
    const newsList = document.querySelector('ol.news-list');
    
    const newsHTML =
        `<h4>${stories.title? stories.title : stories.story_title }</h4><p><a href="${stories.story_url? stories.story_url:stories.url}">(${stories.story_url? stories.story_url:stories.url})</a></p>
        <div class="news-list__post-info"><p class="score">Score: ${stories.points} |</p><p class="author">Author: ${stories.author} |</p><p class="comment"><a href="comments.html">Comments: ${stories.num_comments ? stories.num_comments : 0 } </a></p></div>`;

    const news = document.createElement('li');
    news.innerHTML = newsHTML;
    console.log(stories.objectID);
    news.setAttribute('data-id', stories.objectID)
    newsList.appendChild(news);
}