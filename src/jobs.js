import createJobs from './jobs/jobs';
import show30News from './button/button'; 
import getJobsApi from './API/jobsAPI';

import './styles/style.scss';

//init page as a number
let page=1;
getJobsApi(page).then(renderJobs).catch(e => console.log(e));


const store = {}; 

function renderJobs(currentJobs){
    store.jobs = currentJobs;
    Array.from(store.jobs).map(createJobs)
}

function moreNews(){
//add page on every click more button
    console.log(page ++);
    getJobsApi(page).then(renderJobs).catch(e => console.log(e));
}

show30News(moreNews)