document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("website-list");
  const exportButton = document.getElementById("export-button");
  
  // Load data and display it in the popup
  chrome.storage.local.get(["records"], (data) => {
    const records = data.records || [];
    records.forEach((record) => {
      const li = document.createElement("li");
      li.textContent = `${record.title || record.url} (${new Date(record.timestamp).toLocaleTimeString()})`;
      list.appendChild(li);
    });
  });  
       
  // Export data to CSV
  exportButton.addEventListener("click", () => {
    chrome.storage.local.get(["records"], (data) => {
      const records = data.records || [];
      if (records.length === 0) {
        alert("No data available to export.");
        return;
      }
    
      // Convert records to CSV
      const csvContent = "data:text/csv;charset=utf-8," +
        ["Title,URL,Timestamp"]
          .concat(
            records.map(record =>
              `"${record.title || ""}","${record.url}","${new Date(record.timestamp).toISOString()}"`
            )
          )
          .join("\n");

      // Create a downloadable link
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "visited_websites.csv");
      document.body.appendChild(link);

      // Trigger download and remove the link
      link.click();
      document.body.removeChild(link);
    });
  });
});
