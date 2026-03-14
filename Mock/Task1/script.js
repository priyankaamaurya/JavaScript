let link = document.getElementById("myLink");
let frame = document.getElementById("myFrame");

link.addEventListener("click", function(e) {
    e.preventDefault();

    if (frame.style.display === "none") {
        frame.src = this.href;
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
        frame.src = "";
    }
});