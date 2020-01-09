'use strict'


/*function fetchDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJSON => displayResults(responseJSON))
        .catch(alert("Ruh_Roh! Something went wrong! Maybe try again later"))
} */
function submitTheForm(){
    $(".submit").on("click", "submit", function(event){
        event.preventDefault()
        alert("hello, Dave")
    })
}

function displayDogImage(){
    $(".doge").forEach().replaceWith(
        `<img class="doge" src="${responseJSON}"alt="doggie"></img>`
    )
}

function funTitle(){
    $(".doge").removeClass(hidden)
}