import { useState } from 'react'
import { Link } from "react-router-dom"
import { TimelineItems, PerkItemsData, OpenningRoles, CompanyEmail } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon, ArrowIcon } from './SocialIconsCollection'
import { SiteInfoCard,  SiteFooter } from './About'
import { UseThrottle, useDrawerHandler } from './FunctionCollection'

export default function Career() {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} frostedGlass={true}/>
			<section id="career" className="w-screen max-w-[750px] lg:min-w-screen lg:max-w-screen p-x-[0.32rem] mx-auto px-[1.5rem] lg:px-[3rem] pt-[3rem]" onClick={closeDrawer}>
				<CareerHeader/>
				<CareerContenr/>
				<TimeLineCard/>
				<LifeAtMotoCard/>
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
	function scrollToRef() { document.querySelector('#positions').scrollIntoView({ behavior: 'smooth', block: 'start' }) }

	return (
		<div className="relative px-[1rem]">
			<h1 className="font-extrabold text-5xl lg:text-[5rem] uppercase">[Career]</h1>
			<h2 className="font-extrabold text-[88px] lg:text-9xl uppercase">How we hire</h2>
			<div className="absolute bottom-[-6rem] lg:bottom-0 right-0 px-8 py-4 border border-2 rounded-full flex gap-4 items-center justify-between cursor-pointer" onClick={scrollToRef}>
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
	const numbersLimit = TimelineItems.length

	// const debouncedWheel = useCallback(debounce((e) => {wheelScroll(e)}, 300, { leading: false, trailing: true }), [])
	const throttledWheel = UseThrottle( (e) => {wheelScroll(e)}, 500 )
	function wheelScroll(e) {
  		if (e.deltaY < 0) { setTimelineIndex(x => { return x - 1 > 0 ? x - 1 : 0 }) }
  		if (e.deltaY > 0) { setTimelineIndex(x => { return x + 1 > numbersLimit ? (numbersLimit - 1) : (x + 1) }) }
	}

	return (
		<div className="flex items-center flex-nowrap px-[1rem] py-[2rem] lg:py-[6rem] overflow-x-auto" onWheel={throttledWheel}>
			{TimelineItems.map(item => <TimeLineElement {...item} key={item.number} timelineIndex={timelineIndex}/>)}
		</div>
	)
}

function LifeAtMotoCard() {
	return (
		<div className="mx-auto w-full lg:px-[4rem] text-center scroll-fade-in">
			<h2 className="font-bold text-5xl lg:text-[5.5rem] uppercase my-[2.5rem]">Life at moto</h2>
			<p className="text-base lg:text-[2.5rem] font-normal">We believe great design is borderless, and so are the minds behind it.</p>
			<p className="text-base lg:text-[2.5rem] font-normal">We’re not everywhere — but we think like we are.</p>
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
		<div className="mx-auto my-[4rem] lg:ml-[-4rem] overflow-x-hidden">
			<div className="whitespace-nowrap flex flex-nowrap">
				{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
			</div>
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
			<div className="pr-[3rem] lg:w-[40.5rem] tracking-[-2%] scroll-fade-in">
				<h3 className="uppercase font-bold text-xl leading-[20px] lg:text-2xl lg:leading-[2rem]">join our team</h3>
				<p className="uppercase font-bold text-5xl lg:text-[5.5rem] lg:leading-[6.5rem] mt-[2rem] lg:mt-[0.5rem]">find your perfect role</p>
				<p className="text-base lg:text-[1.5rem] lg:leading-[2rem] mt-[1rem] lg:mt-[4rem] font-normal">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-[2rem] lg:text-[2.5rem] mt-[4rem] lg:mt-[14.5rem] font-bold scroll-fade-in"><span className="mr-2">13</span>Positions</p>
			</div>
			<div id="positions" className="flex flex-col gap-8">
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
	const ArrowElement = (<div className={`bg-white size-[2.5rem] flex items-center justify-center rounded-full scale-15 transition duration-500 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>)
	const DotElement = (<div className="size-[2.5rem] flex items-center justify-center"><span className="size-[0.5rem] bg-white rounded-full"></span></div>)

	return (
		<Link to={`/role/${id}`} className="will-change-transform absolute bottom-[6rem] right-0 flex items-center justify-evenly gap-[1rem] bg-slate-900 rounded-full w-[9.75rem] h-[3rem]"
			onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-white font-medium text-2xl ml-[0.5rem]">Apply</span>
			{/* {isHovered ? ArrowElement : DotElement} */}
			{ArrowElement}
		</Link>
	)
}

export function HowToApply() {
	return (
		<div className="tracking-[-2%] my-[3rem] w-full mx-auto">
			<h2 className="uppercase font-bold text-5xl lg:text-[5.5rem]">how to apply</h2>
			<p className="mt-[3rem] text-xl lg:text-[2rem]">Send your CV and portfolio to <span className="font-bold">({CompanyEmail})</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-xl lg:text-[2rem]">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-xl lg:text-[2rem] my-[2rem] lg:my-[3rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
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
