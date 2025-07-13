import type { FC } from 'react';

import type { Route } from './+types/route';
import { useAppContext } from '~/components/AppContext';
import { SEO } from '~/components/SEO';

import './styles.css';

const title = 'Contact Us';

const ContactUs: FC<Route.ComponentProps> = () => {
	const { email, name, shortTitle } = useAppContext();

	const emailSubject = `Hey, ${name}! Someone has reached out to you on ${shortTitle} website.`;

	return (
		<>
			<SEO title={title} />

			<header className="entry-header">
				<h1 className="entry-title">{title}</h1>
			</header>

			<div className="entry-content">
				<h3>Want to talk? So do we.</h3>
				<p>Fill out the form below and we will reach out as soon as possible.</p>
				<form
					acceptCharset="utf-8"
					action={`https://formspree.io/${email}`}
					id="fs-frm"
					method="post"
					name="simple-contact-form"
				>
					<fieldset id="fs-frm-inputs">
						<label htmlFor="full-name">Full Name</label>
						<input id="full-name" name="name" placeholder="John Doe" required type="text" />

						<label htmlFor="email-address">Email Address</label>
						<input
							id="email-address"
							name="_replyto"
							placeholder="john.doe@example.com"
							required
							type="email"
						/>

						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Tell us what is your story."
							required
							rows={5}
						></textarea>

						<input id="email-subject" name="_subject" type="hidden" value={emailSubject} />
						<input name="_gotcha" style={{ display: 'none' }} type="text" />
					</fieldset>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	);
};

export const meta: Route.MetaFunction = () => [{ title: `${title} | ThePCBStudio – Giving Life to PCB` }];

export default ContactUs;
