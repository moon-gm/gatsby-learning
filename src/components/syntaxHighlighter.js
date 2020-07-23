import React from 'react';
import Highlight from 'react-highlight'

const CodeHighlighter = ({codeString, language}) => {
  return (
	<div className="p code">
		<Highlight className={language}>
			{codeString}
		</Highlight>
	</div>
  );
};
export default CodeHighlighter;
