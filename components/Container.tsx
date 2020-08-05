import dynamic from "next/dynamic";
import { FC } from "react";

const NavBar = dynamic(import("./NavBar"), { ssr: false });

const Container: FC<{}> = ({ children }) => {
	return (
		<div id="wrapper">
			<NavBar/>
			<div className="container">{children}</div>
		</div>
	);
}

export default Container;