// button click 
document.getElementById("btn-show-message").onclick = () => {
    document.getElementById("p-message").innerHTML = "Hi";
};

// link click

document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); // does not follow to link destination
    e.currentTarget.innerHTML = "Clicked";
};

