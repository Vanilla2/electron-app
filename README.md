# My first electron website
1. npx create-react-app name --template typescrit

2. npm install electron --save-dev

3. add description, licence, author and the following to package.json scripts:

<code>
"electron:start": "export DEV=TRUE && electron .",
"electron:serve": "npm start & npm run electron:start"
</code>

4. add .env and add the following line

<pre><code>
PORT=9000
BROWSER=none
</code></pre>

5. to start the website use:

<pre><code>
npm run electron:serve
</code></pre>

# Production build
1. npm install electron-builder --save-dev

2. Add scripts to package.json

<code>
"dist": "npm run build && electron-builder -c.extraMetadata.main=src/main/main.js"
</code>

3. Add the build configuration

<code>
"build": {
    "appId": "com.native",
    "productName": "Electron test app",
    "linux": {
        "target": "AppImage"
    },
    "files": [
        "build/**/*",
        "src/**/*",
        "package.json",
        "node_modules/**/*"
    ]
}
</code>