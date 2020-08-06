import { FC, useContext } from "react";
import Head from "next/head";
import { stlContext } from "../components/STLContextProvider";
import STLViewer from "stl-viewer";
import SelectedListItem from "../components/SelectedListItem";
import DescriptionCard from "../components/DescriptionCard";
import designs from "../utils/designs/designs";

import "../styles/portfolio.css";

const App: FC<{}> = () => {
  const { current, setCurrent } = useContext(stlContext);
  const chosenDesign = designs[current];

  return (
    <React.Fragment>
      <Head>
        <title>Gerald's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio-container">
        <STLViewer
          className="portfolio-stl-viewer"
          model={chosenDesign.stl_url}
          height={330}
          width={380}
          modelColor="#fdd017"
          backgroundColor="#eaeaea"
          rotate={false}
          orbitControls={true}
        />
        <div className="portfolio-inner-container">    
          <DescriptionCard />
          <SelectedListItem />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
