import { useState } from 'react'
import { Link } from "react-router-dom"
import { TimelineItems, PerkItemsData, OpenningRoles, CompanyEmail } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon, ArrowIcon } from './SocialIconsCollection'
import { SiteInfoCard,  SiteFooter } from './About'
import { UseThrottle, useDrawerHandler } from './FunctionCollection'

export default function Career({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} frostedGlass={true}/>
			<section id="career" className="w-screen lg:min-w-[1920px] lg:max-w-[1920px] mx-auto px-[0.32rem] lg:px-[3rem] pt-[0.32rem] lg:pt-[3rem] lg:mt-[8rem] lg:mb-[3rem] overflow-x-hidden" onClick={closeDrawer}>
				<CareerHeader/>
				<CareerContenr/>
				<TimeLineCard/>
				<LifeAtMotoCard/>
				<PerksContainer/>
				<RolesContainer/>
				<HowToApply/>
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice}/>
			</section>
		</main>
	)
}

function CareerHeader() {
	return (
		<div className="relative my-[0.64rem] lg:mt-0 lg:px-[1rem]">
			<h1 className="font-extrabold text-[0.48rem] lg:text-[5rem] uppercase">[Career]</h1>
			<h2 className="font-extrabold text-[0.88rem] lg:text-9xl uppercase">How we hire</h2>
			<div className="flex items-center justify-between mt-[0.32rem] lg:mt-0">
				<span className="lg:hidden"><ArrowGroup/></span> 
				<span className="lg:absolute lg:bottom-[-0.96rem] lg:bottom-0 lg:right-0"><PositionBtn/></span>
			</div>
			<span className="absolute top-0 right-0 lg:right-[1rem] lg:scale-160"><StarIcon/></span>
		</div>
	)
}

function PositionBtn() {
	function scrollToRef() { document.querySelector('#positions').scrollIntoView({ behavior: 'smooth', block: 'start' }) }
	return (
		<div className="px-[0.24rem] lg:px-8 py-[0.12rem] lg:py-4 border border-2 rounded-full flex gap-[0.16rem] lg:gap-4 items-center justify-between cursor-pointer" onClick={scrollToRef}>
			<span className="font-medium text-[0.2rem] leading-[0.24rem] lg:text-2xl lg:leading-[24px]">Positions</span>
			<span className="size-[0.08rem] lg:size-2 rounded-[50%] bg-slate-900"></span>
		</div>
	)
}

function CareerContenr() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center my-[1.28rem] lg:my-[4rem]">
			<span className="hidden lg:block"><ArrowGroup/></span>
			<p className="lg:mt-[6rem] lg:mt-0 lg:ml-[57rem] text-black/64 font-normal w-[74%] lg:w-[38rem] text-[0.24rem] leading-[0.24rem] lg:text-[2rem] lg:leading-[36px] tracking-[-2%]">After the <span className="font-bold text-black">portfolio</span> meets our requirement, on average <span className="font-bold text-black">1~3 week</span> interview process with <span className="font-bold text-black">2 inteviews</span>.</p>
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
		<div className="flex items-center flex-nowrap lg:px-[1rem] py-[0.32rem] lg:py-[6rem] overflow-x-auto" onWheel={throttledWheel}>
			{TimelineItems.map(item => <TimeLineElement {...item} key={item.number} timelineIndex={timelineIndex}/>)}
		</div>
	)
}

function LifeAtMotoCard() {
	return (
		<div className="mx-auto my-[1.28rem] lg:my-0 w-full lg:px-[4rem] text-center scroll-fade-in">
			<h2 className="font-bold text-[0.48rem] lg:text-[5.5rem] uppercase lg:my-[2.5rem]">Life at moto</h2>
			<p className="text-[0.16rem] lg:text-[2.5rem] font-normal">We believe great design is borderless, and so are the minds behind it.</p>
			<p className="text-[0.16rem] lg:text-[2.5rem] font-normal">We’re not everywhere — but we think like we are.</p>
		</div>
	)
}

function TimeLineElement({id, number, title, timelineIndex}) {
	return (
		<div className="flex flex-col relative grow min-w-content shrink-0">
			<span className={`w-full border border-2 relative ${ timelineIndex == id ? 'border-black' : 'border-gray'}`}>
				<span className={`absolute left-[-0.06rem] lg:left-[-0.5rem] -translate-y-[50%] size-[0.12rem] lg:size-[1rem] rounded-[50%] ${timelineIndex == id ? 'bg-white border-black border-4 scale-150' : 'border-gray bg-gray border-2'}`}></span>
			</span>

			<div className={`w-content lg:min-w-content flex flex-col lg:flex-row lg:items-end gap-[0.16rem] lg:gap-2 font-semibold tracking-[-2%] mt-[0.08rem] lg:mt-8 ${ timelineIndex == id ? '' : 'opacity-40'}`}>
				<span className="text-[0.32rem] leading-[0.32rem] lg:text-5xl lg:leading-[48px]">{number}</span>
				<span className="text-[0.2rem] leading-[0.2rem] lg:text-2xl lg:leading-[24px]">{title}</span>
			</div>
		</div>
	)
}

