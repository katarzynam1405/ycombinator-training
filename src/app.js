import getFromApi from './API/API'
import show30News from './button/button';
import './style.scss';


getFromApi().then(getData).catch(e => console.log(e));

const store = {}; 
function getData(stories){
    stories.forEach((stories)=>console.log(stories.title));
    return store.stories = stories;
}
// console.log(store, "hi")

// function showNews(store){
//    console.log(store, 'im here!!')
    
// }

show30News(getData);