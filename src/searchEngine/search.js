export default function searchNews() {
    const input = document.querySelector('#search-input');
    
    input.addEventListener('keyup', (event) => {
        console.log(event.target.value);
    })
};