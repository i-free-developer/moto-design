import { useState } from 'react'
import { Link } from "react-router-dom"
import Loading from './Loading'
import Navbar from './Navbar'
import HomePageMobile from './HomePageMobile'
import HomePageDesktop from './HomePageDesktop'
import { HeaderSvgDesktop, HeaderSvgMobile } from './HeaderSvg'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler, useScreenRatio } from './FunctionCollection'
import { ArrowIcon } from './SocialIconsCollection'

const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}
const verticalClasses = {initial: '', opened: 'vertical-element-in', closed: 'vertical-element-out'}
const serviceClasses = {initial: '', opened: 'horizontal-bar-out', closed: 'horizontal-bar-in'}

export default function Home({loadingPercentage}) {
	// const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	// const headerClassName = headerClasses[drawerStatus]
	// const serviceClassName = serviceClasses[drawerStatus]
	// const verticalClassName = verticalClasses[drawerStatus]
	const {isMobileDevice, smallScreenRatioDecimal} = useScreenRatio()

	if (loadingPercentage <= 100) {
		return <Loading loadingPercentage={loadingPercentage}/>
	} else {
		return isMobileDevice ? <HomePageMobile smallScreenRatioDecimal={smallScreenRatioDecimal}/> : <HomePageDesktop/>
	}
}