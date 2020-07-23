import States from "./../config/states";

// サイドエリアの表示処理
function showMenu() {
	if (this.state.menu === States.menu.hide){
		this.setState({menu: States.menu.show});
	} else {
		this.setState({menu: States.menu.hide});
	}
}

export default showMenu;
