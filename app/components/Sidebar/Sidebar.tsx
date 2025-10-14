import { useEffect } from 'react';
import { Link } from 'react-router';

import { sidebarUtil } from './util';
import { useAppContext } from '~/components/AppContext';

export const Sidebar = () => {
	const { description, email, linkedIn, name, shortTitle, siteUrl } = useAppContext();

	// Only run once when the component mounts.
	useEffect(() => sidebarUtil(), []);

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: ignore
		<div className="sidebar" id="sidebar">
			{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
			<header className="site-header" id="masthead">
				<div className="site-branding">
					<Link className="custom-logo-link" to="/">
						<div className="custom-logo">
							<img alt="" loading="lazy" src={`${siteUrl}/images/cropped-thePCBstudio.png`}></img>
						</div>
					</Link>
					<p className="site-title">
						<Link to="/">{shortTitle}</Link>
					</p>
					<p className="site-description">{description}</p>
					<button className="secondary-toggle" type="button">
						Menu and widgets
					</button>
				</div>
			</header>

			{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
			<div className="secondary" id="secondary">
				{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
				<nav className="main-navigation" id="site-navigation">
					<div className="menu-menu-container">
						{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
						<ul className="nav-menu" id="menu-menu">
							{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
							<li
								className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"
								id="menu-item-35"
							>
								<Link to="/contact-us/">Contact Us</Link>
							</li>
						</ul>
					</div>
				</nav>

				{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
				<nav className="social-navigation" id="social-navigation">
					<div className="menu-social-container">
						{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
						<ul className="menu" id="menu-social">
							{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
							<li
								className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"
								id="menu-item-36"
							>
								<a href={linkedIn}>
									<span className="screen-reader-text">LinkedIn</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>

				{/* biome-ignore lint/a11y/useSemanticElements: ignore */}
				{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
				<div className="widget-area" id="widget-area" role="complementary">
					{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
					<aside className="widget widget_contact_info" id="widget_contact_info-3">
						<div itemScope itemType="//schema.org/LocalBusiness">
							<div
								className="confit-address"
								itemProp="address"
								itemScope
								itemType="//schema.org/PostalAddress"
							>
								{name}
							</div>
							<div className="confit-email">
								<a href={`mailto:${email}`}>{email}</a>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
};
