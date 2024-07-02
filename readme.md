# Website Blocker Chrome Extension

![Extension Icon](./red.png)

## Description

The Website Blocker Chrome Extension allows users to block access to specific websites by redirecting them to a custom blocking page. This project is built using JavaScript, Chrome Extension APIs, webpack, and Tailwind CSS.

## Features

- Block access to specified URLs.
- Redirect users to a custom blocking page.
- Dynamically manage blocked URLs through the extension's popup.

## Installation

To install and use the extension locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/website-blocker-extension.git

2. Install dependencies using npm or yarn:

    npm install
    # or
    yarn install

3. Build the project:

    run : npx webpack --config webpack.config.js       
    # or
    run : npm run watch (this way you don't have have to repeatedly run previous command you just have to refresh your browser)

4. Load extension in your browser

    navigate to 'chrome://extensions/'
    Enable Developer mode (toggle switch usually located in the top right corner).
    Click on Load unpacked and select the dist directory within the project folder.

## Usage 

    Pin the extension in your browser.
    Now right click on the icon of extension in top right corner.
    Select 'options'

    You will be redirected to userInterface.

    Feel free to add any url in the input box.

    Don't forget to click the button 'Add Url'

    Navigate to a blocked URL to see the redirection to the custom blocking page.
    
