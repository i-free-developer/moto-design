import { useParams } from "react-router-dom";
import { PortfolioData } from '../data/site-data'
import Navbar from './Navbar'
import { useDrawerHandler } from './FunctionCollection'
import { SiteInfoCard,  SiteFooter } from './Footer'

export default function RolePage({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const { id } = useParams();
	const item = PortfolioData.desktop.find(e => e.id == id)

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="portfolio-page" className="mx-auto" onClick={closeDrawer}>
				<div className="w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] mx-auto px-[0.32rem] py-[0.48rem] overflow-x-hidden">
					<ImgCard {...item}/>
				</div>
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</section>
		</main>
	)
}

function ImgCard({fullImage, title}) {
	return (
		<div className="">
      		<img loading="lazy" src={fullImage} alt={title} className="w-full h-full object-cover object-center"/>
		</div>
	)
}