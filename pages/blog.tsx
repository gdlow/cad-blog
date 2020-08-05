import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next"; 
import { FC } from "react";
import Date from "../components/Date";
import MDContent from "../components/MDContent";
import { getSortedPostsData, MarkdownData } from "../utils/getMarkdownData";
import "../styles/blog.css";
import "../styles/utils.css";

const Blog: FC<MarkdownData> = ({ allPostsData }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Gerald's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog-container">
        <MDContent
          className="blog-description"
          id="blog-welcome"
          filepath="blog.md"
        />
        <ul className="utilStyles-list">
          {allPostsData.map(({ meta, content }) => (
            <li className="utilStyles-listItem" key={meta.id}>
              <Link href="/posts/[id]" as={`/posts/${meta.id}`}>
                <a className="utilStyles-undecorated">{meta.title}</a>
              </Link>
              <br />
              <small className="utilStyles-lightText">
                <Date dateString={meta.date} />
              </small>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPostsData: Array<MarkdownData> = getSortedPostsData();
  return {
    props: { allPostsData },
  };
};

export default Blog;