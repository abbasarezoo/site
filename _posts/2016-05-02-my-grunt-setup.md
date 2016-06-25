---
layout: post
title:  "Your first front-end Grunt project"
description: "A beginners guide to setting up a Grunt based project using a basic boilerplate with a few simple tasks"
date:   2016-05-02 08:29:49
category: Thoughts
---

## What you need

For this walkthrough you'll need a code editor and a command line application. For the purposes of this article I'll be using Terminal (Mac).

You should have a working knowledge of front-end development. It is also assumed you are familiar with Git and are comfortable pulling repos to your local environment.

## Why I use Grunt

Grunt is known as a 'task-runner' and has thousands of plugins which can be utilised to automate almost any task. I use Grunt to automate repetitive tasks such as code compilation and image compression. 

My choice to run Grunt is based on nothing other than it was the first one I tried. It was easy enough to work with, so it seemed wise to stick with it. There are other task runners available that might be more suitable for your needs.

Ultimately, the payoff of using any task runner is that it will increase the speed of your development dramatically.

Not all projects are the same, so not all Grunt setups are be the same either. This boilerplate lays the foundations to create your own setup on a project-by-project basis.

### Setting up

If you've never used Grunt before you will need to:

- Install [Node.js](https://nodejs.org/en/)
- Install [Grunt's command line interface](http://gruntjs.com/getting-started)

One key thing to note is that Grunt is a command line tool. The good news is no prior knowledge of the command line is required. As Grunt only uses a small amount of commands it's a nice introduction to the command line for beginners.

Now you can fork the starter pack from our Github repo and start automating.

## The boilerplate

### File structure

Below is an example of what the boilerplate file structure looks like. This setup is simply personal preference. There is no magical methodology behind it. The key idea is that there should be no un-compiled files inside our build directory `/www`.

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
Don't forget to edit the Gruntfile if you're going to use your own structure and naming conventions.

### Getting some plugins

All of the plugins Grunt uses are stored in a directory called `/node_modules`. 

You may have noticed there is no directory in the repo you forked. On an ongoing project a `/node_modules` will include thousands of files, which you can store remotely if that's how you like to work. But it's not detrimental to the project if you don't do this.

We can run a single command in Terminal `npm-install` which downloads all of the plugins we need to our local environment. Be sure to add `node_modules` to .gitignore to make sure you don't push to your remote repo.

Once we have the plugins we’re ready to look at our Gruntfile.

### Configuring the Gruntfile

You will notice at the root of the project directory a file named `Gruntfile.js`. This is a configuration file where our tasks are setup. The file should always be named `Gruntfile.js` otherwise Grunt will error when your try to run a task. 

Open up the file and take a look at the basic setup. In our setup we configure each task at the top, then load the dependencies and register each task at the bottom.

#### Exploring and editing the Gruntfile

All the tasks are setup to run out of the box albeit for some slight tweaking to the file itself. Such as changing the directories to which code is compiled to. 

If you're unfamiliar with Javascript you may be overawed by the code inside the Gruntfile. However, because of the simplistic nature of how Grunt tasks are configured, a newbie should be able to navigate and edit the file without too much trouble.

#### Example tasks

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