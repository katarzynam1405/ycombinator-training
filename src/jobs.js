import createJobs from './jobs/jobs';
import getJobsApi from './API/jobsAPI';
import show20Jobs from './button/buttonJobs'; 
import searchJobs from './searchEngine/searchJobs';

import './styles/style.scss';

//init page as a number
let page=1;
const store = {}; 

getJobsApi(page).then(renderJobs).catch(e => console.log(e));

function renderJobs(currentJobs){
    store.jobs = currentJobs;
    Array.from(store.jobs).map(createJobs);
    searchJobs();
}

function moreJobs(){
//add page on every click more button
    page ++;
    getJobsApi(page).then(renderJobs).catch(e => console.log(e));
}

show20Jobs(moreJobs);