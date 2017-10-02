import createNews from './news/news';
import show30News from './button/button'; 
import getNewsApi from './API/newsAPI';

import './styles/style.scss';

//init page as a number
let page=1;
getNewsApi(page).then(renderNews).catch(e => console.log(e));


const store = {}; 

function renderNews(currentStories){
    store.stories = currentStories;
    Array.from(store.stories).map(createNews)
}

function moreNews(){
//add page on every click more button
    console.log(page ++);
    getNewsApi(page).then(renderNews).catch(e => console.log(e));
}

show30News(moreNews)