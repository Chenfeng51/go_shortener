let saveBtn = document.getElementById("saveBtn");
let resetBtn = document.getElementById("resetBtn");
let rulesInput = document.getElementById("rulesInput");


function loadRules() {
  chrome.storage.sync.get("shortUrlRules", ({ shortUrlRules }) => {
    let ruleStr = "";
    for (let ind in shortUrlRules) {
      let [shortUrl, fullUrl] = shortUrlRules[ind];
      ruleStr += shortUrl+","+fullUrl + "\n";
    }
    rulesInput.value = ruleStr;
  });
}


function saveRules() {
  let shortUrlStr = rulesInput.value;
  let lines = shortUrlStr.split("\n");
  let shortUrlRules = [];
  for (let ind in lines) {
    const items = lines[ind].split(",");
    if (items.length != 2){
      console.log("Improper rule found:", lines[ind]);
      continue
    }
    shortUrlRules.push(items);
  }
  chrome.storage.sync.set({shortUrlRules});
}

saveBtn.addEventListener("click", saveRules);
resetBtn.addEventListener("click", loadRules);

loadRules();
