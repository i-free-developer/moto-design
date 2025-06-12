import { useState } from 'react'
import { Link } from "react-router-dom"
import Loading from './Loading'
import Navbar from './Navbar'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler } from './FunctionCollection'
import { ArrowIcon } from './SocialIconsCollection'

const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}
const verticalClasses = {initial: '', opened: 'vertical-element-in', closed: 'vertical-element-out'}
const serviceClasses = {initial: '', opened: 'horizontal-bar-out', closed: 'horizontal-bar-in'}

export default function Home({loadingPercentage}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const headerClassName = headerClasses[drawerStatus]
	const serviceClassName = serviceClasses[drawerStatus]
	const verticalClassName = verticalClasses[drawerStatus]

	if (loadingPercentage <= 100) {
		return <Loading loadingPercentage={loadingPercentage}/>
	} else {
		return (
			<main className="mx-auto max-w-[750px] lg:max-w-[1920px] lg:max-h-screen overflow-hidden">
				<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} closeDrawer={closeDrawer}/>
				<HomeSection headerClassName={headerClassName} serviceClassName={serviceClassName} verticalClassName={verticalClassName} onCloseDrawer={closeDrawer}/>
			</main>
		)
	}
}

function HomeSection({headerClassName, serviceClassName, onCloseDrawer, verticalClassName}) {
	return (
		<section id="landing" className="mx-auto px-[0.32rem] lg:px-[3.5rem] text-black flex flex-col justify-between" onClick={onCloseDrawer}>
			<div className="w-[6.86rem] lg:w-full flex justify-between">
				<div className={`w-[6rem] lg:w-4/6 lg:ml-[4rem] pt-[30%] lg:pt-[10%] ${headerClassName}`}>
					<h1 className="uppercase text-[0.88rem] lg:text-9xl leading-[1.14rem] lg:leading-[128px] font-extrabold">Pixels are the atomic units of design.</h1>
				</div>
				<VerticalElement verticalClassName={verticalClassName}/>
			</div>
			<ServiceOfferings serviceClassName={serviceClassName}/>
		</section>
	)
}

function ServiceOfferings({serviceClassName}) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className={`mt-[5rem] lg:mt-[16%] ${serviceClassName}`}>
			<hr className="border border-[0.01rem] lg:border-2 border-black/40"></hr>
			<div className="mx-auto w-full flex lg:items-center justify-between mt-[0.64rem] lg:mt-[1.5rem]">
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-[0.16rem]">
					<span className="font-bold uppercase text-[0.28rem] leading-[0.28rem] lg:text-[1.75rem] lg:leading-[1.75rem]">Service Offerings:</span>
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:gap-[3rem] lg:ml-[4rem]">
						{ServicesItems.map((item, index) => <span className="opacity-64 text-[0.2rem] leading-[0.2rem] lg:text-xl lg:leading-[1.25rem] mt-[0.16rem] lg:mt-0 font-medium justify-self-start" key={index}>{item}</span>)}
					</div>
				</div>
				<Link to="/portfolio" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<button className="cursor-pointer bg-black px-[0.28rem] py-[0.14rem] lg:px-6 lg:py-3 text-[0.2rem] leading-[0.2rem] lg:text-xl lg:leading-[1.25rem] flex items-center justify-between gap-[0.16rem] lg:gap-4 text-[#f7f7f7] font-medium rounded-full">
						<span>See More</span>
						<div className={`bg-white size-[0.4rem] lg:size-[2.5rem] flex items-center justify-center rounded-full scale-15 transition duration-500 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>
					</button>
				</Link>
			</div>
		</div>
	)
}

function VerticalElement({verticalClassName}) {
	return (
		<div className="lg:mr-[1rem] mt-[3.3rem] lg:mt-0 h-full ">	
			<div className={`translate-y-[100%] flex gap-[0.16rem] lg:gap-4 items-center text-[0.12rem] lg:text-base font-medium leading-[0.12rem] lg:leading-[1rem] text-black/64 ${verticalClassName}`} style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-[0.8px] border-black/64 h-[1.28rem] lg:h-[8rem] translate-x-[50%]"></span>
			</div>
		</div>
	)
}