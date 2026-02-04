function revealTriangle() {
    const geomCol = document.getElementById("geometry");
    const tri = document.getElementById("triangle");

    geomCol.addEventListener("click", () => {
        tri.style.visibility = "visible";
    });
}

function outputFormattedDate(){
    const dateSelector = document.getElementById("date-input");
    const outputDate = document.getElementById("date-selection");

    dateSelector.addEventListener("input", () => {
        //first the string is split at each -
        //then slices the year from the beginning of the array
        //and adds it to the end, joining everything with "/"
        formattedDate = dateSelector.value.split("-").slice(1).join("/") + "/" + dateSelector.value.split("-")[0];
        outputDate.textContent = "You picked the date: " + formattedDate;
    });
}

function changeImage(){
    const chgImage = document.getElementById("change-image");
    chgImage.addEventListener("click", () => {
        chgImage.src = "images/smiling-sun-border.png";
    });
}

//this event listener stops the script from running too early, 
//since it is embedded in the header
document.addEventListener("DOMContentLoaded", () => {
    revealTriangle();
    outputFormattedDate();
    changeImage();
});