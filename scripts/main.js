var bioText = "I am a first year PhD student in computer science at Stanford. My research interests largely focus on systems and networking. This fall, through Stanford's first year rotation program, I am working with Professor Matei Zaharia."
function load_bio() {
    document.getElementById("bio").innerHTML = bioText;
}

function load() {
    load_bio();
}
window.onLoad = load();
