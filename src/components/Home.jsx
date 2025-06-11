import { useState } from 'react'
import { Link } from "react-router-dom"
import Loading from './Loading'
import Navbar from './Navbar'
import { ServicesItems, CompanyDomain } from '../data/site-data'
import { useDrawerHandler } from './FunctionCollection'

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
			<main className="mx-auto max-w-[750px] lg:max-w-[1920px] max-h-screen overflow-hidden">
				<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer}/>
				<HomeSection headerClassName={headerClassName} serviceClassName={serviceClassName} verticalClassName={verticalClassName} onCloseDrawer={closeDrawer}/>
			</main>
		)
	}
}

function HomeSection({headerClassName, serviceClassName, onCloseDrawer, verticalClassName}) {
	return (
		<section id="landing" className="mx-auto px-[1.5rem] lg:px-[3.5rem] text-black" onClick={onCloseDrawer}>
			<div className="relative">
				<div className={`w-[40rem] lg:w-4/6 lg:ml-[4rem] translate-y-[4rem] lg:translate-y-1/2 ${headerClassName}`}>
					<h1 className="uppercase text-[5.5rem] lg:text-9xl leading-[114px] lg:leading-[128px] font-extrabold">Pixels are the atomic units of design.</h1>
				</div>
				<VerticalElement verticalClassName={verticalClassName}/>
			</div>
			<ServiceOfferings serviceClassName={serviceClassName}/>
		</section>
	)
}

function ServiceOfferings({serviceClassName}) {
	return (
		<div className={`mt-[60%] lg:mt-[22%] ${serviceClassName}`}>
			<hr className="border border-2 border-black/40"></hr>
			<div className="mx-auto w-full flex lg:items-center justify-between mt-[1.5rem] text-xl">
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-4">
					<span className="font-bold uppercase text-[1.75rem] justify-self-start">Service Offerings:</span>
					{ServicesItems.map((item, index) => <span className="opacity-64 text-xl font-medium justify-self-start" key={index}>{item}</span>)}
				</div>
				<Link to="/portfolio"><button className="cursor-pointer bg-black px-6 py-3 flex items-center gap-4 text-[#f7f7f7] font-medium rounded-full">See What We’ve  Made<span className="size-[6px] bg-white rounded-full"></span></button></Link>
				
			</div>
		</div>
	)
}

function VerticalElement({verticalClassName}) {
	return (
		<div className="absolute right-[1rem] top-[50%] lg:top-0 h-full ">	
			<div className={`translate-y-[100%] flex gap-4 items-center text-base font-medium leading-[16px] text-black/64 ${verticalClassName}`} style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-[0.8px] border-black/64 h-[8rem] translate-x-[50%]"></span>
			</div>
		</div>
	)
}