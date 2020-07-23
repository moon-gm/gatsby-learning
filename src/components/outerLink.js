import React from "react"

// 外部リンク設定
const OuterLink = ({url, linkText}) => {
	return (
		<a
			href={url}
			rel="noopener noreferrer"
			target="_blank"
		>
			{linkText}
		</a>
	);
}
export default OuterLink;
