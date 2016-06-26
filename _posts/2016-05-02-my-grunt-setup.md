---
layout: post
title:  "Using Grunt with a front-end project for the first time"
description: "This is beginner's guide to setting up a project using the popular task runner and a simple directory setup"
date:   2016-05-02 08:29:49
category: Thoughts
---

## 	Before we start

For this guide you'll need a code editor and a command line application. For the purposes of this article I'll be using Terminal (Mac).

Having a working knowledge of front-end development will help. It is also assumed you are familiar with Git and have used Github before.

## What is Grunt?

Grunt is a 'task runner' which has thousands of plugins that can be used to automate almost any task. I use Grunt mainly for code compilation and image compression. 

There are other task runners available that may serve your needs better but I won't be getting into the pro's and con's of the alternatives in this guide. The fact is using any task runner will increase the speed of your development dramatically.

Not all projects are the same, so not all Grunt setups are be the same either. This boilerplate lays the foundations to create your own setup on a project-by-project basis.

### Setting up

If you've never used Grunt before you will need to:

- Install [Node.js](https://nodejs.org/en/)
- Install [Grunt's command line interface](http://gruntjs.com/getting-started)

Grunt is a command line tool that uses a only small amount of commands. If you're unfamiliar using the command line I reckon Grunt is a nice introduction for beginners.

Once you're all setup we can fork the boilerplate from our Github repo and start automating.

## The boilerplate

### File structure

Below is an example of what my boilerplate file structure looks like. There is no magical methodology behind it. The key idea is that there should be no un-compiled files inside our build directory `/www`.

```
my_project_name
│   Gruntfile.js
│   package.json    
│   README.md
└───_css-src
    │   style.scss
    ├───modules
    │   │   _defaults.scss
    │   │   _fonts.scss
    ├───plugins
    │   │   _normalize.scss
    ├───ui
    │   │   _breakpoints.scss
    │   │   _general.scss
    │   │   _ui.scss
    │   │   _variables.scss
└───_html-src
└───_img-src
└───_js-src
└───www
```
If you're going to use your own structure and naming conventions, then you will need to edit the Gruntfile accordingly.

### Getting some plugins

All of the plugins that Grunt will use are stored in the `/node_modules` directory. 

You may have noticed there is no directory in the repo you forked. On an ongoing project a `/node_modules` will include thousands of files, which you can store remotely if that's how you like to work. But it's not detrimental to the project if you don't do this.

We can run a single command in Terminal `npm-install` which downloads all of the plugins we need to our local environment. Be sure to add `node_modules` to .gitignore to make sure you don't push to your remote repo.

Once we have the plugins we’re ready to look at our Gruntfile.

### Configuring the Gruntfile

Each Grunt project has a Gruntfile. This is a configuration file where our tasks are setup. The file should and will always be named `Gruntfile.js` otherwise Grunt will error when your try to run a task. 

Open up the file and take a look at the basic setup. In our setup we configure each task at the top, then load the plugins and register each task at the bottom.

```js
module.exports = function(grunt) {

// TASK CONFIGURATION

grunt.initConfig({
  pkg: grunt.file.readJSON('package.son'),

    sass: {

      options: {
        sourceMap: false
      },

      dist: {
        files: {
          '_css-src/styles/style.css': '_css-src/sass/style.scss'
        }
      }

    },

});

// LOAD EACH PLUGIN

grunt.loadNpmTasks('grunt-sass');

// REGISTER EACH TASK

grunt.registerTask('default');

};
```

#### Exploring and editing the Gruntfile

All the tasks are setup to run out of the box, albeit for some slight tweaking to the file itself such as changing file directories.

If you're unfamiliar with Javascript you may be overawed by the code inside the Gruntfile. However, because of the simplistic nature of how Grunt tasks are configured, a newbie should be able to navigate and edit the file without too much trouble.

#### Interpreting a task

Most tasks share similar characteristics with slight variations depending on how the code was written by the developer who built the plugin. 

Each task tends to have it's own Github repo where you can explore how the task works and is setup - there are some links below to the repo of each task included in this pack. I would recommending taking a look at the README of each plugin to get a feel for each one should be used.

Familiarising yourself with the structure of tasks, running tasks, editing tasks, breaking tasks and finding out how you broke them will serve you well in your future task automation. 

##### Here's an image compression task:

``` js
imagemin: {
    optimise: {
        files: [{
            expand: true,
            cwd: '_img-src',
            src: ['*.{png,jpg,gif,svg}'],
            dest: 'www/images'
        }]
     }
},
```
- This task as one target: `optimise`
- This looks through the current working directory (`cwd`), where our uncompressed images are saved.
- It then looks for source files (`src`) to optimise. Note in this example we're using a wildcard (`*`) to tell the plugin to target all files in our current working directory with the file extensions of .png, .jpg, .gif and .svg
- It then makes new versions of all the optimised images in the `www/images` directory
- If you've changed your directory setup you will need to change the location of the `cwd` and `dest` accordingly

##### Another task example with a different structure, this time compiling Sass:

```js
sass: {
    options: {
        sourceMap: false
    },
    dist: {
        files: {
            '_css-src/styles/style.css': '_css-src/sass/style.scss'
        }
    }
},
```
- This task is setup a little differently, with two targets `options` and `dist`
- The `options` target creates a source map for the compiled CSS file (really handy). This option is currently set to `false` however, which means no source map will be generated
- The second target of this task dictates where the compiled CSS will be generated to and from directory it is created from
- The first part shows which directory the final CSS goes. The second part shows the directory where the separate Sass files are located

### Tasks included with this boilerplate

#### Compile CSS

Task name: **[grunt-sass](https://github.com/sindresorhus/grunt-sass)**

Command: `$ grunt css`

- Compiles Sass files inside the **_css-src** directory to CSS files
- Adds in vendor prefixes and minify CSS using posts
- Compiles the resulting CSS files to a specific directory

#### Compile HTML

Task name: **[grunt-codekit](https://github.com/fatso83/grunt-codekit)**

Command: `$ grunt html`

- Compiles multiple HTML files inside the **_html-src** directory into **.kit** files
- Converts **.kit** files to **.html** files and moves them to a specific directory

#### Concatenate Javascript

Task name: **[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)**

Command: `$ grunt js`

- Concatenates multiple Javascript files inside the **_js-src** directory into a single minified file
- Moves the resulting JS file to a specific directory

#### Optimise images

Task name: **[grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)**

Command `$ grunt img`

- Optimises all images inside the **_img-src** directory
- Moves the optimised images to a specific directory

## Files hosted on Github

### Handy links

- Official Grunt website
- Node.js website
- Terminal for Mac
- Terminal for OSX
- [Chris Coyier’s article on Grunt is excellent](https://24ways.org/2013/grunt-is-not-weird-and-hard/). This is where I started, so I would highly recommend reading this first.