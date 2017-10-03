const firebase = require('firebase');
const hackernews = require('firebase-hackernews');

const hnservice = hackernews.init(firebase)

export default function getNewsApi(page){

    return new Promise((resolve, reject)=>{
        document.querySelector('button.button.more').setAttribute('disabled', 'disabled');
        resolve(
            hnservice.stories('job', {page: page, count : 5, force: true})
            .then(jobs =>{
                document.querySelector('button.button.more').removeAttribute('disabled');
                console.log(jobs);
                return jobs;
         })
    )})
}