export default function searchNews(newsList) {
    const input = document.querySelector('#search-input.news');

    const news = Array.from(newsList.querySelectorAll('li'));
    console.log(news.length, 'search');

    input.addEventListener('input', function (event) {
        let inputValue = event.target.value.toLowerCase();

        if (inputValue === null) {
            return;
        } else {
            for (var i = 0; i < news.length; i++) {
                news[i].classList.add('hidden');
            }
        }

        for (var i = 0; i < news.length; i++) {
            if (news[i].innerHTML.toLowerCase().indexOf(inputValue) !== -1) {
                news[i].classList.remove('hidden');
            }
        }
        document.querySelector('button.button.more-news').style.display = "none";
    });
};