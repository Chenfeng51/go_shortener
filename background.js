let shortUrlRules = [
  ["go/week/$1", "^https://calendar.google.com/calendar/u/0/r/week/(.*)$"],
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ shortUrlRules });
});
