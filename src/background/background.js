// const blockedUrls = [
//     '*://*.facebook.com/*',
//     '*://*.instagram.com/*'
// ];

// function setBlockedUrls(urls) {
//     return new Promise((resolve, reject) => {
//         chrome.storage.local.set({ blockedUrls: urls }, function() {
//             if (chrome.runtime.lastError) {
//                 reject(chrome.runtime.lastError);
//             } else {
//                 console.log("Blocked URLs set in storage");
//                 resolve();
//             }
//         });
//     });
// }



chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and working");
});
  
  chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    chrome.storage.local.get("blockedUrls", (result) => {
      const blockedUrls = result.blockedUrls || [];
      const url = details.url;
  
      if (blockedUrls.includes(url)) {
        chrome.tabs.update(details.tabId, {
          url: chrome.runtime.getURL('../../dist/index.html')
        });
      }else {console.log("not matched")}
    });
  }, { url: [{ schemes: ["http", "https"] }] });
  