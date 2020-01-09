'use strict'


/*function fetchDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJSON => displayResults(responseJSON))
        .catch(alert("Ruh_Roh! Something went wrong! Maybe try again later"))
} */
function submitTheForm(){
    $(".submit").click(function(event){
        event.preventDefault();
        //alert("hello, Dave")
    })
}

function storeNumber(){
    $(".submit").submit(function(event){
        event.preventDefault();
        let number = $("input::number").val()
    })
    console.log(number)
}

function displayDogImage(){
    $(".doge").forEach().replaceWith(
        `<img class="doge" src="${responseJSON}"alt="doggie"></img>`
    )
}

function funTitle(){
    $(".doge").removeClass(hidden)
}

submitTheForm()