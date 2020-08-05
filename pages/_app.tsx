import { AppProps } from "next/app";
import Container from "../components/Container";
import STLContextProvider from "../components/STLContextProvider";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "skeleton-css/css/skeleton.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  	<Container>
  		<STLContextProvider>
  			<Component {...pageProps} />
  		</STLContextProvider>
  	</Container>
	);
}

export default MyApp
