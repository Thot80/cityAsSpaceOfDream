// Getting device screen width

let screenWidth = window.innerWidth;
let smartPhoneDevice;

// Desktop behaviour
if (screenWidth >= 768){
    smartPhoneDevice = false;
}
// Smartphone behaviour
else{
    smartPhoneDevice = true;
}



// ---------------- Archieves folder pop-up ------------------//

let archievesModal = new bootstrap.Modal($("#archievesModal2021"));

// ------------------ Desktop behaviour --------------------------//

if(smartPhoneDevice === false){

    // Toggle Hidden archieves files when folder clicked
    $("#archives-folder").click(() => {

        $(".archieves-cards").toggleClass("archieves-active");
    });
    

    // Card changing position when clicked
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
}
// Modal Trigger on smartphone
else{

    $("#archives-folder").click(() => {
        archievesModal.show();
    });
}

//----------------------------------- Calendar Text toggle from calendar --------------------------//

$("#calendar").click(function(){
    $("#calendar-text").toggleClass("calendarTextDisabled");
})

// ------------------------------------ research folder pop up -----------------------------------------//

 let researchModal = new bootstrap.Modal($("#researchModal1"));

// ------------------ Desktop behaviour --------------------------//

if(smartPhoneDevice === false){

    // Toggle Hidden research files when folder clicked
    $("#research-folder").click(function() {

        $(".research-cards").toggleClass("research-active");
    });
    

    // Card changing position when clicked
    $(".research-cards").click( function() {
    
        // z-index value match the id of the car, z-index:n -> nth card
        let clickedIndex = $(this).css("z-index");
        let clickedCard = $(this);
        let cardToChange = $("div.third-research-card");
        if(clickedIndex == 1){
    
            clickedCard.removeClass("first-research-card");
            clickedCard.addClass("third-research-card");
            cardToChange.removeClass("third-research-card");
            cardToChange.addClass("first-research-card");
        }
        if(clickedIndex == 2){
    
            clickedCard.removeClass("second-research-card");
            clickedCard.addClass("third-research-card");
            cardToChange.removeClass("third-research-card");
            cardToChange.addClass("second-research-card");
        }
        if(clickedIndex == 3){
    
            clickedCard.removeClass("third-research-card");
            clickedCard.addClass("third-research-card");
            cardToChange.removeClass("fifth-research-card");
            cardToChange.addClass("third-research-card");
        }
        if(clickedIndex == 4){
    
            clickedCard.removeClass("fourth-research-card");
            clickedCard.addClass("third-research-card");
            cardToChange.removeClass("fifth-research-card");
            cardToChange.addClass("third-research-card");
        }
    })  
}
// Modal Trigger on smartphone
else{
    $("#research-folder").click(() => {
        researchModal.show();
    });
}


// ------------------------------------ Xperiments -----------------------------------------//

// ---------------- Archieves folder pop-up ------------------//

let xperimentModal = new bootstrap.Modal($("#xperimentsModal"));

// ------------------ Desktop behaviour --------------------------//

if(smartPhoneDevice === false){

    // Toggle Hidden xperiment files when folder clicked
    $("#experiments-folder").click(() => {
        $(".xperiments-cards").toggleClass("xperiments-active");
    });
}
// Modal Trigger on smartphone
else{
    $("#experiments-folder").click(() => {
        xperimentModal.show();
    });
}
// -------------------------------------- Footer ---------------------------------------//

$("#partners-toggle").hover(function(){
    $(".partners-text").toggleClass("partners-text-enabled");
});
