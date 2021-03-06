import createNews from './news/news';
import getNewsApi from './API/newsAPI';
import show20News from './button/buttonNews'; 
import getCommentsApi from './API/commentsAPI';
import createComment from './comments/comments';
import searchNews from './searchEngine/searchNews';

import './styles/style.scss';

const newsList = document.querySelector('ol.news-list');

//init page as a number
let page=1;
const store = {}; 

getNewsApi(page).then(renderNews).then(renderComments).catch(e => console.log(e));

function renderNews(currentStories){
    store.stories = currentStories;
    Array.from(currentStories.hits).map(createNews);
    searchNews(newsList);
}

function renderComments(){
    // get li elemnts   
    const posts = newsList.querySelectorAll('li');
    Array.from(posts).forEach((post) => {
        let postId = post.dataset.id;
        //get return from commentsApi, send comments and rendered news to createComment
        getCommentsApi(postId).then((comments) => createComment(post, comments)).catch(e => console.log(e));
    });
}

function moreNews(){
//add page on every click more button
    page ++;
    getNewsApi(page).then(renderNews).then(renderComments).catch(e => console.log(e));
}

show20News(moreNews);