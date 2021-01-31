function enableDarkMode() {

    // Get the checkbox

var checkBox = document.getElementById("checkCheck");

    // Get the respective elements

var btn = document.querySelector("label");
var wholeHTML = document.getElementById("html");

// If the checkbox is checked, enable dark mode

if (checkBox.checked == true){
wholeHTML.style.filter = "invert(1) hue-rotate(180deg)"
btn.style.filter = "invert(1) hue-rotate(180deg)";
}

else {
wholeHTML.style.filter = "none";
btn.style.filter = "none"
}
}