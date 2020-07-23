/** Page Componentインポート **/
// Topページ
import Top from '../pages/index';
// Page1
import Environment from '../pages/page1/s1Environment';
import AboutGraphQL from '../pages/page1/s2AboutGraphQL';
import AboutEnv from '../pages/page1/s3AboutEnv';
// Maintenance page
import Maintenance from '../pages/index';

/** Page Component設定 **/
export default {
	// Topページ
	Top: {
		Name: " Gatsby Learning",
		Path: "/",
		Top: Top,
	},
	// 1. 環境構築ページ
	Page1: {
		Name: "1. 環境構築",
		Section1: {
			Name: "1-1. Gatsby.jsとは",
			Path: "/page1/s1Environment",
			Environment: Environment,
		},
		Section2: {
			Name: "1-2. GraphQLの概要",
			Path: "/page1/s2AboutGraphQL",
			AboutGraphQL: AboutGraphQL,
		},
		Section3: {
			Name: "1-3. Envの設定",
			Path: "/page1/s3AboutEnv",
			AboutEnv: AboutEnv,
		},
	},
};
