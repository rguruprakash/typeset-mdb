# Typeset MDB

Demo
----
[http://typeset-mdb.getforge.io/](http://typeset-mdb.getforge.io/)

Setup
-----
```
npm install -g grunt-cli bower
git clone https://github.com/rguruprakash/typeset-mdb
cd typeset-mdb
npm install
bower install
```

Grunt tasks
----------

```
grunt serve
grunt test
```

Project structure ([cg-angular](https://github.com/cgross/generator-cg-angular))
-----------------
    app.scss ....................... main app-wide styles
    app.js ......................... angular module initialization and route setup
    index.html ..................... main HTML file
    Gruntfile.js ................... Grunt build file
    /partials ...................... folder containing all partials for root module
      /analytics ................... example partial
        analytics.html ............. example partial html
        analytics.js ............... example partial controller
        analytics.scss ............. example partial SCSS
        analytics-spec.js .......... example partial unit test
    /service ....................... angular services folder
        my-service.js .............. example service
        my-service-spec.js ......... example service unit test
        my-service2.js ............. example service
        my-service2-spec.js ........ example service unit test
    /img ........................... images
    /dist .......................... distributable version of app built using grunt and Gruntfile.js
    /bower_component................ 3rd party libraries managed by bower
    /node_modules .................. npm managed libraries used by grunt
