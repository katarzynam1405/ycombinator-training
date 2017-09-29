const firebase = require('firebase');
const hackernews = require('firebase-hackernews');

const hnservice = hackernews.init(firebase)


export default function getFromApi(count){

    return new Promise((resolve, reject)=>{
        resolve(
            hnservice.stories('top', {page: 1, count: count})
            .then(stories => stories)
    )})
}