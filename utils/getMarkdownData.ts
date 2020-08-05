import fs from "fs";
import path from "path";
import { Converter } from "showdown";

export interface MarkdownData {
	meta: { [s: string]: any };
	content: string;
}

export const getMarkdownData = (filepath: string, innerDir?: string): MarkdownData => {
	const converter: Converter = new Converter({ metadata: true });
	const rawMarkdown: string = require(`../md/${innerDir ?? ""}${filepath}`).default;
	const content: string = converter.makeHtml(rawMarkdown);
	const meta: { [s: string]: any } = converter.getMetadata();
	meta.id = filepath.replace(/\.md$/, '');
	return { meta, content };
}

export const getSortedPostsData = () : Array<MarkdownData> => {
	const postsDirectory: string = path.join(process.cwd(), "md/posts");
	const filepaths: Array<string> = fs.readdirSync(postsDirectory);
	const allPostsData = filepaths.map(filepath => getMarkdownData(filepath, "posts/"));
	return allPostsData.sort((a, b) => a.meta.date < b.meta.date ? 1 : -1);
}

export const getAllPostIds = () => {
	const postsDirectory: string = path.join(process.cwd(), "md/posts");
	const fileNames = fs.readdirSync(postsDirectory);

  	return fileNames.map(fileName => {
    	return {
      		params: {
        		id: fileName.replace(/\.md$/, ''),
      		},
    	};
  	});
}