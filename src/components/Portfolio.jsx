import { useState, useEffect } from 'react'
import { PortfolioData } from '../data/site-data'
import Navbar from './Navbar'
import { SiteInfoCard,  SiteFooter } from './About'
import { useDrawerHandler } from './FunctionCollection'

export default function Portfolio({isMobileDevice, smallScreenRatioDecimal}) {
	const [isMobile, setIsMobile] = useState(false)
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	
	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer}/>
			<section id="portfolio" className="" onClick={closeDrawer}>
				<div className="mx-auto w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] px-[0.32rem] lg:px-[3rem] pt-[0.48rem] lg:pt-[3rem] lg:mt-[8rem] lg:mb-[3rem] overflow-x-hidden">
					<PortfolioHeader/>
					<div className="my-[0.48rem] lg:my-[6rem] flex flex-row justify-between">
						<MobileDeskIcons isMobile={isMobile} setIsMobile={setIsMobile}/>
						<p className="self-start lg:mb-[3rem] text-[0.28rem] leading-[0.28rem] lg:text-[2rem] lg:leading-[32px] text-black/64 w-[55%] lg:w-[26rem] tracking-[-2%] font-normal text-right">Our user-centered design encourages productivity and boosts revenue</p>
					</div>
				</div>
				
				<div className="mx-auto w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] px-[0.32rem] lg:px-[3rem]">
	      	{isMobile ? <MobilePortfolios/> : <DesktopPortfolios/>}
	      </div>
	      
	      <div className="mx-auto w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] px-[0.32rem] lg:px-[3rem] overflow-x-hidden">
	      	<SiteInfoCard isMobileDevice={isMobileDevice}/>
					<SiteFooter isMobileDevice={isMobileDevice}/>
				</div>
			</section>
		</main>
	)
}

function PortfolioHeader() {
	return (
		<article className="flex flex-col lg:flex-row justify-between my-[1rem] lg:my-[4rem] tracking-[-2%]">
			<header className="text-[0.56rem] leading-[0.64rem] lg:text-[5rem] lg:leading-[96px] lg:w-[45%] font-normal">We don't do cookie-cutter solutions</header>
			<p className="mt-[0.16rem] lg:mt-[1rem] lg:mt-0 w-full lg:w-[20%] text-black/64 text-[0.24rem] leading-[0.24rem] lg:text-2xl lg:leading-[24px] lg:text-right font-normal">Backing the best Web 3.0 founders & products</p>
		</article>
	)
}

function MobileDeskIcons({isMobile, setIsMobile}) {
	return (
		<div className="cursor-pointer self-end flex items-center gap-[0.64rem] lg:gap-[2rem] lg:mt-[1rem] lg:mb-[4rem]">
			<span onClick={() => setIsMobile(true)} className="">{isMobile ? <MobileIconBlack/> : <MobileIconWhite/> }</span>
			<span onClick={() => setIsMobile(false)} className="">{isMobile ? <DesktopIconWhite/> : <DesktopIconBlack/> }</span>
		</div>
	)
}

function DesktopPortfolios() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-[0.24rem] lg:gap-[1.5rem]">
      {PortfolioData.desktop.map((item, index) => <DesktopCard {...item} index={index} totalNumber={PortfolioData.desktop.length} key={index}/>)}
    </div>
  )
}

