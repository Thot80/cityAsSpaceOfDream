// Getting device screen width

let screenWidth = window.innerWidth;
let smartPhoneDevice;
let oldDevice = false;

// Desktop behaviour
if (screenWidth >= 768){
    smartPhoneDevice = false;
}
// Smartphone behaviour
else if(screenWidth >= 576){
    smartPhoneDevice = true;
}
else{
    smartPhoneDevice = true;
    oldDevice = true;
}

// ------------------- Change Folders on smartphones -------------//

// ---------------- Archieves folder pop-up ------------------//

let archievesModal = new bootstrap.Modal($("#archievesModal2021"));
let isArchieveFolderOpen = false;

// ------------------ Desktop behaviour --------------------------//

if(smartPhoneDevice === false){

    // Toggle Hidden archieves files when folder clicked
    $("#archives-folder").click(function() {

        if($(".archieves-cards").hasClass("card-active")){
            isArchieveFolderOpen = true;
        }
        else{
            isArchieveFolderOpen = false;
        }
        if(isArchieveFolderOpen === false){
            $(".archieves-cards").toggleClass("card-active");  
        }
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

//----------------------------------- Calendar Text toggle from calendar and modal behaviour for olds phones --------------------------//
let calendarModal = new bootstrap.Modal($("#calendarModal"));



if (oldDevice == false){
    $("#calendar").click(function(){
        $("#calendar-text").toggleClass("calendarTextDisabled");
    })
}
else{
    calendarModal.show();
    $("#calendar").click(function(){
        calendarModal.show();
    });
}


// ------------------------------------ research folder pop up -----------------------------------------//

 let researchModal = new bootstrap.Modal($("#researchModal1"));

// ------------------ Desktop behaviour --------------------------//
let isResearchFolderOpen = false;

if(smartPhoneDevice === false){

    // Toggle Hidden research files when folder clicked
    $("#research-folder").click(function() {

        if($(".research-cards").hasClass("card-active")){
            isResearchFolderOpen = true;
        }
        else{
            isResearchFolderOpen = false;
        }
        if(isResearchFolderOpen === false){
            $(".research-cards").toggleClass("card-active");  
        }
    
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

// ---------------- Xperiments folder pop-up ------------------//

let xperimentModal = new bootstrap.Modal($("#xperimentsModal"));
let isXperimentsFolderOpen = false;
// ------------------ Desktop behaviour --------------------------//

if(smartPhoneDevice === false){

    // Toggle Hidden xperiment files when folder clicked
    $("#experiments-folder").click(() => {
        if($(".xperiments-cards").hasClass("card-active")){
            isXperimentsFolderOpen = true;
        }
        else{
            isXperimentsFolderOpen = false;
        }
        if(isXperimentsFolderOpen === false){
            $(".xperiments-cards").toggleClass("card-active");  
        }
    });
}
// Modal Trigger on smartphone
else{
    $("#experiments-folder").click(() => {
        xperimentModal.show();
    });
}
// -------------------------------------- Footer ---------------------------------------//
if(oldDevice == false){
    $("#partners-toggle").hover(function(){
        $(".partners-text").toggleClass("partners-text-enabled");
    });
}
else{
    $("#partners-toggle").click(function(){
        $(".partners-text").toggleClass("partners-text-enabled");
    });
}

// ------------------------------------------ Close buttons for cards ----------------------------------//

$(".card-btn-close").click(function(){
    $(this).parent().parent().toggleClass("card-active");
});