import React from 'react';

// ルーティングするコンポーネントのインポート
import LittleList from './../components/littleList'

// 子リストのルーティング設定
const LittleListRouter = ({listNeeds, states}) => {

	return (
		<>
			{listNeeds.state.list && states.list === listNeeds.state.list && <LittleList listNeeds={listNeeds} />}
		</>
	);
}

export default LittleListRouter;
