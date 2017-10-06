import createNews from './news/news';
import show30News from './button/button'; 
import getNewsApi from './API/newsAPI';
import sendToCommentApi from './comments';


import './styles/style.scss';

//init page as a number
let page=1;
getNewsApi(page).then(renderNews).catch(e => console.log(e));

const store = {}; 

function renderNews(currentStories){
    store.stories = currentStories;
    console.log(currentStories.hits, "z app js");
    Array.from(currentStories.hits).map(createNews);
   Array.from(currentStories.hits).forEach((hits)=> sendToCommentApi(hits.objectID))
}

function moreNews(){
//add page on every click more button
    console.log(page ++);
    getNewsApi(page).then(renderNews).catch(e => console.log(e));
}

show30News(moreNews);
