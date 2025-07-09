import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { PortfolioData } from '../data/site-data'
import Navbar from './Navbar'
import { SiteInfoCard,  SiteFooter } from './Footer'
import { useDrawerHandler, useHoverHandler } from './FunctionCollection'

export default function Portfolio({isMobileDevice, smallScreenRatioDecimal}) {
	const [isMobile, setIsMobile] = useState(false)
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	
	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="portfolio" className="" onClick={closeDrawer}>
				<div className="mx-auto w-screen max-w-screen lg:max-w-[1920px] px-[0.32rem] lg:px-[0.48rem] pt-[0.48rem] lg:pt-[0.48rem] lg:mt-[1.28rem] lg:mb-[0.48rem] overflow-x-hidden">
					<PortfolioHeader/>
					<div className="pl-[0.16rem] lg:pl-[0.32rem] my-[0.48rem] lg:my-[0.96rem] flex flex-row justify-between">
						<MobileDeskIcons isMobile={isMobile} setIsMobile={setIsMobile} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
						<p className="self-start lg:mb-[0.48rem] text-[0.28rem] leading-[0.28rem] lg:text-[0.32rem] lg:leading-[0.32rem] text-black/64 w-[55%] lg:w-[4.16rem] tracking-[-2%] font-normal text-right">Our user-centered design encourages productivity and boosts revenue</p>
					</div>
				</div>
				
				<div className="mx-auto w-screen max-w-screen lg:max-w-[1920px] lg:px-[0.48rem]">
	      	{isMobile ? <MobilePortfolios isMobileDevice={isMobileDevice}/> : <DesktopPortfolios/>}
	      </div>
	      
	      <SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</section>
		</main>
	)
}

function PortfolioHeader() {
	return (
		<article className="flex flex-col lg:flex-row justify-between my-[1rem] lg:my-[0.64rem] tracking-[-2%]">
			<header className="text-[0.56rem] leading-[0.64rem] lg:text-[0.8rem] lg:leading-[0.96rem] lg:w-[45%] font-normal">We don't do cookie-cutter solutions</header>
			<p className="mt-[0.16rem] lg:mt-[0.16rem] w-full lg:w-[20%] text-black/64 text-[0.24rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.24rem] lg:text-right font-normal">Backing the best Web 3.0 founders & products</p>
		</article>
	)
}

function MobileDeskIcons({isMobile, setIsMobile, smallScreenRatioDecimal}) {
	return (
		<div className="cursor-pointer self-end flex items-center gap-[0.24rem] lg:gap-[0.24rem] lg:mt-[0.16rem] lg:mb-[0.64rem]">
			<span onClick={() => setIsMobile(true)} className="">{isMobile ? <MobileIconBlack scaleRatio={smallScreenRatioDecimal}/> : <MobileIconWhite scaleRatio={smallScreenRatioDecimal}/> }</span>
			<span onClick={() => setIsMobile(false)} className="">{isMobile ? <DesktopIconWhite scaleRatio={smallScreenRatioDecimal}/> : <DesktopIconBlack scaleRatio={smallScreenRatioDecimal}/> }</span>
		</div>
	)
}

function DesktopPortfolios() {
  return (
    <div className="mb-[3.6rem] px-[0.32rem] lg:px-0 grid grid-cols-1 lg:grid-cols-5 gap-[0.24rem] lg:gap-[0.24rem]">
      {PortfolioData.desktop.map((item, index) => <DesktopCard {...item} index={index} totalNumber={PortfolioData.desktop.length} key={index}/>)}
    </div>
  )
}

