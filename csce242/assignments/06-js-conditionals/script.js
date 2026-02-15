
//toggle menu
document.getElementById("ex1click").onclick = () => {
    document.getElementById("exercise-one").style.display = "block";
    document.getElementById("exercise-two").style.display = "none";
};
document.getElementById("ex2click").onclick = () => {
    document.getElementById("exercise-one").style.display = "none";
    document.getElementById("exercise-two").style.display = "block";
};

const triangle = document.getElementById("triangle");
triangle.onclick = (e) => {
    triangle.classList.toggle("flipped");
    document.getElementById("nav-items").classList.toggle("show");
};

// Exercise 1 
document.getElementById("timeInput").oninput = (e) => {
    const input = e.target.value;
    const ex1out = document.getElementById("ex1-output-p");
    document.getElementById("ex1-time-output").innerHTML =  input + " minutes";
    if (input > 45){
        ex1out.innerHTML = "Have a quick nap. &#128564"
    } else if (input > 30) {
        ex1out.innerHTML = "Take the scenic route. &#128513"
    } else if (input > 15) {   
        ex1out.innerHTML = "Focus on getting to class. &#128517"
    } else {
        ex1out.innerHTML = "Oh no! Don't be late! &#128531"
    }
};

// Exercise 2
var date = new Date();
const hour = date.getHours();
const mins = date.getMinutes();
const ex2out = document.getElementById("ex2-output-p");

var diff = 30 - mins;
const isAfter = diff > 0 ? true : false;

diff = Math.abs(diff);

// first i check if its 8am or not
if (hour > 8){
    ex2out.innerHTML = "Class started more than 15 mins ago.";
} else if (hour < 8) {
    ex2out.innerHTML = "Class is starting in more than 15 mins from now.";
} else { // must be 8am
    if(isAfter){ // if class time is passed
        if(diff > 15){
            ex2out.innerHTML = "Class started " + diff + " mins ago. You're very late!";
        } else if (diff > 10) {
            ex2out.innerHTML = "Class started " + diff + " mins ago. It's only getting later.";
        } else if (diff > 5) {
            ex2out.innerHTML = "Class started " + diff + " mins ago. Quick, you might not get a seat!";
        } else {
            ex2out.innerHTML = "Class started " + diff + " mins ago. They might not notice you're late.";
        }
    } else{ // if class time has not passed
        if(diff > 15){ 
            ex2out.innerHTML = "Class is starting in " + diff + " mins. Take your time and grab a snack.";
        } else if (diff > 10) {
            ex2out.innerHTML = "Class is starting in " + diff + " mins. Start moving towards class!";
        } else if (diff > 5) {
            ex2out.innerHTML = "Class is starting in " + diff + " mins. Get there so you can get a seat!";
        } else {
            ex2out.innerHTML = "Class is starting in " + diff + " mins. Be quick so you aren't late!"
        }
    }
}