function DesktopCard({title, description, image, url, index, totalNumber}) {
	const [isHovered, setIsHovered] = useState(true)
	let colsIndex = index >= 5 ? index - 5 : index;
	if (index === totalNumber - 1) { colsIndex = 4}

	const spanClasses = {
		0: 'lg:col-span-3 relative h-[4.8rem] lg:h-[36rem]',
		1: 'lg:col-span-2 relative h-[4.8rem] lg:h-[36rem]',
	  2: 'lg:col-span-2 relative h-[4.8rem] lg:h-[36rem]',
	  3: 'lg:col-span-3 relative h-[4.8rem] lg:h-[36rem]',
	  4: 'lg:col-span-5 relative h-[4.8rem] lg:h-[36rem]',
	}

	return (
		<div className={spanClasses[colsIndex]}>
			<span
        style={{pointerEvents: 'none'}}
        className={`
				z-5 absolute left-[50%] bottom-0 w-full h-2/5 rounded-[40%] blur-[3rem] bg-sky-800 opacity-0 transition-opacity transition-transform duration-400 ease-[cubic-bezier(0,0,.4,.97)]
				${isHovered ? '-translate-x-[50%] -translate-y-[10%] opacity-80' : '-translate-x-[50%] translate-y-[20%] '}
			`}></span>
			<a href={url} className="max-w-full h-full block cursor-pointer rounded-[0.28rem] lg:rounded-3xl">
				<div className="w-full h-full overflow-hidden rounded-[inherit]">
					<img src={image} className={`w-full h-full object-cover object-center rounded-[inherit] ${isHovered ? 'scale-104' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></img>
				</div>
				<DesktopBottomCard title={title} description={description}/>
			</a>
		</div>
	)
}

function DesktopBottomCard({title, description}) {
	const [isHovered, setIsHovered] = useState(true)
	return (
		<div className="z-10 absolute left-[0.12rem] lg:left-6 right-[0.12rem] lg:right-6 bottom-[0.12rem] lg:bottom-6 px-[0.24rem] lg:px-6 py-[0.24rem] lg:py-4 bg-white rounded-[0.24rem] lg:rounded-2xl flex justify-between items-center" onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className="max-w-3/4">
				<header className="font-bold mb-[0.16rem] lg:mb-2 text-[0.24rem] lg:text-2xl">{title}</header>
				<p className="text-[0.16rem] lg:text-xl">{description}</p>
			</div>
			<div className="size-[0.72rem] lg:size-[72px] bg-black/16 flex items-center justify-center rounded-full">
				<div className={`w-[0.8rem] lg:w-10 ${isHovered ? '-rotate-45' : '-rotate-0'} flex items-center justify-center transition-rotate transition-transform duration-400`}><ArrowRight/></div>
			</div>
		</div>
	)
}

function MobilePortfolios() {
	const [mobileItems, setMobileItems] = useState([])
	let all = []

	function chunkArray(arr) {
    const result = [];
    const step = 4
    for (let i = 0; i < arr.length; i += step) {
    	let s = arr.slice(i, i + step)
    	if (s.length > 2) { s.splice(2, 0, {}) }
      result.push(s);
    }
    return result;
	}

	useEffect(() => {
		let items = chunkArray(PortfolioData.desktop).flat()
		setMobileItems(items)
	}, [])

  return (
    <div className="relative mx-auto">
      <div className="mx-auto w-full overflow-hidden grid grid-cols-5 gap-[0.28rem] lg:gap-[1.75rem]">
        {mobileItems.map((item, index) => <MobileCard {...item} index={index} key={index}/>)}
      </div>
      <StickyHandCard />
    </div>
  )
}

function MobileCard({title, image, index}) {
	let cardIndex = index >= 5 ? index - 5 : index
  return (
    <div className="col-span-1 w-[2.52rem] h-[5.32rem] lg:w-[342px] lg:h-[722px] lg:w--[416px] lg:h--[886px] rounded-[0.28rem] lg:rounded-[1rem] overflow-hidden">
      {image ? <img src={image} alt={title} className="w-full h-full object-cover object-center rounded-[inherit]" /> : <EmptyCard/> }
    </div>
  )
}

function EmptyCard() { return (<span className="min-w-full min-h-full"></span>) }

function StickyHandCard() {
	const handImg = 'https://assets-sh-padelx.shanghaipadel.com/moto-sticky-hand-img.png'
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center">
      <div className="sticky top-0 bottom-0 translate-x-[19%]">
        <img className="w--[2.52rem] h--[5.32rem] lg:w-[792px] lg:h-[848px] lg:w--[966px] lg:h--[1034px] object-fit object-center rounded-[0.28rem] lg:rounded-[1rem]" src={handImg} alt="Hand"/>
      </div>
    </div>
  )
}

function MobileIconWhite() {
	return (
		<svg className="icon-fade-in" width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1" y="1" width="20" height="26" rx="1" stroke="black" strokeWidth="2"/>
			<rect x="7" y="4" width="8" height="2" rx="1" fill="#161619"/>
		</svg>
	)
}

function MobileIconBlack() {
	return (
		<svg className="icon-fade-in" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="24" height="32" rx="2" fill="#161619"/>
			<rect x="8" y="3" width="8" height="2" rx="1" fill="#F7F7F7"/>
			<circle cx="12" cy="26" r="2" fill="#F7F7F7"/>
		</svg>
	)
}

function DesktopIconWhite() {
	return (
		<svg className="icon-fade-in" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1" y="1" width="26" height="18" rx="1" stroke="#161619" strokeWidth="2"/>
			<rect x="8" y="22" width="12" height="2" rx="1" fill="#161619"/>
		</svg>
	)
}

function DesktopIconBlack() {
	return (
		<svg className="icon-fade-in" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
