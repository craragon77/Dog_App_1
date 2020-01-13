'use strict'

function fetchDogImage(number){
    fetch('https://dog.ceo/api/breeds/image/random/' + number)
    .then(response => response.json())
    .then(responseJson => console.warn(responseJson) || displayDogImage(responseJson))   
    .catch(e => console.warn(e) || console.log("Ruh_Roh! Something went wrong! Maybe try again later"));
}

function storeNumber(){
    $(".submit").click(function(event){
        event.preventDefault();
        let number = $(".number").val() === "" ? 3 : $(".number").val();
        console.log(number)
        fetchDogImage(number)
        images()
    })
}

function displayDogImage(responseJson){
    //console.log(responseJson.message)
    $(".doge").replaceWith(
        `<section class="doge">
            <h2>Zoinks! That's a lot of dogs!</h2><br>
            <div class="dog_list"></div>
        </section>`
    )
}

function images(){
    for (let i = 0; i < responseJson.length; i++){
        $(".dog_list").append(
            <img scr="${responseJson.message}" alt="doggie"></img>
        )
    }
}
storeNumber()