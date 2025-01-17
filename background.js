chrome.history.onVisited.addListener((historyItem) => {
  const timestamp = Date.now();
  const record = { url: historyItem.url, title: historyItem.title, timestamp };

  // Retrieve existing records
  chrome.storage.local.get(["records"], (data) => {
    const records = data.records || [];
    // Add the new record
    records.push(record);

    // Remove records older than 24 hours
    const twentyFourHoursAgo = timestamp - 24 * 60 * 60 * 1000;
    const filteredRecords = records.filter((r) => r.timestamp > twentyFourHoursAgo);

    // Save updated records
    chrome.storage.local.set({ records: filteredRecords });
  });
});
