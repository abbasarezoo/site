---
layout: post
title:  "Responsive images using Advanced Custom Fields with Wordpress"
description: "Create a simple function to enhance on your builds."
date:   2016-12-25 08:29:49
category: Skills
---

http://www.aliciaramirez.com/2014/03/advanced-custom-fields-image-object-tutorial/

Wordpress added native responsive image support in version 4.4. Meaning the `srcset` attribute is added to all images inserted via the content editor. It works a treat, until you use Advanced Custom Fields. 

When your create your image custom field you can select “Image Array” (or “Image Object” depending on your version of ACF). This gives us an array of all the image’s values. This is handy, because we can merge some of these values into a neat little function, which ultimately can give us our responsive images.

We can fix this issue with a nice little function.

```php
<?php

function acf_img($img, $echo=false) {
	$html = '';

	if(isset($img['sizes'])) {
		$html= '<img 
				src="' . $img['sizes']['medium_large'] . '"
				srcset="' . $img['url'] . ' 960w, ' . $img['sizes']['medium_large'] . ' 768w, ' . $img['sizes']['medium'] . ' 320w"
				sizes="100vw"
				alt="' . $img['alt'] . '"
			/>';
	}
	if($echo){
		echo $html;
	} else {
		return $html;
	}

}

?>
```

How it works

- Uses ACF image field 

**POLYFILLS FOR OLDER BROWSERS**

Notes: I don’t write PHP for a living, if you feel you can improve upon this code feel free to get in touch. The following methods have been tested on production code.