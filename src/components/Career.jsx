import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { TimelineItems, PerkItemsData, OpenningRoles } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon, ArrowOnlyIcon, MobileArrowBtn} from './SocialIconsCollection'
import { SiteInfoCard,  SiteFooter, EmailCard } from './Footer'
import { useDrawerHandler, useHoverHandler } from './FunctionCollection'

export default function Career({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="career" className="mx-auto pt-[0.32rem] lg:pt-[0.48rem] lg:mt-[1.28rem] lg:mb-[0.48rem]" onClick={closeDrawer}>
				<div className="px-[0.32rem] lg:px-[0.96rem] mx-auto w-screen max-w-screen lg:w-screen lg:max-w-[1920px] overflow-x-hidden">
					<CareerHeader isMobileDevice={isMobileDevice}/>
					<CareerContent/>
				</div>
				<div className="mx-auto w-screen max-w-screen lg:px-[0.96rem] mt-[0.8rem] lg:mt-[1.48rem] overflow-x-hidden">
					<TimeLineCard isMobileDevice={isMobileDevice}/>
				</div>
				<div className="mx-auto w-screen max-w-screen mt-[2.16rem] lg:mt-[2.8rem] overflow-x-hidden">
					<LifeAtMotoCard/>
				</div>

				<div className="mx-auto w-screen max-w-screen mt-[0.8rem] lg:mt-[1.6rem] overflow-x-hidden">
					<PerksContainer/>
				</div>

				<div className="px-[0.32rem] lg:px-[0.96rem] mx-auto w-screen max-w-screen lg:w-screen lg:max-w-[1920px] overflow-x-hidden">
					<RolesContainer isMobileDevice={isMobileDevice}/>
				</div>

				{/* <div className="mb-[1.66rem] lg:mb-0 mt-[2.16rem] lg:mt-[2.8rem]"></div> */}

				<div className="px-[0.32rem] lg:px-[0.96rem] lg:mb-[2.88rem] mx-auto w-screen max-w-screen lg:w-screen lg:max-w-[1920px] overflow-x-hidden">
					<HowToApply/>
				</div>

				<div className="mt-[-0.8rem] lg:mt-[-7rem]"><SiteInfoCard isMobileDevice={isMobileDevice}/></div>
				<SiteFooter isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</section>
		</main>
	)
}

function CareerHeader({isMobileDevice}) {
	return (
		<div className="relative my-[0.64rem] lg:mt-0">
			<h1 className="font-extrabold text-[0.48rem] lg:text-[0.8rem] uppercase">[Career]</h1>
			<h2 className="font-extrabold text-[0.88rem] lg:text-[1.28rem] uppercase">How we hire</h2>
			<div className="flex items-center justify-between mt-[0.32rem] lg:mt-0">
				<span className="lg:hidden"><ArrowGroupImg/></span>
				<span className="lg:absolute lg:bottom-[0.48rem] lg:right-0">
					{ isMobileDevice ? <PositionButtonMobile/> : <PositionButtonDesktop/> }
				</span>
			</div>
			<span className="absolute top-0 right-0 lg:right-[0.16rem] lg:scale-160"><StarIcon/></span>
		</div>
	)
}

function PositionButtonDesktop() {
	function scrollToPositions() { document.querySelector('#positions').scrollIntoView({ behavior: 'smooth', block: 'start' }) }
	const {isHovered, setIsHovered} = useHoverHandler();
	return (
		<div onClick={scrollToPositions} onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
			className="pl-[0.24rem] pr-[0.04rem] py-[0.04rem] border border-2 rounded-full flex gap-[0.16rem] items-center justify-between cursor-pointer">
			<span className="font-medium text-[0.24rem] leading-[0.24rem]">Positions</span>
			<div className={`relative size-[0.48rem] flex items-center justify-center rounded-full transition duration-300`}>
				<span className={`absolute rounded-full border border-black bg-black size-[0.1rem] transition duration-300 ${isHovered ? 'scale-460' : ''}`}></span>
				<span className={`transition duration-300 ${isHovered ? 'scale-110' : 'scale-0'}`}><ArrowWhiteIcon/></span>
			</div>
		</div>
	)
}

