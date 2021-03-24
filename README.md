# My first electron website

1. npx create-react-app name --template typescrit

2. npm install electron

3. add description, licence, and the following to package.json scripts:

<pre>
"electron:start": "electron .",
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
