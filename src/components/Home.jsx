import { useState } from 'react'
import { Link } from "react-router-dom"
import Loading from './Loading'
import Navbar from './Navbar'
import HomePageMobile from './HomePageMobile'
import HomePageDesktop from './HomePageDesktop'
import { HeaderSvgDesktop, HeaderSvgMobile } from './HeaderSvg'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler } from './FunctionCollection'
import { ArrowIcon } from './SocialIconsCollection'

export default function Home({loadingPercentage, isMobileDevice, smallScreenRatioDecimal}) {
	if (loadingPercentage <= 100) {
		return <Loading loadingPercentage={loadingPercentage}/>
	} else {
		return isMobileDevice ? <HomePageMobile smallScreenRatioDecimal={smallScreenRatioDecimal}/> : <HomePageDesktop/>
	}
}