---
layout: post
title:  "My front-end Grunt setup"
description: "Compile, concatenate and compress."
date:   2016-05-02 08:29:49
category: Thoughts
---

First of all if you have no prior knowledge of using Grunt then I highly recommend Chris Coyier’s article on 24ways that I used as a starting point. He explains it in a much better way than I probably could.

My two main uses for using Grunt is to speed up the front-end build time and to help with website performance.

## My Grunt setup automates the following tasks:

- Compiling Sass
- Adding in vendor prefixes to CSS rules that still require them
- Minifying CSS
- Combine multiple Javascript files into a single minified file
- Optimising images
- Copying files to relevant build directories
- Refreshing the browser once changes and additions have been made to specific files or directories

## The Gruntfile


