let shortUrlRules = [
  // This is based on a golink rule: https://calendar.google.com/calendar/u/0/r/week/{*}/{*}/{*}
  ["go/week/$1/$2/$3", "calendar.google.com/calendar/u/0/r/week/{*}/{*}/{*}"], 
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ shortUrlRules });
});
