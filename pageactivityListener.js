const youtubewatchurlFilter = { url: [{ urlPrefix: 'https://www.youtube.com/watch' }] };

chrome.webNavigation.onCommitted.addListener(injectsidebarScripts, youtubewatchurlFilter);
chrome.webNavigation.onHistoryStateUpdated.addListener(injectsidebarScripts, youtubewatchurlFilter);

function injectsidebarScripts(activeTab) {
  chrome.scripting.executeScript({ target: { tabId: activeTab.tabId }, files: ["sidebarcommentsLoader.js"] });
  chrome.scripting.insertCSS({ target: { tabId: activeTab.tabId }, files: ["sidebarLayout.css"] });
}