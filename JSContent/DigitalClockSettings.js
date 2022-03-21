function initiateClock() {
    let systemDate = new Date();
    let systemSeconds = systemDate.getSeconds();
    let systemMinutes = systemDate.getMinutes();
    let systemHours = systemDate.getHours();

    if (systemHours < 10) {
        systemHours = "0" + systemHours;
    }

    if (systemMinutes < 10) {
        systemMinutes = "0" + systemMinutes;
    }

    if (systemSeconds < 10) {
        systemSeconds = "0" + systemSeconds;
    }

    let timeSet = `${systemHours}:${systemMinutes}:${systemSeconds}`;
    let clockInputValue = document.getElementById("clockInput").value = timeSet;
}

let clockRefresh = setInterval(initiateClock, 1000);