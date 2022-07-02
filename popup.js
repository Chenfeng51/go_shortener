urlInput = document.getElementById("urlInput");
copyBtn = document.getElementById("copyBtn");
resultLabel = document.getElementById("result");

function rewriteUrl(url, rules) {
  for (let ind in rules) {
    console.log("rule   :" + rules[ind]);
    let [g, uRegStr] = rules[ind];
    let uReg = new RegExp(uRegStr);
    newUrl = url.replace(uReg, g);
    console.log("rule:" + uReg);
    console.log("result:" + newUrl);
    if (newUrl != url) {
      return "http://" + newUrl;
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
