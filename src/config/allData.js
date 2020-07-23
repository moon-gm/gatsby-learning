// 必要データのインポート
import States from './states';
import Pages from './pages';

/**
 * ページ設定情報を返す
 * @param funcs array
 * @name ページの名前
 * @func ページを表示するfunction
 * @state ページのstate
 * @children 子リストがある場合の設定
 */
function AllData(funcs) {
	return (
		[
			// Topページ
			{
				"name": Pages.Top.Name,
				"path": Pages.Top.Path,
				"Component": Pages.Top.Top,
				"func": funcs[0].Top,
				"state": {
					"page": States.page.Top,
				},
			},
			// 1. 環境構築
			{
				"name": Pages.Page1.Name,
				"func": funcs[1].Page1.L1,
				"state": {
					"page": States.page.Page1.L1,
					"list": States.list.list1,
				},
				"children": [
					// 1-1. React.js
					{
						"name": Pages.Page1.Section1.Name,
						"path": Pages.Page1.Section1.Path,
						"Component": Pages.Page1.Section1.Environment,
						"func": funcs[1].Page1.S1,
						"state": {
							"page": States.page.Page1.S1,
							"list": States.list.list1,
						},
					},
					// 1-2. 手動で設定
					{
						"name": Pages.Page1.Section2.Name,
						"path": Pages.Page1.Section2.Path,
						"Component": Pages.Page1.Section2.EnvironmentM,
						"func": funcs[1].Page1.S2,
						"state": {
							"page": States.page.Page1.S2,
							"list": States.list.list1,
						},
					},
					// 1-3. Envの設定
					{
						"name": Pages.Page1.Section3.Name,
						"path": Pages.Page1.Section3.Path,
						"Component": Pages.Page1.Section3.AboutEnv,
						"func": funcs[1].Page1.S3,
						"state": {
							"page": States.page.Page1.S3,
							"list": States.list.list1,
						},
					},
				],
			},
		]
	)
}
export default AllData;
