# NightModeBrowserPDF
This is a tool written in javascript to invert the color for built-in PDF readers for most of the browsers

![Logo](icon.png "Logo created just incase if I want to turn it into an extension")

## Usage
1. Create a new bookmark in the browser
2. Copy and paste all the lines from the corresponding file to the URL section
    - [Chrome](InvertChrome.js)
    - [Firefox](InvertFirefox.js)
3. Click the bookmark when viewing a PDF with the built-in PDF.js

## How it Works
For Firefox, it changes the settings of the viewer.style

For Chrome, it creates a new div the covers the entire screen with click through, and invert everything behind it.