function DesktopCard({id, title, description, image, url, index, totalNumber}) {
	const {isHovered, setIsHovered} = useHoverHandler();
	const [colsIndex, setColsIndex] = useState(0)
	
	useEffect(() => {
		let itemIndex = index
		while (itemIndex > 4) { itemIndex = itemIndex % 5 }
		// let finalIndex = itemIndex === 5 ? itemIndex - 1 : itemIndex;
		// if (index === totalNumber - 1) { itemIndex = 4}
		setColsIndex(itemIndex)
	}, [index])
	
	const spanClasses = {
		0: 'col-span-1 lg:col-span-3 relative h-[4.8rem] lg:h-[5.76rem]',
		1: 'col-span-1 lg:col-span-2 relative h-[4.8rem] lg:h-[5.76rem]',
	  2: 'col-span-1 lg:col-span-2 relative h-[4.8rem] lg:h-[5.76rem]',
	  3: 'col-span-1 lg:col-span-3 relative h-[4.8rem] lg:h-[5.76rem]',
	  4: 'col-span-1 lg:col-span-5 relative h-[4.8rem] lg:h-[5.76rem]',
	}

	return (
		<div className={`${spanClasses[colsIndex]} rounded-[0.28rem] lg:rounded-[0.3rem] overflow-hidden relative`}>
			<span style={{pointerEvents: 'none'}}
        className={`
				z-5 absolute left-0 right-0 bottom-0 min-w-full h-[50%] blur--[8px] bg-gradient-to-b from-[#D1D1DA]/0 to-[#000000] opacity-0 transition-opacity transition-transform duration-400 ease-[cubic-bezier(0,0,.4,.97)]
				${isHovered ? 'opacity-100' : 'translate-y-[10%] '}
			`}></span>
			<Link to={`/portfolio/${id}`} className="max-w-full h-full block cursor-pointer rounded-[0.28rem] lg:rounded-[0.3rem]">
				<div className="w-full h-full overflow-hidden rounded-[inherit]">
					<img src={image} loading="lazy" className={`w-full h-full object-cover object-center rounded-[inherit] transition-transform duration-400 ${isHovered ? 'scale-104' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></img>
				</div>
				<DesktopBottomCard title={title} description={description}/>
			</Link>
		</div>
	)
}

function DesktopBottomCard({title, description}) {
	const {isHovered, setIsHovered} = useHoverHandler();
	return (
		<div className="z-10 absolute left-[0.12rem] right-[0.12rem] bottom-[0.12rem] px-[0.32rem] py-[0.24rem] lg:py-[0.24rem] bg-white rounded-[0.24rem] flex justify-between items-center" onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className="max-w-3/4">
				<header className="font-bold mb-[0.16rem] lg:mb-[0.02] text-[0.24rem]">{title}</header>
				<p className="text-[0.16rem]">{description}</p>
			</div>
			<div className="size-[0.72rem] lg:size-[0.72rem] bg-black/16 flex items-center justify-center rounded-full">
				<div className={`w-[0.16rem] lg:w-[0.24rem] ${isHovered ? '-rotate-45' : '-rotate-0'} flex items-center justify-center transition-rotate transition-transform duration-400`}><ArrowRight/></div>
			</div>
		</div>
	)
}

function MobilePortfolios({isMobileDevice}) {
	const [mobileItems, setMobileItems] = useState([])
	function chunkArray(arr) {
    const result = [];
    const step = isMobileDevice ? 2 : 4
    const spIndex = isMobileDevice ? 1 : 2
    for (let i = 0; i < arr.length; i += step) {
    	let s = arr.slice(i, i + step)
    	if (s.length > spIndex) { s.splice(spIndex, 0, {}) }
      result.push(s);
    }
    return result;
	}
	useEffect(() => {
		let items = isMobileDevice ? PortfolioData.mobile : chunkArray(PortfolioData.mobile).flat()
		setMobileItems(items)
	}, [isMobileDevice])

  return (
  	<>
  		{ isMobileDevice ? <MobilePortfoliosMobileContainer mobileItems={mobileItems}/> : <MobilePortfoliosDesktopContainer mobileItems={mobileItems}/> }
  	</>
  )
}

function MobilePortfoliosDesktopContainer({mobileItems}) {
	return (
		<div className="relative mx-auto mb-[3.6rem] pt-[10.5%] lg:pt-0 pb-[10.5%] lg:pb-[6.5%]">
      <div className="mx-auto w-full overflow-hidden grid grid-cols-3 lg:grid-cols-5 gap-[0.16rem] lg:gap-[0.2rem]">
        	{mobileItems.map((item, index) => <MobileCardDesktopView {...item} index={index} key={index}/>)}
      </div>
      <StickyHandCard/>
    </div>
	)
}

function MobilePortfoliosMobileContainer({mobileItems}) {
	const mobileItemsLeft = mobileItems.filter((e,i) => i % 2 == 0)
	const mobileItemsRight = mobileItems.filter((e,i) => i % 2 != 0)
	return (
		<div className="relative mx-auto mb-[3.6rem] pt--[5.5%] pb-[11%]">
      <div className="mx-auto w-full overflow-hidden flex gap-[0.16rem]">      	
      	<div className="flex flex-col gap-[0.16rem] ml-[-0.24rem]">{mobileItemsLeft.map((item, index) => <MobileCardMobileView {...item} index={index} key={index}/>)}</div>
      	<div className="w-full min-h-full"></div>
      	<div className="flex flex-col gap-[0.16rem] mr-[-0.24rem]">{mobileItemsRight.map((item, index) => <MobileCardMobileView {...item} index={index} key={index}/>)}</div>
      </div>
      <StickyHandCard/>
    </div>
	)
}

function MobileCardDesktopView({title, image, index}) {
  return (
    <div className="col-span-1 w-[2.39rem] h-[5.04rem] lg:w-[3.42rem] lg:h-[7.22rem] rounded-[0.28rem] lg:rounded-[48px] overflow-hidden">
      {image ? <img loading="lazy" src={image} alt={title} className="w-full h-full object-cover object-center rounded-[inherit]" /> : <EmptyCard/> }
    </div>
  )
}

function MobileCardMobileView({title, image, index}) {
	return (
    <div className="w-[2.39rem] h-[5.04rem] rounded-[0.28rem] overflow-hidden">
      {image ? <img loading="lazy" src={image} alt={title} className="w-full h-full object-cover object-center rounded-[inherit]" /> : <EmptyCard/> }
    </div>
	 )
}

function EmptyCard() { return (<span className="min-w-full min-h-full"></span>) }

function StickyHandCard() {
	const handImg = 'https://assets-sh-padelx.shanghaipadel.com/moto-sticky-hand-img.png'
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{overflowY: 'overlay'}} className="sticky top-0 bottom-0 translate-x-[18.8%] lg:translate-x-[18.6%]">
        <img loading="lazy" className="w-[5.88rem] w--[5.4rem] h-[6.28rem] h--[5.77rem] lg:w-[7.92rem] lg:h-[8.48rem] object-fit object-center rounded-[0.28rem] lg:rounded-[0.16rem]" src={handImg} alt="Hand"/>
      </div>
    </div>
  )
}

function MobileIconWhite({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'center', }} width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1" y="1" width="20" height="26" rx="1" stroke="black" strokeWidth="2"/>
			<rect x="7" y="4" width="8" height="2" rx="1" fill="#161619"/>
		</svg>
	)
}

function MobileIconBlack({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'center', }} width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="22" height="28" rx="2" fill="#161619"/>
			<rect x="7" y="4" width="8" height="2" rx="1" fill="#F7F7F7"/>
		</svg>
	)
}

function DesktopIconWhite({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'center', }} width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1" y="1" width="26" height="18" rx="1" stroke="#161619" strokeWidth="2"/>
			<rect x="8" y="22" width="12" height="2" rx="1" fill="#161619"/>
		</svg>
	)
}

function DesktopIconBlack({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'center', }} width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="28" height="20" rx="2" fill="black"/>
			<rect x="8" y="22" width="12" height="2" rx="1" fill="#161619"/>
		</svg>
	)
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11.1113" y="1.33594" width="12" height="2" transform="rotate(45 11.1113 1.33594)" fill="#161619" />
      <rect x="9.69727" y="16.8921" width="12" height="2" transform="rotate(-45 9.69727 16.8921)" fill="#161619" />
      <rect x="1" y="8.77539" width="16" height="2" fill="#161619" />
    </svg>
  )
}
