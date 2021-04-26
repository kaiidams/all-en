window.addEventListener('load', () => {
    let hoge = document.getElementById("replace_location");

    hoge.addEventListener('click', async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: replace_location,
        });
    });

    function replace_location() {
        var url = window.location.href;
        url = url.replace("/ja-jp/", "/en-us/")
        url = url.replace("/ja/","/en/")
        window.location.href = url;
    }
});