import { Link } from "react-router-dom"
import Navbar from './Navbar'
import { HeaderSvgMobile } from './HeaderSvg'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler, useHoverHandler } from './FunctionCollection'
import { ArrowIcon } from './SocialIconsCollection'

const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}

export default function HomePageMobile({smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const headerClassName = headerClasses[drawerStatus]

	return (
		<main id="home" className="min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden relative">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} closeDrawer={closeDrawer}/>
			<HomeSectionMobile headerClassName={headerClassName} onCloseDrawer={closeDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} />
			<ServiceOfferingsMobile/>
		</main>
	)
}

function HomeSectionMobile({headerClassName, onCloseDrawer, smallScreenRatioDecimal}) {
	return (
		<section id="landing" className="px-[0.32rem] h-[calc(100vh-4.2rem)] text-black flex justify-between flex-row--reverse relative" onClick={onCloseDrawer}>
			<span className={`${headerClassName} my-auto`}><HeaderSvgMobile scaleRatio={smallScreenRatioDecimal}/></span>
			<span className="absolute right-[0.48rem] top-[calc(50vh-1rem)]"><VerticalElement/></span>
		</section>
	)
}

function ServiceOfferingsMobile() {
	const {isHovered, setIsHovered} = useHoverHandler();
	return (
		<div className={`mobile absolute bottom-[1.4rem] left-0 right-0`}>
			<hr className="border border-[0.01rem] border-black/40"></hr>
			<div className="w-full flex items-center justify-between my-[0.36rem] px-[0.32rem]">
				<span className="font-bold uppercase text-[0.28rem] leading-[0.28rem]">Service Offerings:</span>
				<Link to="/portfolio" onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<button className="cursor-pointer bg-black pl-[0.24rem] pr-[0.04rem] py-[0.08rem] text-[0.2rem] leading-[0.2rem] flex items-center justify-between gap-[0.16rem] text-[#f7f7f7] font-medium rounded-full">
						<span>See More</span>
						{isHovered ? <div className={`border border-white bg-white size-[0.4rem] flex items-center justify-center rounded-full scale-15 transition duration-300 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div> : <span className="size-[0.4rem] flex items-center justify-center"><span className="size-[0.08rem] bg-white rounded-[50%]"></span></span> }		
					</button>
				</Link>
			</div>
			<div className="flex flex-col px-[0.32rem] gap-[0.16rem]">
				{ServicesItems.map((item, index) => <span className="opacity-64 text-[0.2rem] leading-[0.2rem] font-medium" key={index}>{item}</span>)}
			</div>
		</div>
	)
}



function VerticalElement() {
	return (
		<div className="flex justify-center items-center">
			<div className={`flex gap-[0.16rem] items-center text-[0.12rem] font-medium leading-[0.12rem] text-black/64`} style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-[0.8px] border-black/64 h-[1.28rem] translate-x-[50%]"></span>
			</div>
		</div>
	)
}
