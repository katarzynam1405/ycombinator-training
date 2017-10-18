export default function searchNews(newsList) {
    const input = document.querySelector('#search-input');
    console.log(newsList, "z searcha");
    const news = Array.from(newsList.querySelectorAll('li'));
    console.log(news, 'search');
    input.addEventListener('keyup', (event) => {
        console.log(event.target.value);
    
    if(event.target.value == 0){
        return
    } else {
        for (let i=0; i < news.length; i++) {
            news[i].classList.add('hidden');
            }
        }
    })
};
