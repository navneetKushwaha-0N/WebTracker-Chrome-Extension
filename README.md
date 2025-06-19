# Website Tracker Chrome Extension

## Overview
The **Website Tracker** Chrome extension keeps a record of all the websites visited within a 24-hour period and provides options to export this data to a CSV file for further analysis. The extension features a sleek, modern design with a 3D look and is easy to use.

---

## Features
1. **Track Visited Websites**: Automatically records the title, URL, and timestamp of visited websites.
2. **Export to CSV**: Users can export the tracked data to a CSV file with a single click.
3. **Responsive and Interactive Design**:
   - Rounded corners and 3D effects for a modern interface.
   - Hover and click effects on buttons.
   - Scrollable list for viewing website records.
 
---
 
## How to Use
1. **Install the Extension**:
   - Download the source code or clone the repository.
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" and click "Load unpacked".
   - Select the folder containing the extension.

2. **Track Websites**:
   - Once the extension is active, it will start tracking visited websites automatically.

3. **View Records**:
   - Click the extension icon in the Chrome toolbar to open the popup.
   - The popup will display a list of visited websites.

4. **Export Data**:
   - Click the **Export to CSV** button to download the data in CSV format.

---

## File Structure
```
root/
├── manifest.json          # Extension manifest file
├── popup.html             # HTML for the extension popup
├── popup.js               # JavaScript for popup functionality
├── styles.css             # Styling for the extension popup
├── background.js          # Background script for tracking website activity
└── README.md              # Documentation file
```

---

## Installation
Follow these steps to set up the extension:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/website-tracker-extension.git
   ```
2. Open the Chrome Extensions page:
   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode**.
4. Click on **Load unpacked** and select the cloned directory.

---

## Technologies Used
- **HTML5**: For creating the popup structure.
- **CSS**: For styling and 3D effects.
- **JavaScript**: For functionality and data manipulation.
- **Chrome Extensions API**: For integrating with the browser.

---

## Future Enhancements
1. **Filter Data**: Add options to filter records by domain or date.
2. **Analytics Dashboard**: Provide visual insights like graphs and charts.
3. **Cloud Sync**: Sync data across devices using a cloud service.

---


---

## Contributing
We welcome contributions! Feel free to submit issues or pull requests to improve this extension.

---

## Contact
For any inquiries or feedback, please contact the project maintainers at:
- Email: navneetkushwaha64@gmail.com
- GitHub: [mollenmi](https://github.com/mollenmi)
