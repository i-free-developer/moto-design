import { useState } from 'react'
import { TimelineItems, PerkItemsData, OpenningRoles, CompanyEmail } from '../data/site-data'
import { Link } from "react-router-dom"

export default function Career({closeDrawer}) {
	return (
		<section id="career" className="mx-auto px-[4rem] mt-[15rem] flex flex-col gap-8 max-w-screen" onClick={closeDrawer}>
			<h1 className="font-extrabold text-[5rem] uppercase">[Career]</h1>
			<div className="flex items-center justify-between">
				<h2 className="font-extrabold text-9xl uppercase">How we hire</h2>
				<div className="px-8 py-4 border rounded-full flex gap-4 items-center justify-between">
					<span className="font-medium text-2xl">Positions</span>
					<span className="size-2 rounded-[50%] bg-slate-900"></span>
				</div>
			</div>
			<div className="flex items-center my-[6rem]">
				<ArrowGroup/>
				<p className="ml-[57rem] w-[38rem] text-[2rem] leading-10">After the <span className="font-bold">portfolio</span> meets our requirement, on average <span className="font-bold">1~3 week</span> interview process with <span className="font-bold">2 inteviews</span>.</p>
			</div>

			<div className="flex items-center flex-nowrap min-w-full my-[6rem]">
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
		<div className="mx-auto flex flex-nowrap my-[4rem] -ml-[2rem]">
			{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
		</div>
	)
}

function PerkCard({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card size-[35rem] p-[1rem] flex flex-col justify-between bg-[#f7f7f7] border border-2 border-[#000000] shrink-0 ${index === 0 ? '' : '-ml-[23rem]'}`}>
			<div className="flex items-center justify-between">
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
			<div className="pr-[3rem] w-[40.5rem] tracking-[-2%]">
				<h3 className="uppercase font-bold text-2xl leading-[2rem]">join our team</h3>
				<p className="uppercase font-bold text-[5.5rem] leading-[6.5rem] mt-[0.5rem]">find your perfect role</p>
				<p className="text-[1.5rem] leading-[2rem] mt-[4rem] font-normal">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-[2.5rem] mt-[14.5rem] font-bold"><span className="mr-2">13</span>Positions</p>
			</div>
			<div className="flex flex-col gap-8">
				{OpenningRoles.map((item, index) => <RoleCard {...item} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, tags, index, id}) {
	return (
		<article className="flex justify-between relative w-[55rem] tracking-[-2%]">
			<div>
				{index === 0 &&  <hr className="border border-2 border-black/20 mb-[3rem] w-[55rem]"></hr> }
				<header className="font-bold text-xl">{team}</header>
				<p className="text-[2rem] font-normal mt-[1.5rem]">{title}</p>
				<div className="flex flex-row items-center gap-2 mt-[3rem]">
					{tags.map((tag, index) => <span className="text-xl font-medium text-black opacity-40" key={index}>{tag}</span>)}
				</div>
				<hr className="border border-2 border-black/20 my-[3rem] w-[55rem]"></hr>
			</div>
			<ApplyButon id={id}/>
		</article>
	)
}

function ApplyButon({id}) {
	const [isHovered, setIsHovered] = useState(false);
	const ArrowElement = (<div className="bg-white size-[2.5rem] flex items-center justify-center rounded-full"><ArrowIcon/></div>)
	const DotElement = (<div className="size-[2.5rem] flex items-center justify-center"><span className="size-[0.5rem] bg-white rounded-full"></span></div>)

	return (
		<Link to={`/role/${id}`} className="absolute bottom-[6rem] right-0 flex items-center justify-evenly gap-[1rem] bg-slate-900 rounded-full w-[9.75rem] h-[3rem]"
			onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-white font-medium text-2xl ml-[0.5rem]">Apply</span>
			{isHovered ? ArrowElement : DotElement}
		</Link>
	)
}

export function HowToApply() {
	return (
		<div className="tracking-[-2%] mt-[4rem] mb-[3rem]">
			<h2 className="uppercase font-bold text-[5.5rem]">how to apply</h2>
			<p className="mt-[3rem] text-[2rem]">Send your CV and portfolio to <span className="font-bold">({CompanyEmail})</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-[2rem]">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-[2rem] my-[3rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
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

function ArrowIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<rect x="7.91699" y="1.17041" width="8.01079" height="2" transform="rotate(45 7.91699 1.17041)" fill="#161619"/>
			<rect x="6.49219" y="11.0957" width="8.04497" height="2" transform="rotate(-45 6.49219 11.0957)" fill="#161619"/>
			<rect x="1" y="6" width="10" height="2" fill="#161619"/>
		</svg>

	)
}


function ArrowGroup() {
	return (
		<svg width="81" height="81" viewBox="0 0 81 81" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<rect x="14.1348" y="54.6313" width="20" height="4" transform="rotate(-135 14.1348 54.6313)" fill="#161619"/>
			<rect x="16.9629" y="29.1755" width="20" height="4" transform="rotate(135 16.9629 29.1755)" fill="#161619"/>
			<rect width="20" height="4" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 56 54.6313)" fill="#161619"/>
			<rect width="20" height="4" transform="matrix(0.707107 0.707107 0.707107 -0.707107 53.1719 29.1755)" fill="#161619"/>
			<rect width="20" height="4" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 66.8281 54.6316)" fill="#161619"/>
			<rect width="20" height="4" transform="matrix(0.707107 0.707107 0.707107 -0.707107 64 29.1758)" fill="#161619"/>
		</svg>
	)
}


