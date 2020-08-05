import path from "path";
import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/Date";
import { getAllPostIds, getMarkdownData, MarkdownData } from "../../utils/getMarkdownData";
import { GetStaticProps, GetStaticPaths } from "next"; 

import "../../styles/utils.css";
import "../../styles/blog.css";

const Post: FC<MarkdownData> = ({ postData }) => {
  return (
  		<React.Fragment>
  			<div className="blog-postContainer">
		  		<Head>
		  			<title>{postData.meta.title}</title>
		  		</Head>
		  		<article>
			  		<h1 className="utilStyles-blogHeadingXl" id="blog-postTitle">{postData.meta.title}</h1>
			  		<div className="utilStyles-blogLightText" id="blog-postDate">
			  			<Date dateString={postData.meta.date} />
			  		</div>
			  		<div className="utilStyles-blogText" dangerouslySetInnerHTML={{ __html: postData.content }} />
		  		</article>
		  		<div className="utilStyles-backToHome">
          <Link href="/">
            <a className="utilStyles-undecorated">← Back to home</a>
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