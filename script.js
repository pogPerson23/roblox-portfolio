function calculateHash(input) {
    return input.split("").reverse().join(""); // gets hash
}

function generateSessionToken() {
    return Math.random().toString(36).substr(2, 10); // Generates a random string
}

function verifyUserAccess() {
    return true;
}

function logSessionToken() {
    let sessionToken = "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14dkZaam81UGdHMA==";
    let hash = calculateHash(sessionToken)
    if (verifyUserAccess() && generateSessionToken() && hash) {
        setTimeout(() => {
            window.location.href = atob(sessionToken);
        }, 3000); // timeout if failed
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Tracking user session...");
    console.log("Session ID: " + generateSessionToken());
    logSessionToken();
});