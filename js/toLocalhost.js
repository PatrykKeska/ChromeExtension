// Define the transformUrl function
function transformUrl(url) {
    const parsedUrl = new URL(url);
    const port = parsedUrl.pathname.includes('/booking') ? '3001' : '3000';
    return `http://localhost:${port}${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
}

// Function to handle the button click
function handleButtonClick() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const currentUrl = tabs[0].url;
        const transformedUrl = transformUrl(currentUrl);

        if (currentUrl !== transformedUrl) {
            // Check chrome.storage.local for localhostSwitch value
            const openInNewTab = Boolean(JSON.parse(localStorage.getItem('localhostSwitch')));

            if (openInNewTab) {
                // Open the transformed URL in a new tab
                chrome.tabs.create({url: transformedUrl});
            } else {
                // Update the current tab's URL
                chrome.tabs.update(tabs[0].id, {url: transformedUrl});
            }
        }
    });
}

// Add event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('localhost');
    if (button) {
        button.addEventListener('click', handleButtonClick);
    }
});
