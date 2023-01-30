import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const ENDPOINT = "restcountries.com/v3.1/name/";


// https://restcountries.com/v2/all?fields=name,capital,currencies
// https://restcountries.com/v3.1/name/{name}

// const inputRef = document.getElementById("search-box");
// console.log('inputRef :>> ', inputRef);

// function fetchCountries(name) {
// fetch(`${ENDPOINT}'${name}?fields=name.official,capital,population,flags.svg,languages`)
//   .then(response => response.json())
//   .then(card => {
//     console.log('card :>> ', card);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }






/*
name.official - повна назва країни
capital - столиця
population - населення
flags.svg - посилання на зображення прапора
languages - масив мов
*/
/*
function createMarkup({ name.official, capital, population, flags.svg, languages }) {
  return `
    <div class="article-card">
         <img src=${urlToImage} class="article-img">
        <h2 class="article-title">${title}</h2>
        <h3 class="article-author">${author || "Anonym"}</h3>
        <p class="article-description">${description}</p>
        <a href=${url} class="article-link" target="_blank">Read more</a>
    </div>
    
    `;
}
*/