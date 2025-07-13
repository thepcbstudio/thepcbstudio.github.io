import type { FC } from 'react';

import type { Route } from './+types/_index';
import { useAppContext } from '~/components/AppContext';
import { SEO } from '~/components/SEO';

const title = 'Home';

const Thumbnail: FC = () => {
	const { siteUrl } = useAppContext();

	return (
		<div className="attachment-post-thumbnail size-post-thumbnail wp-post-image gatsby-image-wrapper">
			<img alt="" loading="lazy" src={`${siteUrl}/images/givingLifeToPCB.png`} />
		</div>
	);
};

const Root: FC<Route.ComponentProps> = () => {
	return (
		<>
			<SEO title={title} />

			<div className="post-thumbnail	">
				<Thumbnail />
			</div>

			<div className="entry-content">
				<h3>Our Services</h3>
				<ul>
					<li>Expertise in PCB Layout Designing. We can make your ideas happen!</li>
					<li>16+ years of industry experience. So you will be in good hands.</li>
					<li>Collaboration with domestic &amp; offshore clients as well as contract manufacturers.</li>
					<li>
						Knowledge of advanced layout tools like PADS, Boardstation, Xpedition, Altium Designer, Allegro,
						Valor, and Eagle etc.
					</li>
					<li>Highest quality standards in the industry.</li>
				</ul>
			</div>
		</>
	);
};

export const meta: Route.MetaFunction = () => [{ title: `${title} | ThePCBStudio – Giving Life to PCB` }];

export default Root;
