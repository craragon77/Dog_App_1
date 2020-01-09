'use strict'


/*function fetchDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJSON => displayResults(responseJSON))
        .catch(alert("Ruh_Roh! Something went wrong! Maybe try again later"))
} */


function storeNumber(){
    $(".submit").submit(function(event){
        event.preventDefault();
        let number = $(".number").val()
        console.log(number)
    })
}

function submitTheForm(){
    $(".submit").click(function(event){
        event.preventDefault();
        alert("your number is: " + number)
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

submitTheForm()