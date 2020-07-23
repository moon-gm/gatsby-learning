import React from 'react';
import Layout from './../../components/layout'
import SEO from './../../components/seo'

const AboutEnv = ({allData}) => {
	return (
		<Layout>
			<SEO title="1-3" />
			<div className="page-layout">

				<h2 className="h2">
					1. envファイルの作成
				</h2>
					<p className="p">
						環境に合わせてルートディレクトリに以下のようなファイル作成する
					</p>
					<p className="p">
						.env.development・・・ローカル開発環境<br/>
						.env.production・・・本番環境
					</p>
					<p className="p">
						※git管理している場合、.gitignoreに入れておく方が良い
					</p>

				<h2 className="h2">
					2. KEYの設定ルール
				</h2>
					<p className="p">
						作成したファイルに記載するKEYは必ず「REACT_APP_」を頭につけること
					</p>
					<div className="p">
						Ex.)
					</div>


				<h2 className="h2">
					3. 呼び出し方
				</h2>
					<p className="p">
						以下のような記述で呼び出せる
					</p>

					<div className="p">
						Ex.)
					</div>

					<p className="p">
						上記で「React Learning」を取得できる
					</p>

			</div>
		</Layout>
	);
}
export default AboutEnv;
