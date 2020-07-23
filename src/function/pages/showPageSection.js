import States from "./../../config/states";

// 子リストのページの表示処理
function showPageSection(section) {
	// sessionStorageに保存されている値を取得
	sessionStorage.setItem('pageState', section);

	// ページコンポーネントを表示してメニューを非表示
	this.setState({page: section});
	this.setState({menu: States.menu.hide});

	// 画面の最上部を表示
	window.scrollTo(0, 0);
}

export default showPageSection;