function PositionButtonMobile() {
	function scrollToPositions() { document.querySelector('#positions').scrollIntoView({ behavior: 'smooth', block: 'start' }) }
	const designedSmallWidth = 750
	const [iconRatio, setIconRatio] = useState(1.0)

	useEffect(() => {
		function setRatio() {
			const windowWidth = document.documentElement.clientWidth;
			if (windowWidth <= designedSmallWidth) {
				let rSmall = parseFloat((windowWidth / designedSmallWidth).toFixed(2))
				setIconRatio(rSmall)
			}
		}
		setRatio()
			window.addEventListener('load', setRatio)
	    window.addEventListener('resize', setRatio)
	    window.addEventListener('pageshow', setRatio)

	    return () => {
	      window.removeEventListener('load', setRatio);
	      window.removeEventListener('resize', setRatio);
	      window.removeEventListener('pageshow', setRatio);
	    }
	}, [])

	return (
		<div onClick={scrollToPositions}
			className="pl-[0.24rem] pr-[0.04rem] py-[0.06rem] border border-1 rounded-full flex gap-[0.16rem] items-center justify-between cursor-pointer">
			<span className="font-medium text-[0.2rem] leading-[0.24rem]">Positions</span>
			<div className={`relative size-[0.36rem] flex rounded-full border border-black bg-black items-center justify-center rounded-full`}>
				<span style={{ transform: `scale(${iconRatio})`}}><ArrowWhiteIcon/></span>
			</div>
		</div>
	)
}

function CareerContent() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center mt-[1.68rem] lg:mt-[1.28rem]">
			<span className="hidden lg:block"><ArrowGroupImg/></span>
			<div className="lg:ml-[10.06rem] text-black/64 font-normal text-[0.24rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.36rem] tracking-[-2%]">
				<p>After the <span className="font-bold text-black">portfolio</span> meets our requirement,</p>
				<p>on average <span className="font-bold text-black">1~3 week</span> interview process with</p>
				<p><span className="font-bold text-black">2 inteviews</span>.</p>
			</div>
		</div>
	)
}

function TimeLineCard({isMobileDevice}) {
	const [clickedID, setClickedID] = useState(0)
	return (
		<div className="w-full mx-auto flex items-center overflow-x-scroll">
			{/* <div className="mx-auto whitespace-nowrap flex flex-nowrap"> */}
			<div className="w-full flex items-center flex-nowrap px-[0.32rem] lg:px-[0.5rem] py--[0.32rem] lg:py-[0.16rem] overflow-x-auto">
				{TimelineItems.map((item, index) => <TimeLineElement {...item} clickedID={clickedID} setClickedID={setClickedID} isMobileDevice={isMobileDevice} key={item.id} isEven={index % 2 === 0} isLastItem={index === (TimelineItems.length - 1)}/>)}
			</div>
		</div>
	)
}

function LifeAtMotoCard() {
	return (
		<div className="mx-auto w-full text-center">
			<h2 className="font-bold text-[0.48rem] lg:text-[0.8rem] uppercase lg:my-[0.4rem]">Life at moto</h2>
			<p className="text-[0.16rem] lg:text-[0.24rem] lg:leading-[0.32rem] font-normal">We believe great design is borderless, and so are the minds behind it.</p>
			<p className="text-[0.16rem] lg:text-[0.24rem] lg:leading-[0.32rem] font-normal">We’re not everywhere — but we think like we are.</p>
		</div>
	)
}

function TimeLineElement({id, title, isEven, isLastItem, isMobileDevice, clickedID, setClickedID}) {
	const item = {id, title, isEven, isLastItem, clickedID, setClickedID}
	return isMobileDevice ? <TimelimeIconMobile {...item}/> : <TimelimeIconDesktop {...item}/>
}

function TimelimeIconMobile({id, title, isEven, isLastItem, clickedID, setClickedID}) {
	return (
		<div className={`flex flex-col grow box-border min-w-content hover:text-black hover:cursor-pointer ${clickedID === id ? 'text-black' : 'text-black/40'} `} onClick={() => setClickedID(id)}>
			<span className="text-[0.24rem] leading-[0.24rem] lg:text-[0.28rem] lg:leading-[0.36rem] translate-x-[-0.06rem]">{id}</span>
			<div className="flex items-center mt-[0.12rem] mb-[0.32rem] h-[0.4rem] relative text-black">
				<span className={`w-full ${isEven ? 'h-[0.4rem]' : 'h-[0.2rem]'} border-l-1 lg:border-l-2 ${isLastItem ? 'border-r-1 lg:border-r-2 h-[0.4rem]' : ''}`}></span>
				<span className="absolute w-full border-t-2 lg:border-t-2 bottom-[0.2rem] lg:bottom-[0.19rem] translate-y--[-0.69rem] lg:translate-y--[-0.77rem]"></span>
				{ id === 3 && clickedID === 0 ? <CircleIcon isClicked={true}/> : <CircleIcon isClicked={clickedID === id}/> }
			</div>
			<span className="pr-[0.4rem] lg:pr-0 text-nowrap text-[0.16rem] leading-[0.16rem] lg:text-[0.24rem] lg:leading-[0.24rem] translate-x-[-0.06rem]">{title}</span>
		</div>
	)
}

