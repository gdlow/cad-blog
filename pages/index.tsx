import Head from "next/head";
import { FC } from "react";
import MDContent from "../components/MDContent";
import "../styles/index.css";
import "../styles/utils.css";

const Index: FC<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Gerald's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="index-container">
        <img
          src="/images/profile.jpg"
          className="index-headerHomeImage utils-borderCircle"
          alt="Gerald Low"
        />
        <MDContent
          className="index-description"
          id="index-welcome"
          filepath="welcome.md"
        />
      </div>
    </React.Fragment>
  );
};

export default Index;
