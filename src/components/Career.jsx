import { useState } from 'react'
import RolePage from './RolePage'

import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import doubleArrowRight from '../assets/icons/double-arrow-right.svg'

import {TimelineItems, PerkItemsData, OpenningRoles, CompanyEmail} from '../data/site-data'

export default function Career() {
	return (
		<section id="career" className="mx-auto px-[4rem] mt-[15rem] flex flex-col gap-8 max-w-screen">
			<h1 className="font-extrabold text-[5rem] uppercase">[Career]</h1>
			<div className="flex items-center justify-between">
				<h2 className="font-extrabold text-9xl uppercase">How we hire</h2>
				<div className="px-8 py-4 border rounded-full flex gap-4 items-center justify-between">
					<span className="font-medium text-2xl">Positions</span>
					<span className="size-2 rounded-[50%] bg-slate-900"></span>
				</div>
			</div>
			<div className="flex items-center my-[6rem]">
				<div className="flex items-center gap-4">
					<img src={arrowLeft} alt="Arrow Left" className="size-12"></img>
					<img src={doubleArrowRight} alt="Arrow Right" className="size-12"></img>
				</div>
				<p className="ml-[57rem] w-[38rem] text-[2rem] leading-10">After the <span className="font-bold">portfolio</span> meets our requirement, on average <span className="font-bold">1~3 week</span> interview process with <span className="font-bold">2 inteviews</span>.</p>
			</div>

			<div className="flex items-center min-w-full my-[6rem]">
				{TimelineItems.map(item => <TimeLineElement {...item} key={item.number} />)}
			</div>

			<div className="mx-auto px-[4rem] text-center ">
				<h2 className="font-bold text-[5.5rem] uppercase my-[2.5rem]">Life at moto</h2>
				<p className="text-[2.5rem] font-normal">We believe great design is borderless, and so are the minds behind it.</p>
				<p className="text-[2.5rem] font-normal">We’re not everywhere — but we think like we are.</p>
			</div>
			
			<PerksContainer/>
			<RolesContainer/>
			<HowToApply/>
		</section>
	)
}

function TimeLineElement({number, title}) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="flex flex-col relative gap-8 grow opacity-40 hover:opacity-100" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className="flex items-center min-w-full box-content">
				<span className={`box-content size-[1rem] border border-2 rounded-[50%] ${isHovered ? 'bg-white border-6' : ''}`}></span>
				<span className="grow border border-2 border-black"></span>
			</div>
			<div className="flex items-end gap-2 font-semibold">
				<span className="text-5xl">{number}</span>
				<span className="text-2xl">{title}</span>
			</div>
		</div>
	)
}

function PerksContainer() {
	return (
		<div className="mx-auto flex max-w-screen flex-nowrap my-[4rem] -ml-[4rem]">
			{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
		</div>
	)
}

function PerkCard({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card p-[1rem] bg-white border border-2 shrink-0 ${index === 0 ? '' : '-ml-[18rem]'}`}>
			<div className="flex items-center justify-between mb-[18rem]">
				<div className="flex flex-col">
					<span className="font-normal text-2xl">{number}</span>
					<span className="font-bold"><QIcon/></span>
				</div>
				<span className="font-bold text-9xl">{title}</span>
			</div>
			<div>
				<header className="font-semibold text-5xl mb-[1rem] tracking-[-2%]">{subtitle}</header>
				<p className="w-[22rem] text-sm font-normal">{content}</p>
			</div>
		</div>
	)
}

function RolesContainer() {
	return (
		<div className="grid grid-cols-2">
			<div className="pr-[3rem] w-4/5">
				<h3 className="uppercase">join our team</h3>
				<p className="font-bold text-6xl uppercase mt-[2rem] mb-[4rem]">find your perfect role</p>
				<p className="">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-2xl mt-[6rem] font-bold"><span className="text-3xl mr-2">13</span>Positions</p>
			</div>
			<div className="flex flex-col gap-8">
				{OpenningRoles.map((item, index) => <RoleCard {...item} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, tags, index}) {
	return (
		<article className="relative flex flex-col gap-4 px-[1rem]">
			{index === 0 &&  <hr className="border border-2 border-slate-200 mb-[1rem]"></hr> }
			<header className="font-bold text-lg">{team}</header>
			<p className="text-4xl font-light">{title}</p>
			<div className="flex flex-row items-center gap-2 mt-[1rem]">
				{tags.map((tag, index) => <span className="text-gray-600" key={index}>{tag}</span>)}
			</div>
			<hr className="border border-2 border-slate-200 mt-[2rem]"></hr>
			
			<div className="absolute right-[1rem] bottom-[2rem] flex items-center justify-between gap-[1rem] bg-slate-900 rounded-full px-6 py-2">
				<span className="text-white">Apply</span>
				<div className="bg-slate-100 flex items-center justify-center rounded-full -mr-4">
					<img src={arrowRight} alt="Arrow Right" className="w-8"></img>
				</div>
			</div>
		</article>
	)
}

export function HowToApply() {
	return (
		<div className="">
			<h2 className="uppercase font-bold text-6xl mt-[4rem]">how to apply</h2>
			<p className="mt-[3rem] text-xl">Send your CV and portfolio to <span className="font-bold">({CompanyEmail})</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-xl">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-xl my-[3rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
		</div>
	)
}


function QIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="10" cy="10" r="8" stroke="black" strokeWidth="4"/>
			<path d="M16 16L20 20" stroke="black" strokeWidth="4"/>
		</svg>
	)
}



