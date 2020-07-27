import React from 'react';
import Layout from './../../components/layout'
import SEO from './../../components/seo'
import screen from './../../images/screen.png'
import urls from './../../config/outerUrls'
import codes from './../../config/codes'
import Parts from './../../config/parts'

const Environment = ({allData}) => {
	return (
		<Layout>
			<SEO title="1-1" />
			<div className="page-layout">

				<p className="p">
					Gatsby.jsはFacebook社が開発したReactフレームワークである。
					ブログなどのサーバーサイドを用いない静的なサイトを作成するのに適している。
					GraphQLというAPIを用いてジェネレイトするのが最大の特徴。
				</p>
				<h2 className="h2">
					1. gatsby-cliをインストール
				</h2>
					<p className="p">
						以下をターミナルに入力してインストール
					</p>
					<p className="p">
						<span className="command">
							$ npm install -g gatsby-cli
						</span>
					</p>
					<p className="p">
						以下でインストールされているか確認
					</p>
					<p className="p">
						<span className="command">
							$ gatsby -v
						</span>
					</p>

				<h2 className="h2">
					2. プロジェクトを作成
				</h2>
					<p className="p">
						プロジェクトを作成するディレクトリに移動し、以下のコマンドを実行
					</p>
					<p className="p">
						<span className="command">
							$ gatsby new [作成するプロジェクト名]
						</span>
					</p>
					<p className="p">
						※ 以下を入力した場合、gatsby-cliをローカルインストールせずにプロジェクト作成できる
					</p>
					<p className="p">
						<span className="command">
							$ npx gatsby new [作成するプロジェクト名]
						</span>
					</p>

				<h2 className="h2">
					3. サーバを起動
				</h2>
					<p className="p">
						プロジェクトのディレクトリに移動し以下のコマンドを実行
					</p>
					<p className="p">
						<span className="command">
							$ gatsby develop / npm run develop
						</span>
					</p>
					<p className="p">
						サーバを停止するときは、「Ctrl + C」を押す
					</p>

				<h2 className="h2">
					4. 画面表示確認
				</h2>
					<p className="p">
						「http://localhost:8000」にアクセスして以下の画面表示ができていれば成功
					</p>
					<p className="p">
						※今回、デフォルトを使用し、「gatsby default starter」というテーマを用いているため以下の画面となる<br/>
						他にも多数テンプレートが公式で用意されている
					</p>
					<p className="p">
						<Parts.OuterLink
							url={urls.GatsbyOfficial.Template}
							linkText="? Gatsby公式スターターテンプレート"
						/>
					</p>
					<div className="img-box">
						<img src={screen} alt="初期表示画面" />
					</div>

				<h2 className="h2">
					5. +α 〜 Sassを導入 〜
				</h2>
					<p className="p">
						<span className="command">
							$ npm install node-sass gatsby-plugin-sass --save 
						</span>
					</p>
					<p className="p">
						上記コマンド入力し、ルートディレクトリ の「gatsby-config.js」に以下のコードを設定することで使用可能となる
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page1.Section1.code1}
					/>

				<h2 className="h2">
					6. サーバにデプロイ
				</h2>
					<h3 className="h3">
						6-1. プロダクション用をビルド
					</h3>
						<p className="p">
							以下のコマンドを実行で、プロダクション用ビルドがプロジェクトディレクトリの「public」フォルダの中に作成される
						</p>
						<p className="p">
							<span className="command">
								$ npm run build
							</span>
						</p>

					<h3 className="h3">
						6-2. ローカルで確認
					</h3>
						<p className="p">
							以下のコマンドを実行し、http://localhost:5000 にアクセスすることでプロダクション用ビルドの内容を確認できる
						</p>
						<p className="p">
							<span className="command">
								$ npm run start
							</span>
						</p>
					<h3 className="h3">
						6-3. サーバーにデプロイ
					</h3>
						<p className="p">
							上記の「public」フォルダをgitにプッシュして公開するのみでOK
						</p>
			</div>
		</Layout>
	);
}

export default Environment;
