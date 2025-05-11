import { useState } from 'react'
import {ServicesItems, CompanyDomain} from '../data/site-data'

export default function Landing({showDrawer}) {
	return (
		<section className="h-[100vh] mx-auto relative">
			<div className={`w-4/5 h-10/12 translate-y-1/3 mx-auto ${showDrawer ? 'section-drawer-in' : 'section-drawer-out'}`}>
				<h1 className="uppercase text-8xl font-bold">Pixels are the atomic units of design.</h1>
			</div>
			<VerticalElement/>
			{!showDrawer && <ServiceOfferings/>}
		</section>
	)
}

function ServiceOfferings() {
	return (
		<div className="">
			<hr className="border border-2 border-slate-200 w-full"></hr>
			<div className="mx-auto w-full flex items-center justify-between mt-[1.5rem] px-[3rem]">
				<div className="flex items-center justify-around gap-4">
					<span className="font-bold uppercase">Service Offerings:</span>
					{ServicesItems.map((item, index) => <span className="text-gray-600" key={index}>{item}</span>)}
				</div>
				<div>
					<button className="bg-black px-4 py-2 flex items-center gap-2 text-white rounded-full">See What We’ve  Made<span className="size-[6px] bg-white rounded-full"></span></button>
				</div>
			</div>
		</div>
	)
}

function VerticalElement() {
	return (
		<div className="absolute right-[3rem] top-[30%] flex gap-4 items-center text-gray-600"
			style={{writingMode: 'vertical-lr'}}>
			<span className="rotate-180">{CompanyDomain}</span>
			<span className="border border-2 border-slate-200 h-[8rem]"></span>
		</div>
	)
}