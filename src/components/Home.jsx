import Loading from './Loading'
import HomePageMobile from './HomePageMobile'
import HomePageDesktop from './HomePageDesktop'

export default function Home({loadingPercentage, isMobileDevice, smallScreenRatioDecimal}) {
	if (loadingPercentage <= 100) {
		return <Loading loadingPercentage={loadingPercentage}/>
	} else {
		return isMobileDevice ? <HomePageMobile smallScreenRatioDecimal={smallScreenRatioDecimal}/> : <HomePageDesktop/>
	}
}
