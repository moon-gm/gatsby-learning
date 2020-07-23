import States from "../../config/states";

// ページ(子リストなし)の表示処理
function showPage(pageState) {

	// sessionStorageに保存されている値を取得
	sessionStorage.setItem('pageState', pageState);

	// ページコンポーネントを表示してメニューを非表示
	this.setState({page: pageState});
	this.setState({menu: States.menu.hide});
}

export default showPage;
