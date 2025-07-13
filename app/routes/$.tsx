import type { FC } from 'react';

import type { Route } from './+types/$';
import { SEO } from '~/components/SEO';

const title = '404: Not found';

const NotFound: FC = () => {
	return (
		<>
			<SEO title={title} />

			<header className="entry-header">
				<h1 className="entry-title">NOT FOUND</h1>
			</header>

			<div className="entry-content">The page you're looking for, doesn't exist.</div>
		</>
	);
};

export const meta: Route.MetaFunction = () => [{ title: `${title} | ThePCBStudio – Giving Life to PCB` }];

export default NotFound;
