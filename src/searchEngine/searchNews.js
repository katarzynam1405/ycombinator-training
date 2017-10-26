export default function searchNews(newsList) {
    const input = document.querySelector('#search-input.news');

    const news = Array.from(newsList.querySelectorAll('li[data-id]'));
    const paginationList = document.querySelector('.pagination');
    const serchedPrePage = 5;


    input.addEventListener('input', function(event) {
        document.querySelector('.sort__button').style.display = "none";
        document.querySelector('button.button.more-news').style.display = 'none';
        paginationList.innerHTML = "";
        let inputValue = event.target.value.toLowerCase();

        if (inputValue === null) {
            return;
        } else {
            news.forEach((oneNews) => oneNews.classList.add('hidden'));
        }

        const searchResults = news.filter((oneNews) => {
            return oneNews.innerHTML.toLowerCase().indexOf(inputValue) !== -1
        });
        //show pagination list on start searching
        paginationList.classList.remove('hidden');

        //create dynamic pagination newsList
        for (let i = 0; i < (searchResults.length / serchedPrePage); i++) {
            paginationList.innerHTML += `<span data-value="${i}"> [${i + 1}] </span>`;
        }

        //run pagination after click on paginationList
        let page = 0;
        const spans = paginationList.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
            spans[i].addEventListener('click', function(event) {
                page = parseInt(event.target.dataset.value); //parseInt to be sure that taken value is a integer number
                pagination(page, searchResults);
            });
        }
    });

    function pagination(page, searchResults) {
        const results = searchResults.slice((page * serchedPrePage), ((page + 1) * serchedPrePage));
        results.forEach((searchResult) => searchResult.classList.remove('hidden'));
    }
};