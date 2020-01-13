'use strict'


function fetchDogImage(){
        fetch('https://dog.ceo/api/breeds/image/random/' + number, 3)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(alert("Ruh_Roh! Something went wrong! Maybe try again later"));
}



function storeNumber(){
    $(".submit").click(function(event){
        event.preventDefault();
        let number = $(".number").val()
        console.log(number)
        fetchDogImage()
    })
}

/*function displayDogImage(){
    $(".doge").forEach().replaceWith(
        `<img class="doge" src="${responseJSON}"alt="doggie"></img>`
    )
}

function funTitle(){
    $(".doge").removeClass(hidden)
}
*/
storeNumber()