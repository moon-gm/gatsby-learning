import React from 'react';
import Layout from './../../components/layout'
import SEO from './../../components/seo'
import urls from './../../config/outerUrls'
import codes from './../../config/codes'
import Parts from './../../config/parts'

const Environment = ({allData}) => {
	return (
		<Layout>
			<SEO title="1-1" />
			<div className="page-layout">

				<h2 className="h2">
					1. create-next-appをインストール
				</h2>
					<p className="p">
						{console.log(allData)}
						以下をターミナルに入力してインストール
					</p>
					<p className="p">
						<span className="command">
							$ npm install -g create-react-app
						</span>
					</p>
					<p className="p">
						以下でインストールされているか確認（プロジェクトを作成するようにコンソールメッセージが出ればOK）
					</p>
					<p className="p">
						<span className="command">
							$ create-next-app -v
						</span>
					</p>

				<h2 className="h2">
					2. プロジェクトを作成
				</h2>
					<p className="p">
						プロジェクトを作成するディレクトリに移動し、以下のコマンドを実行
					</p>
					<p className="p">
						以下でインストールされているか確認（プロジェクトを作成するようにコンソールメッセージが出ればOK）
					</p>
					<p className="p">
						<span className="command">
							$ create-next-app [作成するプロジェクト名]
						</span>
					</p>
					<p className="p">
						※ 以下を入力した場合、create-next-appをローカルインストールせずにプロジェクト作成できる
					</p>
					<p className="p">
						<span className="command">
							$ npx create-next-app [作成するプロジェクト名]
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
							$ npm run dev
						</span>
					</p>
					<p className="p">
						サーバを停止するときは、「Ctrl + C」を押す
					</p>

				<h2 className="h2">
					4. 画面表示確認
				</h2>
					<p className="p">
						「http://localhost:3000」にアクセスして以下の画面表示ができていれば成功
					</p>
					<div className="img-box">
						<img src="/screen.png" alt="初期表示画面" />
					</div>

				<h2 className="h2">
					5. +α 〜 Sassを導入 〜
				</h2>
					<p className="p">
						<span className="command">
							$ npm install node-sass --save --dev<br/>
							$ npm install @zeit/next-sass --save
						</span>
					</p>
					<p className="p">
						上記コマンド入力し、ルートディレクトリ の「next.config.js」に以下のコードを設定することで使用可能となる
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
							以下のコマンドを実行で、プロダクション用ビルドがプロジェクトディレクトリの「.next」フォルダの中に作成される
						</p>
						<p className="p">
							<span className="command">
								$ npm run build
							</span>
						</p>
						<p className="p">
							サーバーサイドの処理がない場合は、上記コマンドの後に以下のコマンドを実行すると、「out」フォルダが作成され、buildファイルが格納される
						</p>
						<p className="p">
							<span className="command">
								$ npm run export
							</span>
						</p>
						<p className="p">
							コマンドがない場合は、「package.json」に以下のコードを追加することで、実行できるようになる
						</p>
						<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page1.Section1.code2}
						/>

					<h3 className="h3">
						6-2. ローカルで確認
					</h3>
						<p className="p">
							以下のコマンドを実行し、http://localhost:3000 にアクセスすることでプロダクション用ビルドの内容を確認できる
						</p>
						<p className="p">
							<span className="command">
								$ npm run start
							</span>
						</p>
					<h3 className="h3">
						6-3. Gihub Pagesにデプロイ
					</h3>
						<p className="p">
							上記の「out」フォルダをgitにプッシュして公開するのみでOK
						</p>
					<h3 className="h3">
						6-4. Vercelの公式サイトでデプロイ
					</h3>
						<p className="p">
							以下の手順にしたがって作業するだけで、Next.jsのアプリをデプロイできる<br/>
							②以降の作業はチュートリアルがあるので、すぐに分かる
						</p>
						<p className="p">
							① プロジェクトをGithub/Gitlabなどにプッシュする<br/>
							② Vercelの公式デプロイ用サイトにアクセスし、上記でプッシュしたアカウントで登録する<br/>
							③ 登録してログインしたら、上記プロジェクトのリポジトリにアクセスできるようにする<br/>
							④ 何のフレームワークを使用しているか選択（Next.js）<br/>
							⑤ ビルド時のコマンドを入力（デフォルトを変えていなければ、入力しなくてOK）<br/>
							⑥ 内容を確認し、デプロイボタンを押下するのみで、コマンドを実行し、デプロイしてくれる<br/>
						</p>
						<p className="p">
							<Parts.OuterLink
								url={urls.NextOfficial.Deploy}
								linkText="? Vercel公式デプロイ"
							/>
						</p>

			</div>
		</Layout>
	);
}

export default Environment;
