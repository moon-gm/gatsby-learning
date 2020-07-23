import React from 'react';
import Router from './../config/routes';
import logo from './../images/gatsby-icon.png'
import Styles from './../sass/parts/header.module.scss';

const Header = ({funcs, states, allData}) => {

	return (
		<header className="header">
			<ul className={Styles.headerList}>

				{/* ヘッダーロゴ - start - */}
					<li className={`${Styles.headerLogo} ${Styles.item}`}>
						<img
							src={logo}
							alt="logo"
							className={`${Styles.animation} ${Styles.logo}`}
						/>
					</li>
				{/* ヘッダーロゴ - end - */}

				{/* ヘッダータイトル - start - */}
					<li className={`${Styles.headerTitle} ${Styles.item}`}>
						<Router.Header
							allData={allData}
							states={states}
						/>
					</li>
				{/* ヘッダータイトル - end - */}

				{/* メニューボタンPC - start - */}
					{
						states.menu === "show" && (
							<li
								className={Styles.menuBtnPC}
								onClick={funcs[0].Menu}
								id="menuBtnPC"
								disabled
							>
								Close Menu ▲
							</li>
						)
					}
					{
						states.menu === "hide" && (
							<li
								className={Styles.menuBtnPC}
								onClick={funcs[0].Menu}
								id="menuBtnPC"
							>
								Open Menu ▼
							</li>
						)
					}
				{/* メニューボタン - end - */}

				{/* メニューボタンSP - start - */}
					<li
						className={Styles.menuBtnSP}
						id="menuBtnSP"
						onClick={funcs[0].Menu}
					>
						≡
					</li>
				{/* メニューボタンSP - end - */}

			</ul>
		</header>
);
}

export default Header;
