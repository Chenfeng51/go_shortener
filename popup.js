urlInput = document.getElementById("urlInput");
copyBtn = document.getElementById("copyBtn");
resultLabel = document.getElementById("result");

function rewriteUrl(url, rules) {
  for (let ind in rules) {
    let [shortUrl, uRegStr] = rules[ind];
    // Use valid url charactors for {*}.
    uRegStr = uRegStr.replaceAll("{*}", "([\\w!~.-]*)");
    let uReg = new RegExp(uRegStr);
    newUrl = url.replace(uReg, shortUrl);

    if (newUrl != url) {
      if (!newUrl.startsWith("http")) {
        newUrl = "http://" + newUrl;
      }
      // TODO: Maybe remove trailing parameters.
      // TODO: Maybe remove additional folders in the url.
      // Remove trailing /.
      if (newUrl.endsWith("/")) {
        newUrl = newUrl.susubstr(0, newUrl.length -1);
      }
      return newUrl;
    }
  }
  return url;
}

function copyUrl() {
  //Select all the text
  urlInput.select();

  //Execute command
  document.execCommand("copy");
  resultLabel.textContent = "Copied!";
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // since only one tab should be active and in the current window at once
  // the return variable should only have one entry
  var activeTab = tabs[0];
  chrome.storage.sync.get("shortUrlRules", ({ shortUrlRules }) => {
    urlInput.value = rewriteUrl(activeTab.url, shortUrlRules);
    copyUrl(activeTab.url);
  });
});

// When the button is clicked, copy the url again.
copyBtn.addEventListener("click", async () => {
  copyUrl();
});
