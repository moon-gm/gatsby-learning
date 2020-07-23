// Global-CSS設定
import './../sass/App.scss'

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
		const newChildren = React.cloneElement(this.props.children, additionalProps);

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
						{newChildren}
					</main>

				</div>

			</div>
		);
	}

}

export default function App({ Component, pageProps }) {
    return (
		<Layout>
			<Component
				{...pageProps}
			/>
		</Layout>
	);
  }
