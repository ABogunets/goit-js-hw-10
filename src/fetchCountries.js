const ENDPOINT = "https://restcountries.com/v3.1/name/";

async function fetchCountries(name) {
  const response = await fetch(`${ENDPOINT}${ name }?fields = name, capital, population, flags, languages`);
  if (!response.ok) {
  throw new Error(response.status);
  }
  const country = await response.json();
  return country
  }

export default { fetchCountries };