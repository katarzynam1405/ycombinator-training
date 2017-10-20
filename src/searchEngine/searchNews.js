export default function searchNews(newsList) {
    const input = document.querySelector('#search-input.news');

    const news = Array.from(newsList.querySelectorAll('li'));
    const pagination = document.querySelector('.pagination');

    input.addEventListener('input', function (event) {
        let inputValue = event.target.value.toLowerCase();

        if (inputValue === null) {
            return;
        } else {
            for (var i = 0; i < news.length; i++) {
                news[i].classList.add('hidden');
            }
        }

        const searchResults = news.filter((oneNews)=>{
            return oneNews.innerHTML.toLowerCase().indexOf(inputValue) !== -1
        })

        searchResults.forEach((searchResult) => searchResult.classList.remove('hidden'));

        console.log(searchResults);

        if(searchResults.length >= 20){
            pagination.classList.remove('hidden');
        }
     
        document.querySelector('button.button.more-news').style.display = 'none';
    });
};