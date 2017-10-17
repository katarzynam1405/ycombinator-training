import createJobs from './jobs/jobs';
import show20Jobs from './button/buttonJobs'; 
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

function moreJobs(){
//add page on every click more button
    page ++;
    getJobsApi(page).then(renderJobs).catch(e => console.log(e));
}

show20Jobs(moreJobs);