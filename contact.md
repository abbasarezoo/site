---
layout: contact
title: Contact
alt_title: Let's get to work
permalink: /contact/
---

<div class="form">
	<form action="https://getsimpleform.com/messages?form_api_token=5f6b628480fc4451b0f89423fd18f545" method="post">
		<input type='hidden' name='redirect_to' value="http://aadotcom:8080/success" />
		<div class="form-row">
			<p>Your name</p>
			<input type='text' name='name' />
		</div>
		<div class="form-row">
			<p>Your email address</p>
			<input type='email' name="email" />
		</div>
		<div class="form-row">
			<p>Is your enquiry about a project?</p>
			<label class="checkbox-outer">
			<input type="checkbox" name="project" />
			<div class="checkbox">
				<span>&#10005;</span>
			</div>
			</label>
		</div>
		<div class="form-row">
			<p>Could you give me an estimate of your budget?</p>
			<div class="select">
				<select name="budget">
					<option value="None yet">I don't have one yet</option>
					<option value="5000+">above £5000</option>
					<option value="0-5000">below £5000</option>
				</select>
			</div>
		</div>
		<div class="form-row">
			<p>Your enquiry</p>
			<textarea name="enquiry"></textarea>
		</div>
		<div class="form-row">
			<input type='submit' value='Send your enquiry' />
		</div>
	</form>
</div>
