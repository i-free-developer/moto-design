import { useState, useCallback } from 'react'
import { Link } from "react-router-dom"
import { TimelineItems, PerkItemsData, OpenningRoles, CompanyEmail } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon } from './SocialIconsCollection'
import { SiteInfoCard,  SiteFooter } from './About'
import { useThrottle } from './FunctionCollection'

export default function Career() {
	const [drawerStatus, setDrawerStatus] = useState('initial')
	function handleClickDrawer() {
		let newStatus; 
		if (drawerStatus === 'initial' || drawerStatus === 'closed') { newStatus = 'opened' } 
		if (drawerStatus === 'opened') { newStatus = 'closed' }
		setDrawerStatus(newStatus)
	}
  	function closeDrawer() { if (drawerStatus === 'opened') { setDrawerStatus('closed') } }

	return (
		<main className="mx-auto max-w-[750px] lg:max-w-[1920px]">
      		<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer}/>
			<section id="career" className="mx-auto px-[2rem] lg:px-[4rem] pt-[4rem] flex flex-col gap-8 max-w-screen" onClick={closeDrawer}>
				<CareerHeader/>
				<CareerContenr/>
				<TimeLineCard/>
				<MotoLifeCard/>
				<PerksContainer/>
				<RolesContainer/>
				<HowToApply/>
				<SiteInfoCard/>
				<SiteFooter/>
			</section>
		</main>
	)
}

function CareerHeader() {
	return (
		<div className="relative px-[1rem]">
			<h1 className="font-extrabold text-5xl lg:text-[5rem] uppercase">[Career]</h1>
			<h2 className="font-extrabold text-[88px] lg:text-9xl uppercase">How we hire</h2>
			<div className="absolute bottom-[-6rem] lg:bottom-0 right-0 px-8 py-4 border border-2 rounded-full flex gap-4 items-center justify-between">
				<span className="font-medium text-2xl">Positions</span>
				<span className="size-2 rounded-[50%] bg-slate-900"></span>
			</div>
			<span className="absolute top-0 right-[1rem] lg:scale-160"><StarIcon/></span> 
		</div>
	)
}

function CareerContenr() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center my-[2rem] lg:my-[4rem]">
			<ArrowGroup/>
			<p className="mt-[6rem] lg:mt-0 ml-0 lg:ml-[57rem] text-black/64 font-normal w-[38rem] text-2xl leading-[24px] lg:leading-[36px] lg:text-[2rem] tracking-[-2%]">After the <span className="font-bold text-black">portfolio</span> meets our requirement, on average <span className="font-bold text-black">1~3 week</span> interview process with <span className="font-bold text-black">2 inteviews</span>.</p>
		</div>
	)	
}

function TimeLineCard() {
	const [timelineIndex, setTimelineIndex] = useState(0)
	
	// const debouncedWheel = useCallback(debounce((e) => {wheelScroll(e)}, 300, { leading: false, trailing: true }), [])
	const throttledWheel = useThrottle( (e) => {wheelScroll(e)}, 500 )
	function wheelScroll(e) {
  		if (e.deltaY < 0) { setTimelineIndex(x => { return x - 1 > 0 ? x - 1 : 0 }) } 
  		if (e.deltaY > 0) { setTimelineIndex(x => { return x + 1 > 6 ? 5 : x + 1 }) }
	}

	return (
		<div className="flex items-center flex-nowrap min-w-content px-[1rem] py-[2rem] lg:py-[6rem] overflow-x-auto" onWheel={throttledWheel}>
			{TimelineItems.map(item => <TimeLineElement {...item} key={item.number} timelineIndex={timelineIndex}/>)}
		</div>
	)
}

function MotoLifeCard() {
	return (
		<div className="mx-auto w-full lg:px-[4rem] text-center">
			<h2 className="font-bold text-5xl lg:text-[5.5rem] uppercase my-[2.5rem] scroll-fade-in">Life at moto</h2>
			<p className="text-base lg:text-[2.5rem] font-normal scroll-fade-in">We believe great design is borderless, and so are the minds behind it.</p>
			<p className="text-base lg:text-[2.5rem] font-normal scroll-fade-in">We’re not everywhere — but we think like we are.</p>
		</div>
	)
}

