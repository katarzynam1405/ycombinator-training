const firebase = require('firebase');
const hackernews = require('firebase-hackernews');

const hnservice = hackernews.init(firebase)

export default function getFromApi(){
    return new Promise((resolve, reject)=>{
        resolve(
            hnservice.stories('top', {page: 1, count: 50})
            .then(stories => stories)
    )})
}