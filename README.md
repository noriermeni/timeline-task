# timeline-task

Commands in steps for starting Timeline-task project

Step 1. git clone https://github.com/noriermeni/timeline-task

Step 2. npm install

Step 3. npm run dev

------------------------------------------------
DEMO: https://timeliph.web.app/
Icons are not included in firebase.
________________________________________________

Steps for configuration of babel and webpack

Step 1. Create project directory and 
    
    mkdir timeline-task
    cd timeline-task 

Step 2. Create a basic package.json file. 

    npm init

Step 3. Install react and react-dom

    npm i react react-dom

    or 

    npm i react
    npm i react-dom

Step 4. Install Babel packages

    npm i -D @babel/preset-react @babel/preset-env @babel/core babel-loader @babel/plugin-proposal-class-properties

    @babel/preset-react -> Is the present for react
    @babel/preset-env -> Userd to allow us to use latest Javascript more easily
    @babel/core -> Core functionality of Babel
    babel-loader -> Used by webpack to transpile Modern JS in the JS code that browser can understand.
    @babel/plugin-proposal-class-properties -> To transfrom Static Classes

Step 5. Create .babelrc file 

    touch .babelrc

    Here can we tell babel to use babel/preset-env target the last few versions of browsers.
    modules: false -> Tells the babel to let modules to handle the webpack

Step 6. Install Webpack Dev Server and Webpack

    npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin path

Step 7. Create dictionary public for html single page

    mkdir public
    cd public
    touch index.html

Step 8. Create dictionary src for javascript code

    mkdir src
    cd src
    touch index.js App.js

Step 9. Setup the Webpack configuration file webpack.config.js

    touch webpack.config.js

    Here allow to app to use custom index.html and they will be rendered by webpack-dev-server pack
    And allow style-loader css-loader file-loader whatever we need from the modules

Step 10. In package.json we need to add scripts for starting the app 

    "dev": "webpack-dev-server --mode=development",


To run the Webpack dev server we need to write the command:

    npm run dev
    
------------------------------------------------

Dependencies versions

"@babel/polyfill": "^7.12.1",
"autoprefixer": "^10.2.5",
"isomorphic-fetch": "^3.0.0",
"react": "17.0.2",
"react-dom": "17.0.2"
    
    
devDependencies versions
 
"@babel/core": "7.13.14",
"@babel/plugin-proposal-class-properties": "7.13.0",
"@babel/preset-env": "7.13.12",
"@babel/preset-react": "7.13.13",
"babel-loader": "8.2.2",
"css-loader": "5.2.0",
"file-loader": "6.2.0",
"html-webpack-plugin": "5.3.1",
"path": "0.12.7",
"sass": "1.32.8",
"sass-loader": "11.0.1",
"style-loader": "2.0.0",
"webpack": "5.28.0",
"webpack-cli": "4.6.0",
"webpack-dev-server": "3.11.2"

