import createNews from './news/news';
import show30News from './button/button'; 
import getNewsApi from './API/newsAPI';
import getCommentsApi from './API/commentsAPI'
import createComment from './comments/comments';

import './styles/style.scss';

//init page as a number
let page=1;
getNewsApi(page).then(renderNews).then(renderComments).catch(e => console.log(e));

const store = {}; 
const newsList = document.querySelector('ol.news-list');

function renderNews(currentStories){
    store.stories = currentStories;
    console.log(currentStories.hits, "z app js");
    Array.from(currentStories.hits).map(createNews);
//    Array.from(currentStories.hits).forEach((hits)=> sendToCommentApi(hits.objectID))
}

function renderComments(){
    Array.from(store.stories.hits).forEach((hits)=>{
        console.log(hits.objectID);
        let newsID = hits.objectID;
        console.log(newsID);
        getCommentsApi(newsID).then(createComment).catch(e => console.log(e));
    });
}
function moreNews(){
//add page on every click more button
    console.log(page ++);
    getNewsApi(page).then(renderNews).then(renderComments).catch(e => console.log(e));
}

show30News(moreNews);
