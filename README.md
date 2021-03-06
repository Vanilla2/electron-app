# My first electron website

1. Initialize the react app:

<pre> npx create-react-app name --template typescrit </pre>

2. Install electron:

<pre> npm install electron --save-dev </pre>

3. add description, licence, main process file, and the following to package.json scripts:

<pre>
"electron:start": "export DEV=TRUE && electron .",
"electron:serve": "npm start & npm run electron:start"
</pre>

4. add .env and add the following lines

<pre>
PORT=9000
BROWSER=none
</pre>

5. to start the website use:

<pre>npm run electron:serve</pre>

NOTE: You have to wait a moment for the react to be served and then the app will work


# Production build
1. Install electron-builder:

<pre>npm install electron-builder --save-dev</pre>

2. Add scripts to package.json:

<pre>"dist": "npm run build && electron-builder"</pre>

3. Add the build configuration:

<pre>
"build": {
    "appId": "com.native",
    "productName": "Electron test app",
    "linux": {
        "target": "AppImage"
    },
    "windows": {
        "target": "NSIS",
    },
    "macos": {
        "target": "dmg",
    }
    "files": [
        "build/**/*",
        "src/**/*",
        "package.json",
        "node_modules/**/*"
    ],
    "extraMetadata": {
      "main": "src/main/main.js"
    }
}
</pre>
