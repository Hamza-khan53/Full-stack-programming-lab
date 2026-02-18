// Add Color Box
function addColorBox(inputId) {

    let colorValue = document.getElementById(inputId).value;

    if (colorValue === "") {
        alert("Please enter a color!");
        return;
    }

    let box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = colorValue;

    document.getElementById("boxContainer").appendChild(box);

    document.getElementById(inputId).value = "";
}


// Clear All Boxes
function clearBoxes() {
    document.getElementById("boxContainer").innerHTML = "";
}


// BONUS: Display Window Info using BOM
function showBrowserInfo() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    let browser = navigator.userAgent;

    document.getElementById("browserInfo").innerHTML =
        "<strong>Window Width:</strong> " + width + "px <br>" +
        "<strong>Window Height:</strong> " + height + "px <br>" +
        "<strong>Browser Info:</strong> " + browser;
}

// Run bonus function on page load
showBrowserInfo();

// Update window size dynamically when resized
window.onresize = showBrowserInfo;
