import Link from "next/link";
import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const items: { href: string; name: string }[] = [
	{
		href: "/portfolio",
		name: "portfolio",
	},
	{
		href: "/blog",
		name: "blog",
	},
	{
		href: "/cv.pdf",
		name: "cv",
	},
];

const NavBar: FC<{}> = () => {
	const [isNavBarMenuVisible, setNavBarMenuVisible] = useState(false);
	const onNavBarMenuTriggerChange = ({ target: { checked } }) => {
		setNavBarMenuVisible(checked);
	};

	return (
		<div id="navbar">
			<div className="container">
				<Link href="/">
					<div id="website-title">
						<FontAwesomeIcon icon={faHippo}  />
					</div>
				</Link>
				<div id="navbar-links-container">
					{items.map(({ href, name }) => (
						<div className="navbar-link" key={href}>
							<Link href={href}>
								<a className="undecorated">{name}</a>
							</Link>
						</div>
					))}
				</div>
				<div id="navbar-menu-trigger-wrapper">
					<input
						id="navbar-menu-trigger"
						type="checkbox"
						onChange={onNavBarMenuTriggerChange}
					/>
						<label htmlFor="navbar-menu-trigger">
							<FontAwesomeIcon
								style={isNavBarMenuVisible ? { display: "none" } : {}}
								icon={faBars}
								size="xs"
							/>
							<FontAwesomeIcon
								style={isNavBarMenuVisible ? {} : { display: "none" }}
								icon={faTimes}
								size="xs"
							/>
						</label>
				</div>
			</div>
			<ul
			className="navbar-menu"
			style={isNavBarMenuVisible ? {} : { display:"none" }}
			>
				{items.map(({href, name}) => (
					<li className="navbar-menu-item" key={href}>
						<Link href={href}>
							<a className="undecorated">{name}</a>
						</Link>			
					</li>
					))}
			</ul>
		</div>
	);
};

export default NavBar;
