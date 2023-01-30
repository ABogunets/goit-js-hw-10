import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import countryInfoTpl from './templates/country-info.hbs';
import countryListTpl from './templates/country-list.hbs';
import API from "./fetchCountries.js";


const DEBOUNCE_DELAY = 700;
const inputRef = document.getElementById("search-box");

inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const countryName = e.target.value.trim();
  console.log(countryName);
  if (countryName === '') {
    clearCountryList();
    return;
  }
  API.fetchCountries(countryName)
    .then(countryCards => {
    console.log('countryCards :>> ', countryCards);

    const numberOfCountries = countryCards.length;
    console.log('numberOfCountries :>> ', numberOfCountries);

    // if (numberOfCountries === 0) throw new Error("No data");
    if (numberOfCountries > 10) Notify.info("Too many matches found. Please enter a more specific name.");
    else if (numberOfCountries >= 2 && numberOfCountries <= 10) {
      clearCountryList();
      const countryListMarkup = countryCards.reduce(
        (markup, card) => createCountryListMarkup(card) + markup, ""
      );
      updateCountryList(countryListMarkup);
    }
    else if (numberOfCountries === 1) {
      clearCountryList();
      const countryInfoMarkup = countryCards.reduce(
        (markup, card) => createCountryInfoMarkup(card) + markup, ""
      );
      console.log('countryInfoMarkup :>> ', countryInfoMarkup);
      updateCountryInfo(countryInfoMarkup);
      console.log('countryInfoTpl :>> ', countryInfoTpl(countryCards[0]));
    }
    }) 
  .catch(onFetchError);
}

function createCountryListMarkup({name, flags}) {
  return `
      <li class="item">
      <img class="flag" src="${flags.svg}" alt="flag" width="20">
        ${name.common}
      </li>
      `;
}

function createCountryInfoMarkup({name, capital, population, flags, languages }) {
  return `
      <h1 class="country-title">
        <img class="flag" src="${flags.svg}" alt="flag" width="30">
        ${name.official}
      </h1>
      <p class="parameter"><b>Capital: </b>${capital}</p>
      <p class="parameter"><b>Population: </b>${population}</p>
      <p class="parameter"><b>Languages: </b>${Object.values(languages)}</p>
    `;
}
function updateCountryInfo(markup) {
  document
    .querySelector(".country-info")
    .innerHTML = markup;
}
function updateCountryList(markup) {
  document
    .querySelector(".country-list")
    .innerHTML = markup;
}
function clearCountryList() {
  document.querySelector(".country-list").innerHTML = "";
  document.querySelector(".country-info").innerHTML = "";
}

function onFetchError(error) {
  Notify.failure("Oops, there is no country with that name")
}