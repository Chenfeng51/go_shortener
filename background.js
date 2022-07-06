let shortUrlRules = [
  // This is based on a golink rule: https://calendar.google.com/calendar/u/0/r/week/{*}/{*}/{*}
  ["go/week/$1/$2/$3", "calendar.google.com/calendar/u/0/r/week/{*}/{*}/{*}"],
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('shortUrlRules', function (rules) {
    if (typeof rules === 'undefined') {
      // if not set then set it 
      chrome.storage.sync.set({ shortUrlRules });
    } else {
      // if already set it then nothing to do 
    }
  });
});
