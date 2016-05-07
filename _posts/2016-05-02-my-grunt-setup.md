---
layout: post
title:  "My front-end Grunt setup"
description: "Compile, concatenate and compress."
date:   2016-05-02 08:29:49
category: Thoughts
---

First of all if you have no prior knowledge of using Grunt then I highly recommend Chris Coyier’s article on 24ways that I used as a starting point. He explains it in a much better way than I probably could.

My Grunt setup automates the following tasks:
- Compiling Sass to CSS
- Adding in vendor prefixes to CSS rules that still require them
- Concatenating multiple Javascript files into a single minified file
- Optimising images (SVG, PNG and JPG)
- Copying compiling files to the relevant build directory
- Refreshing the browser once changes have been made to specific files or directories

What this allows me to do:

I like to split my CSS down to granular level. This is personal preference, but I feel it makes the CSS a lot more flexible and easier to manage.

For example the contents of my style.scss file could look something like this:

```css

@import “ui/normalize’;
@import “ui/breakpoints’;
@import “ui/colors’;
@import “ui/variables’;

@import “plugins/slick’;

@import “modules/repeatable-modules/social-panel’;
@import “modules/footer-modules/signoff’;

```
