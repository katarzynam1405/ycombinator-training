import getFromApi from './API/API';
import createNews from './news/news';
import show30News from './button/button'; 

import './styles/style.scss';

getFromApi(count).then(parseJson).catch(e => console.log(e));

const store = {}; 

function parseJson(stories){
    console.log(stories)
   store.stories = stories;
   store.stories.forEach((stories)=> createNews(stories))
}

console.log(store,"store");

var count=0;

function moreNews(){
    console.log(count += 30);
    getFromApi(count).then(parseJson).catch(e => console.log(e));
}

show30News(moreNews)