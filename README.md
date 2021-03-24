# My first electron website
1. npx create-react-app name --template typescrit

2. npm install electron

3. add description, licence, and the following to package.json scripts:

<code>
"electron:start": "electron .",
"electron:serve": "npm start & npm run electron:start"
</code>

4. add .env and add the following line

<code>
PORT=9000
BROWSER=none
</code>

5. to start the website use:

<code>
npm run electron:serve
</code>

NOTE: You have to wait a moment for the react to be served and then the app will work