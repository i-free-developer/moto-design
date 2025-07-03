import { Link } from "react-router-dom"
import Navbar from './Navbar'
import { HeaderSvgDesktop } from './HeaderSvg'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler, useScreenRatio, useHoverHandler } from './FunctionCollection'
import { ArrowIcon } from './SocialIconsCollection'

const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}
// const verticalClasses = {initial: '', opened: 'vertical-element-in', closed: 'vertical-element-out'}
// const serviceClasses = {initial: '', opened: 'horizontal-bar-out', closed: 'horizontal-bar-in'}

export default function HomePageDesktop() {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const {bigScreenRatioDecimal} = useScreenRatio()
	const headerClassName = headerClasses[drawerStatus]

	return (
		<main id="home" className="min-h-screen lg:max-h-screen overflow-hidden relative">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} closeDrawer={closeDrawer} bigScreenRatioDecimal={bigScreenRatioDecimal}/>
			<HomeSectionDesktop headerClassName={headerClassName} onCloseDrawer={closeDrawer} bigScreenRatioDecimal={bigScreenRatioDecimal}/>
			<ServiceOfferingsDesktop/>
		</main>
	)
}

function HomeSectionDesktop({headerClassName, onCloseDrawer, bigScreenRatioDecimal}) {
	return (
		<section id="landing" className="max-w-screen text-black" onClick={onCloseDrawer}>
			<div className="h-[calc(100vh-2.17rem)] place-i-tems-center place-content-center">
				<div className="flex items-center justify-between ml-[1.12rem] mr-[0.88rem]">
					<div className={`${headerClassName}`}><HeaderSvgDesktop scaleRatio={bigScreenRatioDecimal}/></div>
					<VerticalElement/>
				</div>
			</div>
		</section>
	)
}

function ServiceOfferingsDesktop() {
	const {isHovered, setIsHovered} = useHoverHandler();

	return (
		<div className={`absolute bottom-0 left-0 right-0`}>
			<hr className="border border-[0.01rem] lg:border-[1.2px] border-black/40"></hr>
			<div className="w-full flex items-center justify-between pb-[0.64rem] pl-[1.12rem] pr-[0.72rem] mt-[0.24rem]">
				<div className="flex items-center justify-around gap-[0.16rem]">
					<span className={`font-bold uppercase text-[0.2rem] leading-[0.2rem]`}>Service Offerings:</span>
					<div className="flex items-center justify-around gap-[0.48rem] ml-[0.64rem]">
						{ServicesItems.map((item, index) => <span className={`opacity-64 text-[0.2rem] leading-[0.2rem] font-medium justify-self-start`} key={index}>{item}</span>)}
					</div>
				</div>
				<Link to="/portfolio" onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<button className={`cursor-pointer bg-black pl-[0.24rem] py-[0.06rem] pr-[0.04rem] text-[0.2rem] leading-[0.2rem] flex items-center justify-between gap-[0.08rem] text-[#f7f7f7] font-medium rounded-full`}>
						<span>See What We've Made</span>
						<div className={`border border-white bg-white size-[0.4rem] flex items-center justify-center rounded-full scale-15 transition duration-300 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>
					</button>
				</Link>
			</div>
		</div>
	)
}

function VerticalElement() {
	return (
		<div className="flex justify-center self-start">
			<div className={`flex gap-[0.04rem] items-center text-[0.16rem] font-medium leading-[0.16rem] text-black/64`} style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-[0.8px] border-black/64 h-[1.28rem] translate-x-[50%]"></span>
			</div>
		</div>
	)
}