function CircleIcon({isClicked}) {
	return (
		<span className={`absolute rounded-full border-[0.1rem] flex items-center justify-center left-[-0.129rem] ${isClicked ? 'block' : 'hidden'}`}>
			<span className="size-[0.08rem] bg-white rounded-full"></span>
		</span>
	)
}

function TimelimeIconDesktop({id, title, isEven, isLastItem}) {
	const {isHovered, setIsHovered} = useHoverHandler();
	return (
		<div className={`flex flex-col grow box-border min-w-content text-black/40 hover:text-black hover:cursor-pointer`} onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-[0.24rem] leading-[0.24rem] lg:text-[0.28rem] lg:leading-[0.36rem] translate-x-[-0.06rem]">{id}</span>
			<div className="flex items-center mt-[0.12rem] mb-[0.32rem] h-[0.4rem] relative text-black">
				<span className={`w-full ${isEven ? 'h-[0.4rem]' : 'h-[0.2rem]'} border-l-1 lg:border-l-2 ${isLastItem ? 'border-r-1 lg:border-r-2 h-[0.4rem]' : ''}`}></span>
				<span className="absolute w-full border-t-2 lg:border-t-2 bottom-[0.2rem] lg:bottom-[0.19rem] translate-y--[-0.69rem] lg:translate-y--[-0.77rem]"></span>
				<span className={`absolute rounded-full border-[0.1rem] flex items-center justify-center left-[-0.129rem] ${isHovered ? 'block' : 'hidden'}`}>
					<span className="size-[0.08rem] bg-white rounded-full"></span>
				</span>
			</div>
			<span className="pr-[0.4rem] lg:pr-0 text-nowrap text-[0.16rem] leading-[0.16rem] lg:text-[0.24rem] lg:leading-[0.24rem] translate-x-[-0.06rem]">{title}</span>
		</div>
	)
}

