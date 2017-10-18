export default function searchNews(newsList) {
    const input = document.querySelector('#search-input');

    const news = Array.from(newsList.querySelectorAll('li'));
    console.log(news.length, 'search');

    input.addEventListener('input', (event) => {
        const inputValue = event.target.value;
    
    if(inputValue === null) {
        return
    } else {
        for (let i=0; i < news.length; i++) {
            news[i].classList.add('hidden');
        }
    }

    for(let i = 0; i < news.length; i++){
       if( news[i].innerHTML.indexOf(inputValue) !== -1){
            news[i].classList.remove('hidden');
       }
    }
    document.querySelector('button.button.more-news').style.display = "none";
}) 
};
