import { useState } from 'react'
import { Link } from "react-router-dom"
import Navbar from './Navbar'
import { HeaderSvgMobile } from './HeaderSvg'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler, useScreenRatio } from './FunctionCollection'
import { ArrowIcon } from './SocialIconsCollection'

const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}
const verticalClasses = {initial: '', opened: 'vertical-element-in', closed: 'vertical-element-out'}
const serviceClasses = {initial: '', opened: 'horizontal-bar-out', closed: 'horizontal-bar-in'}

export default function HomePageMobile() {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const headerClassName = headerClasses[drawerStatus]
	const serviceClassName = serviceClasses[drawerStatus]
	const verticalClassName = verticalClasses[drawerStatus]

	return (
		<main id="home" className="min-h-screen lg:min-h-screen lg:max-h-screen overflow-hidden relative">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} closeDrawer={closeDrawer}/>
			<HomeSectionMobile headerClassName={headerClassName} serviceClassName={serviceClassName} verticalClassName={verticalClassName} onCloseDrawer={closeDrawer} />
			<ServiceOfferingsMobile/>
		</main>
	)
}

function HomeSectionMobile({headerClassName, serviceClassName, onCloseDrawer, verticalClassName}) {
	const {smallScreenRatioDecimal} = useScreenRatio()
	// console.log('smallScreenRatioDecimal', smallScreenRatioDecimal)

	return (
		<section id="landing" className="border w-screen px-[0.32rem] text-black flex justify-between flex-row-reverse" onClick={onCloseDrawer}>
			<div className="border"><VerticalElement/></div>
			<div className={`${headerClassName} pt-[3.2rem] border border-red-900`}><span><HeaderSvgMobile scaleRatio={smallScreenRatioDecimal}/></span></div>
		</section>
	)
}

function ServiceOfferingsMobile() {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className={`absolute bottom-[2rem] left-0 right-0`}>
			<hr className="border border-[0.01rem] border-black/40"></hr>
			<div className="w-full flex items-center justify-between my-[0.36rem] px-[0.32rem]">
				<span className="font-bold uppercase text-[0.28rem] leading-[0.28rem]">Service Offerings:</span>
				<Link to="/portfolio" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<button className="cursor-pointer bg-black px-[0.24rem] py-[0.08rem] text-[0.2rem] leading-[0.2rem] flex items-center justify-between gap-[0.16rem] text-[#f7f7f7] font-medium rounded-full">
						<span>See More</span>
						<div className={`border border-white bg-white size-[0.4rem] flex items-center justify-center rounded-full scale-15 transition duration-400 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>
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
		<div className="flex justify-center self-start">	
			<div className={`flex gap-[0.16rem] lg:gap-4 items-center text-[0.12rem] lg:text-base font-medium leading-[0.12rem] lg:leading-[1rem] text-black/64`} style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-[0.8px] border-black/64 h-[1.28rem] lg:h-[8rem] translate-x-[50%]"></span>
			</div>
		</div>
	)
}