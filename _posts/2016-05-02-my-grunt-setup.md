---
layout: post
title:  "My Grunt boilerplate"
description: "Front-end automation"
date:   2016-05-02 08:29:49
category: Thoughts
---

## Why we use Grunt

We use Grunt to automate repetitive tasks such as CSS preprocessing and image compression. This dramatically speeds up our development time. 

Not all projects are the same, so not all Grunt setups are be the same either. Our Grunt boilerplate is a foundation to create your own setup on a project-by-project basis.

Note that the tasks in this boilerplate are primarily front-end orientated. 

## The setup

### Installing Grunt for the first time

Grunt runs on node.js and is a command line tool. If you’re on a Mac you’ll need to fire up Terminal. You may have to install node.js before if you don’t already have it.

While this may seem daunting, no prior knowledge of node.js or the command line is required. Luckily, Grunt only uses a small amount of commands. [Chris Coyier’s article on Grunt is excellent](https://24ways.org/2013/grunt-is-not-weird-and-hard/). This is where I started, so I would highly recommend reading this first.

One key thing to remember is that Grunt needs to be installed on a project by project basis.

### Fork the boilerplate

Our Grunt boilerplate is hosted on our public Github repository.

- Fork the Github repository in a directory on your local machine
- If you’re unfamiliar with Git then check out the Git intro article **(add a link)**
- Navigate to the directory in Terminal by manually typing in the path or by dragging and dropping the folder into the Terminal window
- Don’t forget to start your command with `cd` for both methods

Your command should look similar to this:

```bash
$ cd /root/to/my/directory/
```
Add a GIF/screencast?

### The file structure

```
project
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
└───wireframes
└───www
```

### NPM install

In Terminal, run the command `npm install`. This command will install of the latest version of each Grunt task, or dependancy, locally.

Once this task has completed we’re ready to configure our Gruntfile.

## The Gruntfile

The Gruntfile is a configuration file where our tasks are setup. 

### Tasks:

`grunt css`

- Compile Sass inside `_css-src` to single CSS file
- Add in vendor prefixes and minify CSS using posts
- Set the directory where the resulting CSS file compiles into

`grunt html`

- compile multiple HTML files inside `_html-src` into a single file
- Copy the compiled HTML file to a specific directory

`grunt js

- Concatenate multiple Javascript files inside `_js-src` directory into a single minified file
- Optimise images inside the `_img-src` directory
- Copy compiled and optimised files to relevant build directories
- Watch specific directories for changes and additions and run tasks automatically
- Refresh the browser once changes and additions have been made to specific files or directories

### Examples:

In the below example we are compiling `style.css` from `style.scss` and compiling this to the `www/wp-content/themes/vivid/` directory. 

```js
sass: {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            ‘www/wp-content/themes/vivid/style.css’: ‘_css-src/style.scss’
        }
    }
}
```
To run this task simply run `grunt css` in the command line. We can automate further by running `grunt watch`. This task will watch the `_css-src` directory and run the `grunt css` each time any additions or changes have been made. 