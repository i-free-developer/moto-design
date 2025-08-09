import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import '../assets/animations.css';
import { SocialIconItems, SiteLinks, SocialIconLinkItem } from './SocialIconsCollection'
import { useScrollDirection, useHoverHandler } from './FunctionCollection'
import { EmailCard } from './Footer'

export default function Navbar({drawerStatus, handleClickDrawer, closeDrawer, smallScreenRatioDecimal, bigScreenRatioDecimal, frostedGlass = false}) {
	const scrollDirection = useScrollDirection();
	const [isPortfolioPath, setIsportfolioPage] = useState(false)
	const { pathname } = useLocation();
	// pathname: '/portfolio/1'
	// console.log(pathname)
	function checkPortfolioPath(path) { return /^\/portfolio\/\d+$/.test(path) || /^\/role\/\d+$/.test(path)}

	useEffect(() => {
	    const preventScroll = (e) => {
	      e.preventDefault();
	      e.stopPropagation();
	      return false;
	    }

	    const preventKeyBoardScroll = (e) => {
	      const keys = [32, 33, 34, 35, 37, 38, 39, 40];
	      if (keys.includes(e.keyCode)) {
	        e.preventDefault();
	        return false;
	      }
	    }
	    if (drawerStatus === 'opened') {
	    	document.addEventListener("scroll", preventScroll, {passive: false}); // add event listener
	    	document.addEventListener("wheel", preventScroll, {passive: false}); // add event listener
	    	document.addEventListener('keydown', preventKeyBoardScroll, false);
	    }
	  
	    return () => {
	        document.removeEventListener("scroll", preventScroll); // clean up
	        document.removeEventListener("wheel", preventScroll); // clean up
	        document.removeEventListener("keydown", preventKeyBoardScroll); // clean up
	    }
    }, [drawerStatus])

	useEffect(() => {
		setIsportfolioPage(checkPortfolioPath(pathname))
	}, [])


	return (
		// sm: py-0.12rem -> py-0.4rem h-0.34+0.4*2= 1.14rem
		// h-0.54rem lg:h-0.98rem px-3.5rem h-0.34+0.32*2=0.98
		<div className={`mx-auto sticky relative z-100 min-w-screen max-w-screen ${ scrollDirection === "down" ? "top-[-1.14rem] lg:top-[-0.98rem]" : "top-0"}`}>
			<section id="navbar" className={`text-black mx-auto px-[0.32rem] lg:px-[0.56rem] py-[0.4rem] lg:py-[0.32rem] transition-[top] duration-400 ${frostedGlass ? 'bg--[#F7F7F7]/40 bg-white/40 backdrop-blur-[20px]' : ''}`}>
				<nav className="flex justify-between items-center h-[0.34rem]" onClick={closeDrawer}>
					{/* <div onClick={handleClickDrawer} className="cursor-pointer size-[0.25rem] lg:size--[1.25rem] flex items-center justify-center">{drawerStatus == 'opened' ? <CloseIcon/> : <BarsIcon/>}</div> */}
					<LeftSectionIcons handleClickDrawer={handleClickDrawer} drawerStatus={drawerStatus} isPortfolioPath={isPortfolioPath}/>
					<Link to="/" className="h-[0.34rem] max-h-[0.34rem] object-cover flex items-center justify-center"><LogoIcon scaleRatio={smallScreenRatioDecimal || bigScreenRatioDecimal}/></Link>
					<LangButtons/>
				</nav>
			</section>
			{<DrawerCard drawerStatus={drawerStatus}/>}
		</div>
	)
}

const drawerClasses = {initial: '-translate-x-[36rem] hidden', opened: 'drawer-in', closed: 'drawer-out'}

