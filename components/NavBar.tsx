import Link from "next/link";
import FC from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const items: { href: string, name: string }[] = [
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
	return (
		<div id="navbar">
			<div className="container">
				<Link href="/">
					<div id="website-title">
						<FontAwesomeIcon icon={faHippo} size="xs"/>
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
			</div>
		</div>
	);
};

export default NavBar;