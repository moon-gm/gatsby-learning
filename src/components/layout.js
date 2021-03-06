/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import PropTypes from "prop-types"

// 各種コンポーネント取得
import Parts from './../config/parts';

// 各種設定値取得
import AllData from './../config/allData';
import Functions from './../config/functions';
import States from './../config/states';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		/***** state初期値設定 *****/
		this.state = {
			// ページ表示設定
			page: States.page.Top,
			 // サイドエリア表示設定
			menu: States.menu.hide,
			// サイドエリアの子リスト表示
			list: States.list.hide,
		}

		/***** functionの設定 *****/
		this.funcs = [
			{
				"Top": Functions.Page.bind(this, States.page.Top),
				"Menu": Functions.Menu.bind(this),
			},
			{
				"Page1": {
					"L1": Functions.List.bind(this, States.list.list1),
					"S1": Functions.PageSection.bind(this, States.page.Page1.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page1.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page1.S3),
				},
			},

		];

		/***** ページデータ設定 *****/
		this.allData = AllData(this.funcs);

	}

	render() {
		/***** childrenの設定 *****/
		// childrenに渡すPropsの設定
		const additionalProps = {
			allData: this.allData
		}
		// 子要素を再生成してPropsを渡す設定
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { allData: this.allData })
    );

		return (
			<div className="flex-box">

				{/* サイドエリア */}
				{this.state.menu === States.menu.show && (
					<Parts.Aside
						allData={this.allData}
						states={this.state}
					/>
				)}

				{/* コンテンツエリア */}
				<div className="contents">

					{/* ヘッダーエリア */}
					<Parts.Header
						allData={this.allData}
						states={this.state}
						funcs={this.funcs}
					/>

					{/* メインエリア */}
					<main className="main">
						{childrenWithProps}
					</main>

				</div>

			</div>
		);
	}

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