function DrawerCard({drawerStatus}) {
	// bg-[#f1f1f1]/40
	const drawerClassName = drawerClasses[drawerStatus]
	return(
		<div
			className={`bg-[#EAEAEA]/48 backdrop-blur-[20px] px-[0.72rem] lg:px-[0.64rem] pt-[1.88rem] lg:pt-[1.98rem] pb-[0.72rem] lg:pb-[0.64rem] w-[4.8rem] lg:w-[5.8rem] min-h-[9.5rem] h-[calc(100vh-4.8rem-0.56rem)] lg:min-h-[9rem] lg:h-[calc(100vh-0.98rem-56px)] flex flex-col justify-between absolute top-[1.14rem] lg:top-[0.98rem] rounded-[0.24rem] ${drawerClassName}`}>
			<div className="flex flex-col items-start gap-[0.48rem] lg:gap-[0.32rem]">
       			{SiteLinks.map((item, index) => <SiteLinkItem {...item} key={index}/>)}
			</div>
			<SocialIconsContainer/>
		</div>
	)
}

function SocialIconsContainer() {
	return (
		<div className="pr-[1rem] lg:pr-[0.32rem]">
			<div className="flex items-end gap-[0.38rem] lg:gap-[0.32rem]">
        		{SocialIconItems.map((item, index) => <SocialIconLinkItem {...item} key={index} />)}
			</div>
			<hr className="border border-[0.8px] mt-[0.32rem] lg:mt-[0.24rem] w-full w--[2.32rem] lg:w--[13rem]"></hr>
			<p className="text-[0.12rem] lg:text-[0.12rem] font-medium text-[#161619]/48 mt-[0.24rem] lg:mt-[0.24rem]"><EmailCard/></p>
		</div>
	)
}

function SiteLinkItem({url, title, linkTo}) {
	const {isHovered, setIsHovered} = useHoverHandler();
	const [mouseLeft, setMouseLeft] = useState(false)
	return (
		<div className="flex flex-col" onMouseEnter={() => {setIsHovered(true); setMouseLeft(false)}} onMouseOver={() => {setIsHovered(true); setMouseLeft(false)}} onMouseLeave={() => {setIsHovered(false); setMouseLeft(true)}}>
			<Link to={linkTo} className="text-[0.4rem] lg:text-[0.48rem] font-semibold">{title}</Link>
			<hr className={`mt-[-0.08rem] lg:mt-[-0.08rem] border border-[1px] ${isHovered ? 'hover-border' : 'border-transparent'} ${ mouseLeft ? 'reverse-border' : 'border-transparent'}`}></hr>
		</div>
	)
}

function LangButtons() {
	const [langStatus, setLangStatus] = useState('initial')
	const langClasses = {initial: 'hidden', closed: 'lang-slide-out', opened: 'lang-slide-in'}
	function handleLang() {
		let newStatus; 
		if (langStatus === 'initial' || langStatus === 'closed') { newStatus = 'opened' } 
		if (langStatus === 'opened') { newStatus = 'closed' }
		setLangStatus(newStatus)
	}
	let langClassName = langClasses[langStatus]

	return (
		<div className="relative cursor-pointer">
			<div className="flex items-end justify-between" onClick={handleLang}>
				<span className="text-[0.3rem] lg:text-[0.2rem] font-bold mr-[0.06rem]">En</span>
				<span className="mb-[6px]">{langStatus ? <LangArrowIcon/> : <LangArrowIcon />}</span>
			</div>
			<div className={`absolute top-[0.45rem] lg:top-[0.32rem] flex items-center justify-center ${langClassName}`}>
				<span className="text-[0.3rem] lg:text-[0.2rem] font-bold">Cn</span>
			</div>
		</div>
	)
}

function LeftSectionIcons({isPortfolioPath, handleClickDrawer, drawerStatus}) {
	const navigate = useNavigate()
	function handleGoBack() { navigate(-1) }

	if (isPortfolioPath) {
		return (<div onClick={handleGoBack} className="cursor-pointer size-[0.25rem] flex items-center justify-center"><BackIcon/></div>)
	} else {
		return (<div onClick={handleClickDrawer} className="cursor-pointer size-[0.25rem] flex items-center justify-center">{drawerStatus == 'opened' ? <CloseIcon/> : <BarsIcon/>}</div>)
	}
}

