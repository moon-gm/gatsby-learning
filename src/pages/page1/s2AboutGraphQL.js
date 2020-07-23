import React from 'react';
import Layout from './../../components/layout'
import SEO from './../../components/seo'

const EnvironmentManual = ({allData}) => {
	return (
		<Layout>
			<SEO title="1-2" />
			<div className="page-layout">

				<h2 className="h2">
					1. ディレクトリ・ファイル 作成
				</h2>
					<p className="p">
						プロジェクト用のディレクトリを作成し、以下のコマンドを実行し、package.jsonを作成
					</p>
					<p className="p">
						<span className="command">
							$ npm init -y
						</span>
					</p>
					<p className="p">
						以下のコマンドで必要なファイルも作成しておく
					</p>
					<p className="p">
						<span className="command">
							$ touch index.html<br/>
							$ touch app.js
						</span>
					</p>
					<p className="p">
						index.htmlはbodyの中に以下のタグを記載（このタグの中にレンンダリングされていく）
					</p>

					<p className="p">
						app.jsは以下のコードを記入
					</p>

				<h2 className="h2">
					2. reactとreact-domのインストール
				</h2>
					<p className="p">
						Reactを使えるようにする
					</p>
					<p className="p">
						以下のコマンドを実行するとプロジェクト配下にnode_modulesフォルダが作成され、package.jsonのdependenciesにreactとreact-domが記載される
					</p>
					<p className="p">
						<span className="command">
						$ npm install --save react react-dom
						</span>
					</p>

				<h2 className="h2">
					3. Webpackのインストール
				</h2>
					<p className="p">
						ファイルのビルド関連の設定をする
					</p>
					<p className="p">
						以下のコマンドでグローバルにインストール（上手く動作しない場合があるため、グローバルにインストール）
					</p>
					<p className="p">
						<span className="command">
							$ npm install -g webpack-cli
						</span>
					</p>
					<p className="p">
						以下のコマンドで、インストール＆package.jsonに記載
					</p>
					<p className="p">
						<span className="command">
							$ npm install --save-dev webpack<br/>
							$ npm install --save-dev webpack-cli
						</span>
					</p>
					<p className="p">
						以下のコマンドでWebpackの設定ファイルを作成
					</p>
					<p className="p">
						<span className="command">
							$ touch webpack.config.js
						</span>
					</p>
					<p className="p">
						作成されたファイルに以下の内容を追加
					</p>

					<p className="p">
						index.htmlに以下のコードを追加
					</p>

				<h2 className="h2">
					4. Babelのインストール
				</h2>
					<p className="p">
						JSX(xml風のJavascript)で書かれたものをJSに変換する
					</p>
					<p className="p">
						以下のコマンドを実行でBabelをインストール＆package.jsonに記載
					</p>
					<p className="p">
						<span className="command">
							$ npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react
						</span>
					</p>
					<p className="p">
						以下のコマンドで.babelrcファイルを作成し、できたファイルに以下のコードを追加
					</p>
					<p className="p">
						<span className="command">
							$ touch .babelrc
						</span>
					</p>


				<h2 className="h2">
					5. ブラウザのリロード実装
				</h2>
					<p className="p">
						毎回コマンドを実行せずに、コードを更新する度にブラウザのオートリロードをする設定
					</p>
					<p className="p">
						package.jsonに以下のコードを追加
					</p>


				<h2 className="h2">
					6. サーバ起動
				</h2>
					<p className="p">
						以下を実行し、「http://localhost:8080 」にアクセスで画面が表示(app.jsにReact記述した内容が表示)
					</p>
					<p className="p">
						・webpackの実行
					</p>
					<p className="p">
						<span className="command">
							$ npm run build
						</span>
					</p>
					<p className="p">
						・自動リロード
					</p>
					<p className="p">
						<span className="command">
							$ npm start
						</span>
					</p>

			</div>
		</Layout>
	);
}
export default EnvironmentManual;
