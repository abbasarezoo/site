# Wordpress starter pack

This setup uses Git for version control and Grunt to compile CSS, optimise JS and images. All run through the command line. Once you've set up your theme folder you'll need open `Gruntfile.js` and replace `YOUR_THEME` with your theme directory.

**Note - all work is done via the command line.**

# Individual Grunt tasks

## Sass

Sass files are located in the `_css-src/sass` directory. Running `$ grunt css` will compile and minify all Sass files in this directory and compile to `style.css` inside your Wordpress theme directory.

## Images

Images used in your theme need to be placed in the `_img-src` directory first. Running `$ grunt img` will compress and optimise all images in this directory and compile them to the `images` directory in your Wordpress theme directory.

## Javascript

All local Javascript files are located in the `_js-src` directory. Running `$ grunt js` will concatenate all files into one file and compress this file and compile it to the `scripts` directory in your Wordpress theme directory.

For all 3rd party scripts such as jQuery, Modernizr, Slick etc. link to a CDN. We try to avoid keeping these locally. We tend to use cdnjs.com for most of our 3rd party scripts. Using other CDNs is fine as long as they're stable and reliable.

## Grunt watch

Running `$ grunt watch` will compile all files into your Wordpress theme directory as you add or change files.

**No un-compiled code or un-optimised images should go into the Wordpress theme directory.**

### Sass guidelines

#### Keep it modular

No:

```css
@import "all-styles";
```

Yes:

```css
@import "modules/repeatable-modules/gallery";
@import "modules/repeatable-modules/buttons";

@import "modules/full-width-modules/call-to-action";
@import "modules/full-width-modules/lrg-img-gallery";

@import "modules/sidebar-modules/price-module";
@import "modules/sidebar-modules/sub-nav";
```

#### Naming conventions

Try and describe the element you're styling as best you can like:

```css
.main-nav {
	// Your styles
}

.main-nav--list {
	// Your styles
}
```

Stuff like this is fine:

```css
.main-nav ul li {
	// Your styles
}
```

Avoid this:

```css
.black {
	background-color: $black;
}
```

#### Media queries

There is a partial inside `_css-src/sass/ui/` called `_breakpoints.scss` that includes our pre-defined media query measurements and mixins. Feel free to adapt the breakpoints. But the naming conventions are pretty standard across our builds. 

**Don't get too hung up on the naming conventions. They are what they are. The browser doesn't care.**

The mixin is used by indenting it within the parent style declaration like so:

```css
.main-nav {
	height: 4rem;

		@include mq(xs) {
			height: 8rem;
		}

}
```

#### Mobile first

Always write CSS mobile first. Layer up the functionality rather the override.

No:

```css
.main-nav {
	width: 800px;
	float: left;

		@include mq(sm) {
			width: auto;
			float: none;
		}

}
```

Yes:

```css
.main-nav {

	@include mq(md) {
		width: 800px;
		float: left;
	}

}
```

#### Use percentages and REMs. REMs reset, so 1rem = 10px. No fixed pixel measurements unless completely necessary

Try to avoid using percentage heights. Results have never been friendly.

No:

```css
.main-nav {
	width: 800px;
	height: 200px;
	padding: 0 20px;
}
```

Yes:

```css 
.main-nav {
	width: 50%;
	height: 20rem;
	padding: 0 2rem;
}
```

#### Indentation - no more than three levels deep, avoid indenting class names as much as possible and space where necessary for better legibility

Feel free to adapt syntax to your style. We tend to use an adaptation of the BEM methodology. But we're not strict about this.

No:

```css
.main-nav {
	.main-nav--list {
		.main-nav--list-item {
			.main-nav--list-item-link {
				color: $red;
			}
		}
	}
}
```

Better:

```css 
.main-nav {
	
	li a {
		color: $red;
	}

}
```

Ideal:

```css
.main-nav--link {
	color: $red;
}
```

#### Specificity - keep it low

No:

```css
#header a {
	color: $red;
}
```

Maybe:

```css
.main-nav li a {
	color: $red;
}
```

Better:

```css
.main-nav-link {
	color: $red;
}
```

#### Extend first, include last, space both

No:

```css
.main-nav {
	color: red;
	@include font-size($ft-2);
	text-decoration: underline;
	@extend %btn;
}
```

Yes:

```css
.main-nav {
	@extend %btn;

	color: red;
	text-decoration: underline;

	@include font-size($ft-2);
}
```

#### Indent and space out media query mixins (easier to read)

No:

```css
.main-nav {
	width: 40rem;
	height: 40rem;
	@include mq(lg){
		width: 60rem;
	}
}
```

Yes:

```css
.main-nav {
	width: 40rem;
	height: 40rem;

		@include mq(lg) {
			width: 60rem;
		}

}
```