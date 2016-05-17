---
layout: post
title:  "My Grunt boilerplate"
description: "Front-end automation"
date:   2016-05-02 08:29:49
category: Thoughts
---

## Why we use Grunt

We use Grunt to automate repetitive tasks such as Sass preprocessing, script minification and image compression. This allows us to write flexible, modular code which speeds up our front-end development time.

## Setting up

No third-party software is required for Grunt as it runs inside the command line. Grunt runs on node.js and runs in the command line. While this may seem daunting, no prior knowledge of node.js is required and Grunt only uses a small amount of commands. [Chris Coyier’s article on Grunt is excellent](https://24ways.org/2013/grunt-is-not-weird-and-hard/). This is where I started, so I would highly recommend reading this first. 

### Using our boilerplate

- Grab the files from our Github repo
- Navigate to your directory in Terminal by manually typing in the path
- You can also drag and drop the folder into Terminal
- Don’t forget to start your command with `cd`

Your command should look  similar to this:

```bash
$ cd /root/to/my/directory/
```

## Specifically, our Grunt setup automates the following tasks:

- Compiling Sass
- Adding in vendor prefixes to CSS rules that still require them
- Minifying CSS
- Combine multiple Javascript files into a single minified file
- Optimising images
- Copying files to relevant build directories
- Refreshing the browser once changes and additions have been made to specific files or directories

## NPM install