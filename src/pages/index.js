import React from "react"
import SEO from './../components/seo'
import Layout from './../components/layout'
import logo from './../images/gatsby-icon.png'
import Styles from './../sass/pages/index.module.scss'
import Parts from './../config/parts';
import urls from './../config/outerUrls';
import SwipeableViews from 'react-swipeable-views';

export default function Home({allData}) {
  return (
	<Layout>
		<SEO title="Home" />
		<div className={Styles.AppHeader}>
		<SwipeableViews enableMouseEvents index={2}>
				<div className={Styles.mainTitle}>
					<p onClick={() => window.location.href=urls.MySite.ReactLearning}>
						React Learning
					</p>
					<p className={Styles.subTitle}>
						〜 ↑ Click to React.js site ↑ 〜<br/>
						◀︎ Swipe here
					</p>
				</div>
				<div className={Styles.mainTitle}>
					<p onClick={() => window.location.href=urls.MySite.NextLearning}>
						Next Learning
					</p>
					<p className={Styles.subTitle}>
						〜 ↑ Click to Next.js site ↑ 〜<br/>
						◀︎ Swipe here ▶︎
					</p>
				</div>
				<div className={Styles.mainTitle}>
					<p>
						Gatsby Learning
					</p>
					<p className={Styles.subTitle}>
						〜 This site 〜<br/>
						Swipe here ▶︎
					</p>
				</div>
			</SwipeableViews>
			<img
				src={logo}
				className={Styles.AppLogo}
				alt="logo"
			/>
			<Parts.OuterLink
				url={urls.GatsbyOfficial.Top}
				linkText="> Go to Official"
			/>
		</div>
	</Layout>
  )
}
