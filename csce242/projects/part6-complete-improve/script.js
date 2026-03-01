// toggle nav
if (window.innerWidth < 768) {
    document.getElementById("topnav-links").classList.add("hidden"); //hidden by default
}

window.onresize = () => {
    if (window.innerWidth >= 768) {
        document.getElementById("topnav-links").classList.remove("hidden");
    } else {
        document.getElementById("topnav-links").classList.add("hidden");
    }
}
document.getElementById("hamburger-toggle").onclick = () => {
    document.getElementById("topnav-links").classList.toggle("hidden");
};