function TimeLineElement({id, number, title, timelineIndex}) {
	return (
		<div className="flex flex-col relative grow min-w-content shrink-0">
			<span className={`w-full border border-2 relative ${ timelineIndex == id ? 'border-black' : 'border-gray'}`}>
				<span className={`absolute left-[-0.5rem] -translate-y-[50%] size-[1rem] rounded-[50%] ${timelineIndex == id ? 'bg-white border-black border-4 scale-150' : 'border-gray bg-gray border-2'}`}></span>
			</span>
			
			<div className={`min-w-[16rem] lg:min-w-content flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-2 font-semibold tracking-[-2%] mt-8 ${ timelineIndex == id ? '' : 'opacity-40'}`}>
				<span className="text-[2rem] leading-[32px] lg:text-5xl lg:leading-[48px]">{number}</span>
				<span className="text-xl lg:text-2xl leading-[24px]">{title}</span>
			</div>
		</div>
	)
}

function PerksContainer() {
	return (
		<div className="mx-auto flex flex-nowrap my-[4rem] -ml-[2rem] min-w-content overflow-x-auto">
			{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
		</div>
	)
}

function PerkCard({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card size-[400px] lg:size-[35rem] p-[1rem] flex flex-col justify-between bg-[#f7f7f7] border border-2 border-[#000000] shrink-0 ${index === 0 ? '' : 'ml-[-17rem] lg:ml-[-23rem]'}`}>
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<span className="font-normal text-xl lg:text-2xl tracking-[-2%]">{number}</span>
					<span className="font-bold scale-90 lg:scale-100"><QIcon/></span>
				</div>
				<span className="font-bold text-[5rem] lg:text-9xl tracking-[-2%]">{title}</span>
			</div>
			<div>
				<header className="font-semibold text-[2rem] lg:text-5xl mb-[1rem] tracking-[-2%]">{subtitle}</header>
				<p className="w-[22rem] text-xs lg:text-sm font-normal tracking-[-2%]">{content}</p>
			</div>
		</div>
	)
}

function RolesContainer() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2">
			<div className="pr-[3rem] lg:w-[40.5rem] tracking-[-2%]">
				<h3 className="uppercase font-bold text-xl leading-[20px] lg:text-2xl lg:leading-[2rem] scroll-fade-in">join our team</h3>
				<p className="uppercase font-bold text-5xl lg:text-[5.5rem] lg:leading-[6.5rem] mt-[2rem] lg:mt-[0.5rem] scroll-fade-in">find your perfect role</p>
				<p className="text-base lg:text-[1.5rem] lg:leading-[2rem] mt-[1rem] lg:mt-[4rem] font-normal scroll-fade-in">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-[2rem] lg:text-[2.5rem] mt-[4rem] lg:mt-[14.5rem] font-bold scroll-fade-in"><span className="mr-2">13</span>Positions</p>
			</div>
			<div className="flex flex-col gap-8">
				{OpenningRoles.map((item, index) => <RoleCard {...item} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, tags, index, id}) {
	return (
		<article className="relative lg:w-[55rem] tracking-[-2%] scroll-fade-in">
			{index === 0 &&  <hr className="border border-2 border-black/20 mb-[3rem] lg:w-[55rem]"></hr> }
			<header className="font-bold text-base lg:text-xl">{team}</header>
			<div className="">
				<p className="text-[2rem] font-normal mt-[1.5rem]">{title}</p>
				<div className="flex flex-row items-center gap-2 mt-[3rem]">
					{tags.map((tag, index) => <span className="text-base lg:text-xl font-medium text-black opacity-40" key={index}>{tag}</span>)}
				</div>
				<hr className="border border-2 border-black/20 my-[3rem] w-full lg:w-[55rem]"></hr>
				<ApplyButon id={id}/>
			</div>
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
		<div className="tracking-[-2%] my-[3rem]">
			<h2 className="uppercase font-bold text-5xl lg:text-[5.5rem]">how to apply</h2>
			<p className="mt-[3rem] text-xl lg:text-[2rem]">Send your CV and portfolio to <span className="font-bold">({CompanyEmail})</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-xl lg:text-[2rem]">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-xl lg:text-[2rem] my-[3rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
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
