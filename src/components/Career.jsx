import { useState } from 'react'
import { Link } from "react-router-dom"
import { TimelineItems, PerkItemsData, OpenningRoles, CompanyEmail } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon, ArrowIcon } from './SocialIconsCollection'
import { SiteInfoCard,  SiteFooter } from './About'
import { UseThrottle, useDrawerHandler, useHoverHandler } from './FunctionCollection'

export default function Career({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="career" className="mx-auto pt-[0.32rem] lg:pt-[0.48rem] lg:mt-[1.28rem] lg:mb-[0.48rem]" onClick={closeDrawer}>
				<div className="px-[0.32rem] lg:px-[0.48rem] mx-auto w-screen max-w-screen lg:max-w-[1920px] overflow-x-hidden">
					<CareerHeader/>
					<CareerContenr/>
					<TimeLineCard/>
					<LifeAtMotoCard/>
				</div>
				
				<div className="mx-auto w-screen max-w-screen mt-[0.8rem] lg:mt-[1.28rem]">	
					<PerksContainer/>
				</div>
				
				<div className="px-[0.32rem] lg:px-[0.48rem] lg:mb-[2.88rem] mx-auto w-screen max-w-screen lg:max-w-[1920px] overflow-x-hidden">
					<RolesContainer/>
					<HowToApply/>
				</div>
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice}/>
			</section>
		</main>
	)
}

function CareerHeader() {
	return (
		<div className="relative my-[0.64rem] lg:mt-0 lg:px-[0.16rem]">
			<h1 className="font-extrabold text-[0.48rem] lg:text-[0.8rem] uppercase">[Career]</h1>
			<h2 className="font-extrabold text-[0.88rem] lg:text-[1.28rem] uppercase">How we hire</h2>
			<div className="flex items-center justify-between mt-[0.32rem] lg:mt-0">
				<span className="lg:hidden"><ArrowGroup/></span> 
				<span className="lg:absolute lg:bottom-[0.48rem] lg:right-0"><PositionBtn/></span>
			</div>
			<span className="absolute top-0 right-0 lg:right-[0.16rem] lg:scale-160"><StarIcon/></span>
		</div>
	)
}

function PositionBtn() {
	function scrollToPositions() { document.querySelector('#positions').scrollIntoView({ behavior: 'smooth', block: 'start' }) }
	return (
		<div className="px-[0.24rem] py-[0.12rem] lg:py-[0.16rem] border border-2 rounded-full flex gap-[0.16rem] items-center justify-between cursor-pointer" onClick={scrollToPositions}>
			<span className="font-medium text-[0.2rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.24rem]">Positions</span>
			<span className="size-[0.08rem] rounded-[50%] bg-slate-900"></span>
		</div>
	)
}

function CareerContenr() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center my-[1.28rem] lg:my-[0.64rem]">
			<span className="hidden lg:block"><ArrowGroup/></span>
			<p className="lg:mt-[1.28rem] lg:ml-[9.12rem] text-black/64 font-normal w-[74%] lg:w-[6.08rem] text-[0.24rem] leading-[0.24rem] lg:text-[0.32rem] lg:leading-[0.36rem] tracking-[-2%]">After the <span className="font-bold text-black">portfolio</span> meets our requirement, on average <span className="font-bold text-black">1~3 week</span> interview process with <span className="font-bold text-black">2 inteviews</span>.</p>
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
		<div className="flex items-center flex-nowrap lg:px-[0.16rem] py-[0.32rem] lg:py-[0.16rem] lg:mt-[2.64rem] overflow-x-auto" onWheel={throttledWheel}>
			{TimelineItems.map(item => <TimeLineElement {...item} key={item.number} timelineIndex={timelineIndex}/>)}
		</div>
	)
}

function LifeAtMotoCard() {
	return (
		<div className="mx-auto mt-[1.28rem] lg:mt-[2.8rem] w-full lg:px-[0.64rem] text-center scroll-fade-in">
			<h2 className="font-bold text-[0.48rem] lg:text-[0.88rem] uppercase lg:my-[0.4rem]">Life at moto</h2>
			<p className="text-[0.16rem] lg:text-[0.4rem] font-normal">We believe great design is borderless, and so are the minds behind it.</p>
			<p className="text-[0.16rem] lg:text-[0.4rem] font-normal">We’re not everywhere — but we think like we are.</p>
		</div>
	)
}

function TimeLineElement({id, number, title, timelineIndex}) {
	return (
		<div className="flex flex-col relative grow min-w-content shrink-0">
			<span className={`w-full border border-2 relative ${ timelineIndex == id ? 'border-black' : 'border-gray'}`}>
				<span className={`absolute left-[-0.06rem] lg:left-[-0.08rem] -translate-y-[50%] size-[0.12rem] lg:size-[0.16rem] rounded-[50%] ${timelineIndex == id ? 'bg-white border-black border-4 scale-150' : 'border-gray bg-gray border-2'}`}></span>
			</span>

			<div className={`w-content lg:min-w-content flex flex-col lg:flex-row lg:items-end gap-[0.16rem] lg:gap-[0.16rem] font-semibold tracking-[-2%] mt-[0.08rem] lg:mt-[0.08rem] ${ timelineIndex == id ? '' : 'opacity-40'}`}>
				<span className="text-[0.32rem] leading-[0.32rem] lg:text-[0.48rem] lg:leading-[0.48rem]">{number}</span>
				<span className="text-[0.2rem] leading-[0.2rem] lg:text-[0.24rem] lg:leading-[0.24rem]">{title}</span>
			</div>
		</div>
	)
}

