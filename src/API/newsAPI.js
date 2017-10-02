const firebase = require('firebase');
const hackernews = require('firebase-hackernews');

const hnservice = hackernews.init(firebase)


export default function getJobsApi(page){

    return new Promise((resolve, reject)=>{
        page=1;
        document.querySelector('button.button.more').setAttribute('disabled', 'disabled');
        resolve(
            hnservice.stories('top', {page: page, count : 30, force: true})
            .then(stories =>{
                document.querySelector('button.button.more').removeAttribute('disabled');
                return stories;
         })
    )})
}