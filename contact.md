---
layout: page
title: Contact me
permalink: /contact/
---

<form action="https://getsimpleform.com/messages?form_api_token=5f6b628480fc4451b0f89423fd18f545" method="post">

	<input type='hidden' name='redirect_to' value="http://aadotcom:8080/success" />
	<p>Your name</p>
	<input type='text' name='name' />

	<p>Your email address</p>
	<input type='email' name="email" />

	<p>Is your enquiry about a project?</p>
	<input type="checkbox" name="project" />

	<p>Could you give me an estimate of your budget?</p>
	<select name="budget">
		<option value="1000-2500">£1000 - £2500</option>
		<option value="2500-5000">£2500 - £5000</option>
		<option value="5000+">above £5000</option>
	</select>

	<p>Your enquiry</p>
	<textarea name="enquiry"></textarea>

	<input type='submit' value='Send your enquiry' />
</form>
