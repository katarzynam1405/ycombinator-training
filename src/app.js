import createNews from './news/news';
import show30News from './button/button'; 
import getNewsApi from './API/newsAPI';


import './styles/style.scss';

getNewsApi().then(renderNews).catch(e => console.log(e));


const store = {}; 

function renderNews(currentStories){
    store.stories = currentStories;
    Array.from(store.stories).map(createNews)
}

let page=1;

function moreNews(){
    console.log(page ++);
    getNewsApi(page).then(renderNews).catch(e => console.log(e));
}

show30News(moreNews)