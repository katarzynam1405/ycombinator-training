import createNews from './news/news';
import getCommentsApi from './API/commentsAPI';
import createComment from './comments/comments';
import sortByDateApi from './API/sortApi/sortByDateApi';

import './styles/style.scss';

const moment = require('moment');

const searchForm = document.querySelector('#sort-by-date');
const newsList = document.querySelector('ol.news-list');

const currentTime = moment().unix();
const monthAgo = moment().subtract('months', 1).unix()
const weekAgo = moment().subtract('weeks', 1).unix();
const threeDaysAgo = moment().subtract('days', 1).unix();

let endDate;

searchForm.addEventListener('change', function(event) {
    let target = event.target.value;

    if (target == '3days') {
        newsList.innerHTML = "";
        endDate = threeDaysAgo;
    } else if (target == 'week') {
        newsList.innerHTML = "";
        endDate = weekAgo;
    } else if (target == 'month') {
        newsList.innerHTML = "";
        endDate = monthAgo;
    }
    sortByDateApi(endDate).then(renderNews).then(renderComments).catch(e => console.log(e));
})

const store = {};

function renderNews(currentStories) {
    store.stories = currentStories;
    Array.from(currentStories.hits).map(createNews);
};

function renderComments() {
    const posts = newsList.querySelectorAll('li');
    Array.from(posts).forEach((post) => {
        let postId = post.dataset.id;
        getCommentsApi(postId).then((comments) => createComment(post, comments)).catch(e => console.log(e));
    });
};