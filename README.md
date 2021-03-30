# timeline-task

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
