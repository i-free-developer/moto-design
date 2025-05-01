import { useState } from 'react'
import arrowRight from '../assets/icons/arrow-right.svg'


const portfolioItems = [
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 3, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 2, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 2, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 3, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 5, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
]

export default function Portfolio() {
	const [isMobile, setIsMobile] = useState(false)

	return (
		<section id="portfolio" className="mx-auto my-[2rem]">
			<PortfolioHeader />
			<div className="flex gap-2 my-8">
				<span onClick={() => setIsMobile(true)} className={`p-2 ${isMobile ? 'bg-black text-white' : ''}`}>A</span>
				<span onClick={() => setIsMobile(false)} className={`p-2 ${!isMobile ? 'bg-black text-white' : ''}`}>B</span>
			</div>

			<div className="grid grid-cols-5 gap-4">
				{portfolioItems.map(item => <PortfolioCard {...item}/>)}
			</div>
		</section>
	)
}

function PortfolioHeader() {
	return (
		<article className="flex justify-between">
			<header className="text-4xl w-1/5">We don't do cookie-cutter solutions</header>
			<div className="flex flex-col justify-between w-1/5 gap-[3rem] text-right">
				<p>Backing the best Web 3.0 founders & products</p>
				<p>Our user-centered design encourages productivity and boosts revenue</p>
			</div>
		</article>
	)
}

function PortfolioCard({title, description, colums, image, url}) {
	const [isHovered, setIsHovered] = useState(true)

	return (
		<div className={`col-span-${colums} relative`}>
			<span className={`
				absolute left-[50%] bottom-0 w-full h-2/5 rounded-[40%] blur-[3rem] bg-sky-800 opacity-0 transition-opacity transition-transform duration-400 ease-[cubic-bezier(0,0,.4,.97)]
				${isHovered ? '-translate-x-[50%] -translate-y-[10%] opacity-80' : '-translate-x-[50%] translate-y-[20%] '}
			`}></span>
			<a href={url} className="w-full h-[36rem] rounded-3xl">	
				<img src={image} className="w-full h-[36rem] object-cover object-center rounded-3xl" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></img>
				<div className="absolute left-6 right-6 bottom-6 px-6 bg-white rounded-2xl flex justify-between items-center p-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<div className="max-w-3/4">
						<header className="font-bold mb-2 text-2xl">{title}</header>
						<p className="text-xl">{description}</p>
					</div>
					<div className="size-16 bg-slate-200 flex items-center justify-center rounded-full">
						<img src={arrowRight} alt="Arrow Right" className={`w-10 ${isHovered ? 'rotate-0' : '-rotate-45'} transition-rotate transition-transform duration-400`}></img>
					</div>
				</div>
			</a>
		</div>
	)
}