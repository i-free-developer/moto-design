import { useState } from 'react'
import { DesktopPortfolioItems, MobilePortfolioItems } from '../data/site-data'
import Navbar from './Navbar'
import { SiteInfoCard,  SiteFooter } from './About'

export default function Portfolio({drawerStatus, closeDrawer, handleClickDrawer}) {
	const [isMobile, setIsMobile] = useState(false)

	return (
		<main className="mx-auto">
      <Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer}/>
			<section id="portfolio" className="mx-auto px-[4rem] mt-[15rem] mb-[3rem]" onClick={closeDrawer}>
				<PortfolioHeader/>
				<div className="flex items-center gap-[0.5rem] mt-[2rem] mb-[6rem] text-[1.75rem]">
					<span onClick={() => setIsMobile(true)} className={`p-2 ${isMobile ? '' : ''}`}><MobileIcon/></span>
					<span onClick={() => setIsMobile(false)} className={`p-2 ${!isMobile ? '' : ''}`}><DesktopIcon/></span>
				</div>

	      {isMobile ? <MobilePortfolios/> : <DesktopPortfolios/>}
	      <SiteInfoCard/>
				<SiteFooter/>
			</section>
		</main>
	)
}

function PortfolioHeader() {
	return (
		<article className="flex justify-between my-[4rem]">
			<header className="text-[5rem] w-[46rem]">We don't do cookie-cutter solutions</header>
			<div className="flex flex-col justify-between items-end gap-[3rem] text-right">
				<p className="text-2xl text-black/64 w-[18rem]">Backing the best Web 3.0 founders & products</p>
				<p className="text-[2rem] text-black/64 w-[26rem]">Our user-centered design encourages productivity and boosts revenue</p>
			</div>
		</article>
	)
}

function DesktopPortfolios() {
  return (
    <div className="grid grid-cols-5 gap-[1.5rem]">
      {DesktopPortfolioItems.map((item, index) => <DesktopCard {...item} key={index}/>)}
    </div>
  )
}

function DesktopCard({title, description, colums, image, url}) {
	const [isHovered, setIsHovered] = useState(true)
	const spanClasses = {
	  2: 'col-span-2 relative h-[36rem]',
	  3: 'col-span-3 relative h-[36rem]',
	  5: 'col-span-5 relative h-[36rem]',
	}

	return (
		<div className={spanClasses[colums]}>
			<span
        style={{pointerEvents: 'none'}}
        className={`
				z-5 absolute left-[50%] bottom-0 w-full h-2/5 rounded-[40%] blur-[3rem] bg-sky-800 opacity-0 transition-opacity transition-transform duration-400 ease-[cubic-bezier(0,0,.4,.97)]
				${isHovered ? '-translate-x-[50%] -translate-y-[10%] opacity-80' : '-translate-x-[50%] translate-y-[20%] '}
			`}></span>
			<a href={url} className="max-w-full h-full block cursor-pointer rounded-3xl">
				<div className="w-full h-full overflow-hidden rounded-[inherit]">
					<img src={image} className={`w-full h-full object-cover object-center rounded-[inherit] ${isHovered ? 'scale-104' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></img>
				</div>
				<div className="z-10 absolute left-6 right-6 bottom-6 px-6 py-4 bg-white rounded-2xl flex justify-between items-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<div className="max-w-3/4">
						<header className="font-bold mb-2 text-2xl">{title}</header>
						<p className="text-xl">{description}</p>
					</div>
					<div className="size-[72px] bg-black/16 flex items-center justify-center rounded-full">
						<div className={`w-10 ${isHovered ? '-rotate-45' : '-rotate-0'} flex items-center justify-center transition-rotate transition-transform duration-400`}><ArrowRight/></div>
					</div>
				</div>
			</a>
		</div>
	)
}

function MobilePortfolios() {
  return (
    <div className="w-full relative">
      <div className="max-w-full overflow-hidden flex justify-center">
        <div>
          <div className="flex gap-[2rem] mb-[2rem]">
            {MobilePortfolioItems.map((item, index) => <MobileCard {...item} index={index} key={index}/>)}
          </div>
          <div className="flex gap-[2rem] my-[2rem]">
            {MobilePortfolioItems.map((item, index) => <MobileCard {...item} index={index} key={index} />)}
          </div>
          <div className="flex gap-[2rem] mt-[2rem]">
            {MobilePortfolioItems.map((item, index) => <MobileCard {...item} index={index} key={index} />)}
          </div>
        </div>
      </div>

      <StickyCard />
    </div>
  )
}

function MobileCard({title, image, index}) {
  return (
    <div className="w-[400px] h-[840px] rounded-[1rem]">
      {(index === 2) ? null : <img src={image} alt={title} className="w-full h-full object-cover object-center rounded-[inherit]" /> }
    </div>
  )
}

function StickyCard() {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full flex flex-col">
      <div className="sticky top-0 bottom-0 flex items-center justify-center">
        <img src="https://plus.unsplash.com/premium_photo-1722178429928-caa36778a04b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" className="w-[400px] h-[840px] object-fit object-center rounded-[1rem]" />
      </div>
    </div>
  )
}

function MobileIcon() {
	return (
		<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1" y="1" width="20" height="26" rx="1" stroke="black" strokeWidth="2"/>
			<rect x="7" y="4" width="8" height="2" rx="1" fill="#161619"/>
		</svg>
	)
}

function DesktopIcon() {
	return (
		<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
