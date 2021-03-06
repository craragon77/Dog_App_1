'use strict'

function fetchDogImage(number){
    fetch('https://dog.ceo/api/breeds/image/random/' + number)
    .then(response => response.json())
    .then(responseJson => console.warn(responseJson) || displayDogImage(responseJson))
    .catch(e => console.warn(e) || alert("Ruh_Roh! Something went wrong! Maybe try again later"));
}

function storeNumber(){
    $(".submit").click(function(event){
        event.preventDefault();
        let number = $(".number").val() === "" ? 3 : $(".number").val();
        if (number > 50 || number < 1) {
            alert("Please pic a number between 1 and 50!")
        } else {
        fetchDogImage(number)
        }
    })
}
function displayDogImage(responseJson){
    $(".zoinks").replaceWith(
        `<section class="zoinks">
            <h2>Zoinks! That's a lot of dogs</h2>
            <div class="doge"></div>
        </section>`
    )
    dogLoop(responseJson)
}

function dogLoop(responseJson){
    for (let i = 0; i < responseJson.message.length; i++){
        $(".doge").append(
            `<img src="${responseJson.message[i]}" alt="placeholder">`
        )
    }
}
storeNumber()
