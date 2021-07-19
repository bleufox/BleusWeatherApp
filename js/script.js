const apiKey = '1fee0a69d3e5e23de529fb92052b8c21'
let city = 'adsvasv'
const searchFormEl = document.querySelector('#search-button')

function savedHistory () {
    let searchList = document.getElementById('search-el');
    let retrieve = localStorage.getItem('cityStorage') || '[]';
    retrieve = JSON.parse(retrieve)
    for (let i = 0; i < retrieve.length; i++) {
        let searchStorage = retrieve[i]
        console.log('City Storage: ', searchStorage)
        let createButton = document.createElement('button');
        createButton.textContent = searchStorage
        searchList.appendChild(createButton)
    }
}

function addToSearchHistory(cityInput){
    let retrieve = localStorage.getItem('cityStorage') || '[]';
    retrieve = JSON.parse(retrieve)
// get local storage and put it into an array
// push cityInput into that array
// if that array is longer than 5 items pop items
// set that new array into local storage
// run savedHistory
}

function handleSearchFormSubmit(event) {
    event.preventDefault();

    city = document.querySelector('#search-box').value;
    document.getElementById('search-box').value=''

    if (!city) {
        console.error('Re-enter a city');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
    addToSearchHistory(city)
}

savedHistory();
searchFormEl.addEventListener('click', handleSearchFormSubmit);

// in local storage the object looks like this (JSON.stringify)
// const searchedCities = {
//     "0" : "Eugene",
//     "1" : "Salt Lake City"
// }

// For use in the app (JSON.parse)
// const searchedCities = {
//    0 : "Eugene",
//    1 : "Salt Lake City"
// }