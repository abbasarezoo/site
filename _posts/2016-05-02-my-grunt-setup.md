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

In Terminal, run the command `$ npm install`. This command will install of the latest version of each Grunt task, or dependancy, locally.

Once this task has completed we’re ready to configure our Gruntfile.

### The Gruntfile

The Gruntfile is a configuration file where our tasks are setup.  Open up the file and take a look at the basic setup. In our setup we configure each task at the top, then load the dependencies and register each task at the bottom.

## Running tasks

### Compile CSS

Task name: **[grunt-sass](https://github.com/sindresorhus/grunt-sass)**

Command: `$ grunt css`

- Compiles Sass files inside the **_css-src** directory to CSS files
- Adds in vendor prefixes and minify CSS using posts
- Compiles the resulting CSS files to a specific directory

### Compile HTML

Task name: **[grunt-codekit](https://github.com/fatso83/grunt-codekit)**

Command: `$ grunt html`

- Compiles multiple HTML files inside the **_html-src** directory into **.kit** files
- Converts **.kit** files to **.html** files and moves them to a specific directory

### Concatenate Javascript

Task name: **[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)**

Command: `$ grunt js`

- Concatenates multiple Javascript files inside the **_js-src** directory into a single minified file
- Moves the resulting JS file to a specific directory