function PerksContainer() {
	return (
		<div className="mx-auto flex items-center">
			<div className="mx-auto whitespace-nowrap flex flex-nowrap">
				{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
			</div>
		</div>
	)
}

function PerkCard({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card transition-transform duration-300 size-[4rem] lg:size-[5.6rem] p-[0.16rem] flex flex-col justify-between bg-[#f7f7f7] border border-2 border-[#000000] shrink-0 ${index === 0 ? '' : 'ml-[-2.72rem] lg:ml-[-3.76rem]'}`}>
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<span className="font-normal text-[0.2rem] lg:text-[0.24rem] tracking-[-2%]">{number}</span>
					<span className="font-bold scale-90 lg:scale-100"><QIcon/></span>
				</div>
				<span className="font-bold text-[0.8rem] lg:text-[1.28rem] tracking-[-2%]">{title}</span>
			</div>
			<div>
				<header className="font-semibold text-[0.32rem] lg:text-[0.48rem] mb-[0.16rem] tracking-[-2%]">{subtitle}</header>
				<p className="lg:w-[3.52rem] text-wrap text-[0.12rem] lg:text-[0.14rem] font-normal tracking-[-2%]">{content}</p>
			</div>
		</div>
	)
}

function RolesContainer() {
	return (
		<div className="mt-[1.28rem] lg:mt-[2.8rem] lg:mb-[2.8rem] grid grid-cols-1 lg:grid-cols-2">
			<div className="lg:w-[6.48rem] tracking-[-2%] scroll-fade-in">
				<h3 className="uppercase font-bold text-[0.2rem] leading-[0.2rem] lg:text-[0.24rem] lg:leading-[0.2rem]">join our team</h3>
				<p className="uppercase font-bold text-[0.48rem] leading-[0.48rem] lg:text-[0.88rem] lg:leading-[1.04rem] mt-[0.32rem] lg:mt-[0.5rem]">find your perfect role</p>
				<p className="text-[0.16rem] leading-[0.16rem] lg:text-[0.24rem] lg:leading-[0.32rem] mt-[0.16rem] lg:mt-[0.64rem] font-normal">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-[0.32rem] lg:text-[0.4rem] mt-[1.28rem] lg:mt-[0.64rem] lg:mt-[2.32rem] font-bold scroll-fade-in"><span className="mr-[0.02rem]">13</span>Positions</p>
			</div>
			<div id="positions" className="mt-[0.8rem] lg:mt-0 flex flex-col gap-[0.08rem]">
				{OpenningRoles.map((item, index) => <RoleCard {...item} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, tags, index, id}) {
	return (
		<article className="lg:w-[8.8rem] tracking-[-2%] scroll-fade-in">
			{index === 0 &&  <hr className="border border-black/20 mb-[0.24rem] lg:mb-[0.48rem] lg:w-[8.8rem]"></hr> }
			<header className="font-bold text-[0.16rem] lg:text-[0.2rem]">{team}</header>
			<div className="relative">
				<p className="text-[0.32rem] lg:text-[0.32rem] font-normal mt-[0.24rem] lg:mt-[0.24rem]">{title}</p>
				<div className="flex flex-row items-center gap-[0.02rem] mt-[0.48rem] lg:mt-[0.48rem]">
					{tags.map((tag, index) => <span className="text-[0.16rem] lg:text-[0.2rem] font-medium text-black opacity-40" key={index}>{tag}</span>)}
				</div>
				<hr className="border border-black/20 my-[0.24rem] lg:my-[0.48rem] w-full lg:w-[8.8rem]"></hr>
				<ApplyButon id={id}/>
			</div>
		</article>
	)
}

function ApplyButon({id}) {
	const {isHovered, setIsHovered} = useHoverHandler();
	const ArrowElement = (<div className={`bg-white size-[0.24rem] lg:size-[0.4rem] flex items-center justify-center rounded-full scale-15 transition duration-300 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>)
	// const DotElement = (<div className="size-[2.5rem] flex items-center justify-center"><span className="size-[0.5rem] bg-white rounded-full"></span></div>)

	return (
		<Link to={`/role/${id}`} className="will-change-transform absolute bottom-[0.48rem] lg:bottom-[0.48rem] right-0 flex items-center justify-between lg:gap-[0.16rem] bg-slate-900 rounded-full pl-[0.24rem] py-[0.04rem] pr-[0.04rem]"
			onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-white font-medium text-[0.2rem] lg:text-[0.24rem]">Apply</span>
			{/* {isHovered ? ArrowElement : DotElement} */}
			{ArrowElement}
		</Link>
	)
}

export function HowToApply() {
	return (
		<div className="tracking-[-2%] my-[1.6rem] lg:my-[0.48rem] w-full mx-auto">
			<h2 className="uppercase font-bold text-[0.48rem] lg:text-[0.88rem] lg:leading-[104px]">how to apply</h2>
			<p className="mt-[0.48rem] lg:mt-[0.48rem] text-[0.2rem] leading-[0.2rem] lg:text-[0.32rem] lg:leading-[0.48rem]">Send your CV and portfolio to <span className="font-bold">({CompanyEmail})</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-[0.2rem] leading-[0.2rem] lg:text-[0.32rem] lg:leading-[0.48rem]">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-[0.2rem] leading-[0.2rem] lg:text-[0.32rem] lg:leading-[0.48rem] my-[0.32rem] lg:my-[0.48rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
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
