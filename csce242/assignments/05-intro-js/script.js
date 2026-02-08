function revealTriangle() {
    // when the column is clicked, 
    // get the triangle and set it to visible.
    document.getElementById("geometry").onclick = () => {
        document.getElementById("triangle").style.visibility = "visible";
    };
}

function outputFormattedDate(){
    // for this I use addEventListener to check when the user adds input to the date selector
    document.getElementById("date-input").addEventListener("input", () => {
        //first the string is split at each -
        //then slices the year from the beginning of the array
        //and adds it to the end, joining everything with "/"
        formattedDate = document.getElementById("date-input").value.split("-").slice(1).join("/") + "/" + document.getElementById("date-input").value.split("-")[0];
        document.getElementById("date-selection").innerHTML = "You picked the date: " + formattedDate;
    });
}

function changeImage(){
    document.getElementById("change-image").onclick = () => {
       document.getElementById("change-image").style.borderTop = "10px solid red";
       document.getElementById("change-image").style.borderBottom = "10px solid orange";
       document.getElementById("change-image").style.borderRight = "10px solid blue";
       document.getElementById("change-image").style.borderLeft = "10px solid teal"
    };
}

revealTriangle();
outputFormattedDate();
changeImage();
