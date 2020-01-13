'use strict'

function fetchDogImage(number){
    fetch('https://dog.ceo/api/breeds/image/random/' + number)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .then(responseJson => displayDogImage(responseJson))    
    .catch(alert("Ruh_Roh! Something went wrong! Maybe try again later"));
}

function storeNumber(){
    $(".submit").click(function(event){
        event.preventDefault();
        let number = $(".number").val() === "" ? 3 : $(".number").val();
        console.log(number)
        fetchDogImage(number)
    })
}

function displayDogImage(responseJson){
    $(".doge").replaceWith(
        `<section class="doge">
            <h2>Zoinks! That's a lot of dogs!</h2><br>
            <img src="${responseJson.message}" alt="doggie>
        </section>`
    )
}
storeNumber()