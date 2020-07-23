import States from "./../../config/states";

// リスト押下時の子リストの表示処理
function selectList(listState) {
	if (this.state.list === listState) {
		this.setState({list: States.list.hide});
	} else {
		this.setState({list: listState});
	}
}

export default selectList;