function PerksContainer() {
	return (
		<div className="mx-auto flex items-center overflow-x-scroll">
			<div className="mx-auto whitespace-nowrap flex flex-nowrap px-[0.36rem]">
				{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
			</div>
		</div>
	)
}

function PerkCard({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card hover:cursor-pointer transition-transform duration-300 size-[4rem] lg:size-[4.8rem] pt-[0.24rem] lg:pt-[0.28rem] pb-[0.4rem] px-[0.32rem] bg-[#f7f7f7] border border-2 border-[#000000] shrink-0 ${index === 0 ? '' : 'ml-[-2.72rem] lg:ml-[-2.74rem]'}`}>
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<span className="font-normal text-[0.2rem] tracking-[-2%]">{number}</span>
					<span className="font-bold mt-[0.1rem] size-[0.24rem] flex items-center justify-center"><PerkIcon iconName={number}/></span>
				</div>
				<span className="font-bold text-[0.72rem] lg:text-[0.8rem] tracking-[-2%]">{title}</span>
			</div>
			<div className="mt-[1.6rem] lg:mt-[1.8rem] max-w-full">
				<header className="font-semibold text-[0.24rem] lg:text-[0.32rem] tracking-[-2%] text-wrap">{subtitle}</header>
				<p className="mt-[0.2rem] lg:mt-[0.24rem] overflow-hidden text-clip lg:text-wrap text-[0.14rem] font-normal tracking-[-2%]">{content}</p>
			</div>
		</div>
	)
}

function PerkIcon({ iconName }) {
  return <img src={`/perk-${iconName}.png`} loading="lazy" alt={iconName} className="size-[0.24rem] object-cover object-center"/>;
}

function RolesContainer({isMobileDevice}) {
	return (
		<div className="mt-[2.16rem] lg:mt-[2.8rem] mb-[2.16rem] lg:mb-[2.8rem] grid grid-cols-1 lg:grid-cols-2">
			<div className="lg:w-[6.48rem] tracking-[-2%]">
				<h3 className="uppercase font-bold text-[0.2rem] leading-[0.2rem] lg:text-[0.24rem] lg:leading-[0.32rem]">join our team</h3>
				<p className="uppercase font-bold text-[0.48rem] leading-[0.48rem] lg:text-[0.8rem] lg:leading-[0.96rem] mt-[0.48rem] lg:mt-[0.16rem]">find your perfect role</p>
				<div className="mt-[0.12rem] lg:mt-[0.72rem] flex lg:flex-col lg:gap-[0.04rem]">
					<p className="text-[0.16rem] leading-[0.16rem] lg:text-[0.2rem] lg:leading-[0.28rem] font-normal">Explore our open roles and find the one that</p>
					<p className="text-[0.16rem] leading-[0.16rem] lg:text-[0.2rem] lg:leading-[0.28rem] font-normal">fits not just your resume, but your rhythm.</p>
				</div>
				<p className="text-[0.32rem] lg:text-[0.36rem] mt-[1.28rem] lg:mt-[2.4rem] font-bold"><span className="">{OpenningRoles.length}&nbsp;</span>Positions</p>
			</div>
			<div id="positions" className="mt-[0.8rem] lg:mt-0 flex flex-col gap-[0.08rem]">
				{OpenningRoles.map((item, index) => <RoleCard {...item} isMobileDevice={isMobileDevice} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, index, id, fullTime, onSite, isRemote, isMobileDevice}) {
	return (
		<article className="w-full tracking-[-2%]">
			{index === 0 &&  <hr className="border border-[0.8px] lg:border-1 border-black/20 mb-[0.48rem] w-full"></hr> }
			<header className="font-bold text-[0.16rem] lg:text-[0.2rem]">{team}</header>
			<div className="relative">
				<p className="text-[0.32rem] lg:text-[0.32rem] font-normal mt-[0.24rem] lg:mt-[0.24rem]">{title}&nbsp;/&nbsp;{fullTime}</p>
				<div className="flex flex-row items-center gap-[0.08rem] mt-[0.48rem] lg:mt-[0.48rem] text-[0.16rem] lg:text-[0.2rem] font-medium text-black opacity-40">
					<span>{fullTime}</span>
					<span>{onSite}</span>
					<span>{isRemote}</span>
				</div>
				<hr className="border border-[0.8px] lg:border-1 border-black/20 my-[0.48rem] w-full"></hr>
				{isMobileDevice ? <ApplyButtonMobile id={id}/> : <ApplyButtonDeskstop id={id}/>}
			</div>
		</article>
	)
}

function ApplyButtonDeskstop({id}) {
	const {isHovered, setIsHovered} = useHoverHandler();

	return (
		<Link to={`/role/${id}`} className="will-change-transform absolute bottom-[0.4rem] right-0 flex items-center justify-between gap-[0.16rem] bg-black rounded-full pl-[0.24rem] pr-[0.04rem] py-[0.04rem]"
			onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-white font-medium text-[0.24rem]">Apply</span>
			{/* <div className={`bg-white size-[0.24rem] lg:size-[0.4rem] flex items-center justify-center rounded-full scale-15 transition duration-300 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>	 */}
			<div className={`relative size-[0.4rem] flex items-center justify-center rounded-full transition duration-300`}>
				<span className={`absolute rounded-full border border-white bg-white size-[0.08rem] transition duration-300 ${isHovered ? 'scale-460' : ''}`}></span>
				<span className={`transition duration-300 ${isHovered ? 'scale-100' : 'scale-0'}`}><ArrowOnlyIcon/></span>
			</div>
		</Link>
	)
}

function ApplyButtonMobile({id}) {
	return (
		<Link to={`/role/${id}`} className="absolute bottom-[0.4rem] right-0 flex items-center bg-black rounded-full pl-[0.24rem] pr-[0.04rem] py-[0.06rem] text-white font-medium text-[0.2rem]">
			Apply
			<span className="size-[0.36rem] bg-white rounded-full flex items-center justify-center ml-[0.16rem]"><MobileArrowBtn/></span>
		</Link>
	)
}

export function HowToApply() {
	return (
		<div className="tracking-[-2%] w-full mx-auto">
			<h2 className="uppercase font-bold text-[0.48rem] lg:text-[0.8rem] lg:leading-[0.8rem]">how to apply</h2>
			<div className="mt-[0.48rem] lg:mt-[0.48rem] lg:flex">
				<p className="text-[0.2rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.4rem]">Send your CV and portfolio to <span className="font-bold"><EmailCard/></span>,&nbsp;</p>
				<p className="text-[0.2rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.4rem]">with the subject "<span className="font-bold">Position + Name</span>".</p>
			</div>
			<p className="text-[0.2rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.4rem]">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-[0.2rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.4rem] my-[0.24rem] lg:my-[0.4rem]">*File Types: ( PDF format only )</p>
		</div>
	)
}


function ArrowGroupImg() {
	return ( <img className="h-[0.17rem] object-cover object-center" src="/arrow-group.png" loading="lazy"></img> )
}

function ArrowWhiteIcon() {
	return (
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="7.9165" y="1.05725" width="8.01079" height="2" transform="rotate(45 7.9165 1.05725)" fill="#F7F7F7"/>
				<rect x="6.4917" y="10.9825" width="8.04497" height="2" transform="rotate(-45 6.4917 10.9825)" fill="#F7F7F7"/>
				<rect x="0.999512" y="5.88672" width="10" height="2" fill="#F7F7F7"/>
			</svg>
		)
}
