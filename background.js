chrome.downloads.onCreated.addListener(function(item) {
    chrome.downloads.cancel(item.id);
    chrome.downloads.erase({id: item.id});
  });
  