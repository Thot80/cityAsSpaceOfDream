// Getting device screen width

let screenWidth = window.innerWidth;
let smartPhoneDevice;

// Desktop behaviour
if (screenWidth > 768){
    smartPhoneDevice = false;
}
// Smartphone behaviour
else{
    smartPhoneDevice = true;
}



// ---------------- Archieves folder Desktop pop-up ------------------//

$("#archives-folder").click(() => {

    $(".archieves-cards").toggleClass("archieves-active");
});



$(".archieves-cards").click( function() {

    // z-index value match the id of the car, z-index:n -> nth card
    let clickedIndex = $(this).css("z-index");
    let clickedCard = $(this);
    let cardToChange = $("div.fifth-archieves-card");
    if(clickedIndex == 1){

        clickedCard.removeClass("first-archieves-card");
        clickedCard.addClass("fifth-archieves-card");
        cardToChange.removeClass("fifth-archieves-card");
        cardToChange.addClass("first-archieves-card");
    }
    if(clickedIndex == 2){

        clickedCard.removeClass("second-archieves-card");
        clickedCard.addClass("fifth-archieves-card");
        cardToChange.removeClass("fifth-archieves-card");
        cardToChange.addClass("second-archieves-card");
    }
    if(clickedIndex == 3){

        clickedCard.removeClass("third-archieves-card");
        clickedCard.addClass("fifth-archieves-card");
        cardToChange.removeClass("fifth-archieves-card");
        cardToChange.addClass("third-archieves-card");
    }
    if(clickedIndex == 4){

        clickedCard.removeClass("fourth-archieves-card");
        clickedCard.addClass("fifth-archieves-card");
        cardToChange.removeClass("fifth-archieves-card");
        cardToChange.addClass("fourth-archieves-card");
    }
})
