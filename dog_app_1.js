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
        console.log(number)
        fetchDogImage(number)
    })
}
//the issue appears to be that by hardcoding the individual image, you can only get them one at a time
function displayDogImage(responseJson){
    //console.log(responseJson.message)
    $(".doge").replaceWith(
        `<section class="doge">
            <h2>Zoinks! That's a lot of dogs</h2>
        </section>`
    )
}
function dogLoop(responseJson){
    for (let i = 0; i <= responseJson.length; i++){
        $(".doge").append(
            `<img src="${responseJson.message[i]}" alt="placeholder>`
        )
    }
}



storeNumber()