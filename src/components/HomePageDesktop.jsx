import { useState } from 'react'
import { Link } from "react-router-dom"
import Navbar from './Navbar'
import HomePageMobile from './HomePageMobile'
import { HeaderSvgDesktop } from './HeaderSvg'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler, useScreenRatio } from './FunctionCollection'
import { ArrowIcon } from './SocialIconsCollection'

const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}
const verticalClasses = {initial: '', opened: 'vertical-element-in', closed: 'vertical-element-out'}
const serviceClasses = {initial: '', opened: 'horizontal-bar-out', closed: 'horizontal-bar-in'}

export default function HomePageDesktop() {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const headerClassName = headerClasses[drawerStatus]
	// const serviceClassName = serviceClasses[drawerStatus]
	// const verticalClassName = verticalClasses[drawerStatus]

	return (
		<main id="home" className="min-h-screen lg:min-h-screen lg:max-h-screen overflow-hidden relative">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} closeDrawer={closeDrawer}/>
			<HomeSectionDesktop headerClassName={headerClassName} onCloseDrawer={closeDrawer}/>
			<ServiceOfferingsDesktop/>
		</main>
	)
}

function HomeSectionDesktop({headerClassName, onCloseDrawer}) {
	const {bigScreenRatioDecimal} = useScreenRatio()
	// console.log(bigScreenRatioDecimal, 'bigScreenRatioDecimal', windowWidth)
	return (
		<section id="landing" className="max-w-screen lg:min-w-screen lg:max-w-screen p-x-[0.32rem] text-black" onClick={onCloseDrawer}>
			<div className="h-[calc(100vh-13.6rem)] place-i-tems-center place-content-center">
				<div className="flex items-center justify-between ml-[7rem] mr-[5.5rem]">
					<div className={`${headerClassName}`}><HeaderSvgDesktop scaleRatio={bigScreenRatioDecimal}/></div>
					<VerticalElement/> 
				</div>
			</div>
		</section>
	)
}

function ServiceOfferingsDesktop() {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className={`absolute bottom-0 left-0 right-0`}>
			<hr className="border border-[0.01rem] lg:border-[1.2px] border-black/40"></hr>
			<div className="w-full flex lg:items-center justify-between lg:pb-[4rem] lg:pl-[7rem] lg:pr-[4.5rem] mt-[0.64rem] lg:mt-[1.5rem]">
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-[0.16rem]">
					<span className="font-bold uppercase text-[0.28rem] leading-[0.28rem] lg:text-xl lg:leading-xl">Service Offerings:</span>
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:gap-[3rem] lg:ml-[4rem]">
						{ServicesItems.map((item, index) => <span className="opacity-64 text-[0.2rem] leading-[0.2rem] lg:text-xl lg:leading-xl mt-[0.16rem] lg:mt-0 font-medium justify-self-start" key={index}>{item}</span>)}
					</div>
				</div>
				<Link to="/portfolio" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<button className="cursor-pointer bg-black px-[0.28rem] py-[0.14rem] lg:pl-6 lg:py-2 lg:h-[3rem] text-[0.2rem] leading-[0.2rem] lg:text-xl lg:leading-xl flex items-center justify-between gap-[0.16rem] lg:gap-4 text-[#f7f7f7] font-medium rounded-full">
						<span>See What We've Made</span>
						<div className={`border border-white bg-white size-[0.4rem] lg:size-[2.5rem] flex items-center justify-center rounded-full scale-15 transition duration-300 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>
					</button>
				</Link>
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