var bioText = "In progress text"
function load_bio() {
    document.getElementById("bio").innerHTML = bioText;
}

function load() {
    load_bio();
}
window.onLoad = load();
