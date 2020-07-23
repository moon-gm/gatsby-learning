import React from 'react';

// ヘッダータイトルのルーティング設定
const HeaderRouter = ({allData, states}) => {
	return (
		<>
			{ // 全ページ設定情報（allData）をループして表示するヘッダータイトルを設定
				allData.map(pageData => {
					// pageDataに子リスト(children)がない場合のルーティング
					if (pageData.children === void 0) {
						return (
							<React.Fragment key={`page${pageData.state.page}`}>
								{states.page === pageData.state.page && pageData.name}
							</React.Fragment>
						);
					}

					// pageDataに子リスト(children)がある場合のルーティング
					else {
						return (
							<React.Fragment key={`page${pageData.state.page}`}>
								{ // 子リスト(children)がある個別ページ設定情報（pageData）をループして表示するヘッダータイトルを設定
									pageData.children.map(pageDataWithC => {
										return (
											<React.Fragment key={`page${pageDataWithC.state.page}`}>
												{states.page === pageDataWithC.state.page && pageDataWithC.name}
											</React.Fragment>
										);
									})
								}
							</React.Fragment>
						);
					}
				})
			}
		</>
	);
}

export default HeaderRouter;
