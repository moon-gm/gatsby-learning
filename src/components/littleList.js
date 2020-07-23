// サイドメニューの子リストの表示処理
import React from 'react';
import { Link } from 'gatsby';

const LittleList = ({listNeeds}) => {
	// 子リスト
	return(
		<li
			className={`${listNeeds.sideList} ${listNeeds.sideListChildren}`}
			onClick={listNeeds.func}
			id={listNeeds.state.page}
		>
			<Link
				to={listNeeds.link}
			>
				<span className={listNeeds.sideListText}>
					{listNeeds.name}
				</span>
			</Link>
		</li>
	);
}

export default LittleList;
