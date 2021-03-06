# Documentations

This repository contains documentation for some of the repositories.

## Live Site

It's hosted [here](http://yguan.github.io/repos/documentation/).

## Development

#### Overview of Folder Structure

`app` Contains the source code for the Website
- `css` CSS files used by the site, but they are generated by the .less files in the `less` folder
- `less` [less](http://lesscss.org/) files for generating CSS files
- `img`  Images
- `js` JavaScripts files and template files
  - `extension` Extensions for libraries in the `lib` folder
  - `lib` Libraries
  - `section` md files for each sections
  - `template` HTML files for appending to the DOM
  - `views` Views that render HTML or SVG charts

#### Grunt Configuration

All the grunt config and options are located in the `tasks` folder, and here is the list of grunt commands:
* `grunt` - run the watch command that compile less file automatically whenever there is a change.
* `grunt lib` - concatenate some of the non-require.js dependent libraries to `all-lib.js` and minifies it to `all-lib-min.js`.
* `grunt cssdev` - compile less files to `app.css`.
* `grunt cssdist` - compile less files and compress them to create `app.css`, then concatenate it with `mocha.css`.
* `grunt dev` - compile less files, and concatenate JavaScripts files to create not-minified `app-min.js`.
* `grunt build` - create the compressed package in `dist` folder.
* `grunt sdev` - start a http server at `localhost:9000` for `app` folder.
* `grunt sdist` - start a http server at `localhost:9001` for `dist` folder.

## Build

To build the package, you have to have `node.js` installed, then in command line console, run the followings steps once:

- go to `portfolio-site` folder
- (if grunt-cli is not installed) run `npm install -g grunt-cli`
- run `npm install`

Now, you can build your project with running `grunt build`. The output folder is `app-built`, you can change it in the `Gruntfile.js` under section `requirejs`.

## Less Files Compilation

`grunt build` compiles all less files to app-min.css. In development, you can run `grunt watch`, and all less files will be compiled in 2 seconds after you change a less file. You can change the delay period `debounceDelay` in `Gruntfile.js` under section `watch`.

## Run the Website locally

In your command line console, run the following steps:

- go to `test-anywhere` folder
- run `grunt sdev` to start a http sever at `localhost:9000` for `app` folder
- run `grunt sdist` to start a http sever at `localhost:9001` for `dist` folder
- go to your browser, and type in `localhost:9000` or `localhost:9001` to the address bar
- you should see the site running in the browser

## License

[MIT](http://opensource.org/licenses/MIT)