function LogoIcon({scaleRatio = 1}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'center', }} fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 582.63 136.6">
		  <path d="M6.27,.32C2.86,.11,0,2.86,0,6.21v29.95s.01,0,.02,0v94.5c0,3.25,2.69,5.88,6.01,5.88H30.83c3.32,0,6.01-2.63,6.01-5.88V43.86c35.27,14.41,60.57,47.52,62.94,86.71,.19,3.17,2.75,5.69,5.99,5.69h24.81c3.38,0,6.18-2.74,6.02-6.05C133.35,60.64,76.96,4.68,6.27,.32Z"/>
		  <path d="M188.22,130.68c-3.02-49.99-43.35-90.13-94.09-94.1-3.18-.25-5.69-2.74-5.69-5.87V6.34c0-3.36,2.86-6.12,6.28-5.91,70.68,4.37,127.07,60.33,130.32,129.89,.15,3.31-2.64,6.05-6.02,6.05h-24.8c-3.24,0-5.81-2.53-6-5.7Z"/>
		  <g>
		    <path d="M300.37,18.9c-41.4-6.65-76.68,27.91-69.89,68.47,4.11,24.56,24.33,44.37,49.4,48.4,41.4,6.65,76.68-27.91,69.89-68.47-4.11-24.56-24.33-44.37-49.4-48.4Zm-10.25,89.32c-15.98,0-28.93-13.27-28.93-29.63s12.95-29.63,28.93-29.63,28.93,13.27,28.93,29.63-12.95,29.63-28.93,29.63Z"/>
		    <path d="M418.22,18.04h-22.89V5.9c0-3.26-2.7-5.9-6.02-5.9h-19.63c-3.26,0-5.9,2.59-5.9,5.78V77.3h.03c0,.2-.03,.39-.03,.58,0,30.44,23.65,55.46,53.94,58.39,3.6,.35,6.55-2.34,6.55-5.88v-19.44c0-2.9-2.18-5.27-5.09-5.78-13.52-2.37-23.79-13.95-23.8-27.87h-.04v-23.19h22.93c3.31,0,6-2.63,6-5.87V23.95c0-3.27-2.7-5.91-6.04-5.91Z"/>
		    <path d="M531.71,118.98c.84-11.46,7.24-21.73,16.91-27.78,2.31-1.45,3.7-3.94,4.04-6.61,.76-6.04,.6-12.37-.72-18.86-4.97-24.52-25.76-43.84-51.06-47.11-39.16-5.07-72.23,26.57-68.45,64.65,2.85,28.74,27.52,51.75,56.95,53.26,14.3,.73,27.57-3.42,38.26-10.88,2.25-1.57,3.87-3.96,4.06-6.66Zm-39.16-10.76c-15.98-.04-28.89-13.34-28.85-29.7,.04-16.36,13.03-29.6,29.01-29.56,15.98,.04,28.9,13.34,28.85,29.7-.04,16.36-13.03,29.6-29.01,29.56Z"/>
		  </g>
		  <path d="M564.3,136.3h0c-10.13,0-18.34-8.04-18.34-17.96h0c0-9.92,8.21-17.96,18.34-17.96h0c10.13,0,18.34,8.04,18.34,17.96h0c0,9.92-8.21,17.96-18.34,17.96Z"/>
		</svg>
	)
}

function BarsIcon() {
	return (
		<svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<rect width="20" height="4" fill="currentColor"/>
			<rect y="7" width="20" height="4" fill="currentColor"/>
			<rect y="14" width="20" height="4" fill="currentColor"/>
		</svg>
	)
}

function CloseIcon() {
	return (
		<svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<rect x="5.31348" y="19.4558" width="20" height="4" transform="rotate(-45 5.31348 19.4558)" fill="currentColor"/>
			<rect width="20" height="4" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 22.6274 19.799)" fill="currentColor"/>
		</svg>
	)
}

function LangArrowIcon() {
	return (
		<svg width="6" height="5" viewBox="0 0 6 5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 5L5.59808 0.5H0.401924L3 5Z" fill="currentColor"/></svg>
	)
}

function BackIcon() {
	return (
		<svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect y="11.3137" width="16" height="5" transform="rotate(-45 0 11.3137)" fill="#161619"/>
			<rect width="16" height="5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 11.3639)" fill="#161619"/>
			<rect x="3" y="9" width="26" height="5" fill="#161619"/>
		</svg>
	)
}