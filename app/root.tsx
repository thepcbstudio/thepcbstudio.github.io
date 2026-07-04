import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
import { AppContextProvider } from './components/AppContext';
import { Footer } from './components/Footer';
import { Head } from './components/Head';
import { Sidebar } from './components/Sidebar';

import './styles/root.css';

export const links: Route.LinksFunction = () => [
	{ crossOrigin: 'anonymous', href: '//fonts.gstatic.com', rel: 'preconnect' },
	{ crossOrigin: 'anonymous', href: '//fonts.googleapis.com', rel: 'preconnect' },
	{
		href: '//fonts.googleapis.com/css?family=Noto+Sans%3A400italic%2C700italic%2C400%2C700%7CNoto+Serif%3A400italic%2C700italic%2C400%2C700%7CInconsolata%3A400%2C700&#038;subset=latin%2Clatin-ext',
		media: 'all',
		rel: 'stylesheet',
		type: 'text/css',
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<AppContextProvider>
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta content="width=device-width, initial-scale=1" name="viewport" />
					<Meta />
					<Links />
					<Head />
				</head>
				<body className="page-template-default page custom-background wp-custom-logo wp-embed-responsive">
					<div className="hfeed site" id="page">
						<a className="skip-link screen-reader-text" href="#content">
							Skip to content
						</a>

						<Sidebar />

						<div className="site-content" id="content">
							<div className="content-area" id="primary">
								<main className="site-main" id="main">
									<article className="page type-page status-publish hentry">{children}</article>
								</main>
							</div>
						</div>
					</div>

					<Footer />

					<ScrollRestoration />
					<Scripts />
				</body>
			</html>
		</AppContextProvider>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
