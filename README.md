# NightModeBrowserPDF
This is a bookmarklet tool written in javascript to invert the color for built-in PDF readers for most of the browsers

![Logo](icon.png "Logo created just incase if I want to turn it into an extension")

## Usage
1. Create a new bookmark in the browser
2. Copy and paste all the lines from the corresponding file to the URL section
    - [All](InvertAllPages.js)
    - [For Firefox PDF.js](InvertFirefoxPDFViewer.js)
3. Click the bookmark when viewing a PDF with the built-in PDF.js

## How it Works
For InvertFirefoxPDFViewer.js, it changes the settings of the viewer.style

For InvertAllPages.js, it creates a new div the covers the entire screen with click through, and invert everything behind it.