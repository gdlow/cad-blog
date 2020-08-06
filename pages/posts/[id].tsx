import path from "path";
import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/Date";
import { getAllPostIds, getMarkdownData, MarkdownData } from "../../utils/getMarkdownData";
import { GetStaticProps, GetStaticPaths } from "next"; 

import "../../styles/utils.css";
import "../../styles/posts.css";

const Post: FC<MarkdownData> = ({ postData }) => {
  return (
  		<React.Fragment>
  			<div className="posts-container">
		  		<Head>
		  			<title>{postData.meta.title}</title>
		  		</Head>
		  		<article>
			  		<h1 className="utils-blogHeadingXl" id="posts-title">{postData.meta.title}</h1>
			  		<div className="utils-blogLightText" id="posts-date">
			  			<Date dateString={postData.meta.date} />
			  		</div>
			  		<div className="utils-blogText" dangerouslySetInnerHTML={{ __html: postData.content }} />
		  		</article>
		  		<div className="utils-backToHome">
          <Link href="/blog">
            <a className="utils-undecorated">← Back to home</a>
          </Link>
        </div>
		  	</div>
  		</React.Fragment>
	);
}

export const getStaticPaths : GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = ({ params }) => {
	const filepath: string = params.id + ".md";
	const postData: MarkdownData = getMarkdownData(filepath, "posts/");
	return {
		props: { postData },
	};
}

export default Post;