function PerksContainer() {
	return (
		<div className="mx-auto lg:my-[4rem] lg:ml-[-3rem] overflow-x-hidden">
			<div className="whitespace-nowrap flex flex-nowrap">
				{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
			</div>
		</div>
	)
}

function PerkCard({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card size-[4rem] lg:size-[35rem] p-[0.16rem] lg:p-[1rem] flex flex-col justify-between bg-[#f7f7f7] border border-2 border-[#000000] shrink-0 ${index === 0 ? '' : 'ml-[-1.28rem] lg:ml-[-23.5rem]'}`}>
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<span className="font-normal text-[0.2rem] lg:text-2xl tracking-[-2%]">{number}</span>
					<span className="font-bold scale-90 lg:scale-100"><QIcon/></span>
				</div>
				<span className="font-bold text-[0.8rem] lg:text-9xl tracking-[-2%]">{title}</span>
			</div>
			<div>
				<header className="font-semibold text-[0.32rem] lg:text-5xl mb-[0.16rem] lg:mb-[1rem] tracking-[-2%]">{subtitle}</header>
				<p className="lg:w-[22rem] text-wrap text-[0.12rem] lg:text-sm font-normal tracking-[-2%]">{content}</p>
			</div>
		</div>
	)
}

function RolesContainer() {
	return (
		<div className="mt-[1.28rem] lg:mt-0 grid grid-cols-1 lg:grid-cols-2">
			<div className="lg:pr-[3rem] lg:w-[40.5rem] tracking-[-2%] scroll-fade-in">
				<h3 className="uppercase font-bold text-[0.2rem] leading-[0.2rem] lg:text-2xl lg:leading-[2rem]">join our team</h3>
				<p className="uppercase font-bold text-[0.48rem] leading-[0.48rem] lg:text-[5.5rem] lg:leading-[6.5rem] mt-[0.32rem] lg:mt-[0.5rem]">find your perfect role</p>
				<p className="text-[0.16rem] leading-[0.16rem] lg:text-[1.5rem] lg:leading-[2rem] mt-[0.16rem] lg:mt-[4rem] font-normal">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-[0.32rem] lg:text-[2.5rem] mt-[1.28rem] lg:mt-[4rem] lg:mt-[14.5rem] font-bold scroll-fade-in"><span className="mr-[0.02rem] lg:mr-2">13</span>Positions</p>
			</div>
			<div id="positions" className="mt-[0.8rem] lg:mt-0 flex flex-col gap-[0.08rem] lg:gap-8">
				{OpenningRoles.map((item, index) => <RoleCard {...item} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, tags, index, id}) {
	return (
		<article className="relative lg:w-[55rem] tracking-[-2%] scroll-fade-in">
			{index === 0 &&  <hr className="border border-2 border-black/20 mb-[0.24rem] lg:mb-[3rem] lg:w-[55rem]"></hr> }
			<header className="font-bold text-[0.16rem] lg:text-xl">{team}</header>
			<div className="">
				<p className="text-[0.32rem] lg:text-[2rem] font-normal mt-[0.24rem] lg:mt-[1.5rem]">{title}</p>
				<div className="flex flex-row items-center gap-2 mt-[0.48rem] lg:mt-[3rem]">
					{tags.map((tag, index) => <span className="text-[0.16rem] lg:text-xl font-medium text-black opacity-40" key={index}>{tag}</span>)}
				</div>
				<hr className="border border-2 border-black/20 my-[0.24rem] lg:my-[3rem] w-full lg:w-[55rem]"></hr>
				<ApplyButon id={id}/>
			</div>
		</article>
	)
}

function ApplyButon({id}) {
	const [isHovered, setIsHovered] = useState(false);
	const ArrowElement = (<div className={`bg-white size-[0.24rem] lg:size-[2.5rem] flex items-center justify-center rounded-full scale-15 transition duration-500 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>)
	const DotElement = (<div className="size-[2.5rem] flex items-center justify-center"><span className="size-[0.5rem] bg-white rounded-full"></span></div>)

	return (
		<Link to={`/role/${id}`} className="will-change-transform absolute bottom-[0.48rem] lg:bottom-[6rem] right-0 flex items-center justify-evenly lg:gap-[1rem] bg-slate-900 rounded-full w-[1.3rem] lg:w-[9.75rem] h-[0.4rem] lg:h-[3rem]"
			onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-white font-medium text-[0.2rem] lg:text-2xl lg:ml-[0.5rem]">Apply</span>
			{/* {isHovered ? ArrowElement : DotElement} */}
			{ArrowElement}
		</Link>
	)
}

export function HowToApply() {
	return (
		<div className="tracking-[-2%] my-[1.6rem] lg:my-[3rem] w-full mx-auto">
			<h2 className="uppercase font-bold text-[0.48rem] lg:text-[5.5rem] lg:leading-[104px]">how to apply</h2>
			<p className="mt-[0.48rem] lg:mt-[3rem] text-[0.2rem] leading-[0.2rem] lg:text-[2rem] lg:leading-[48px]">Send your CV and portfolio to <span className="font-bold">({CompanyEmail})</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-[0.2rem] leading-[0.2rem] lg:text-[2rem] lg:leading-[48px]">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-[0.2rem] leading-[0.2rem] lg:text-[2rem] lg:leading-[48px] my-[0.32rem] lg:my-[3rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
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
