import { FC, useMemo, HTMLProps } from "react";
import { getMarkdownData, MarkdownData } from "../utils/getMarkdownData";

interface MDContentProps extends HTMLProps<HTMLDivElement> {
	filepath: string;
}

const MDContent: FC<MDContentProps> = ({ filepath, ...divProps }) => {
	const markdownData: MarkdownData = useMemo(
    () => getMarkdownData(filepath),
    [filepath]
  );
	return (
			<div
				dangerouslySetInnerHTML={{ __html: markdownData.content }}
				{...divProps}
			/>
	);
};

export default MDContent;
