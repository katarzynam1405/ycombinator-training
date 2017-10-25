export default function createNews(stories){
    const newsList = document.querySelector('ol.news-list');
    
    const newsHTML =
        `<h4>${stories.title? stories.title : stories.story_title }</h4><p><a href="${stories.story_url? stories.story_url:stories.url}">(${stories.story_url? stories.story_url:stories.url})</a></p>
        <div class="news-list__post-info"><p class="score">Score: ${stories.points?stories.points : "0"} |</p><p class="author">Author: ${stories.author} |</p><p class="comment">Comments: ${stories.num_comments ? stories.num_comments : 0 }</p><span class="show-comments"><img src="./src/assets/grayarrow.gif" alt="show comment"/></span></div>`;

    const news = document.createElement('li');
    news.innerHTML = newsHTML;
    news.setAttribute('data-id', stories.objectID)
    newsList.appendChild(news);
}