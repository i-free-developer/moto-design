import { useState } from 'react'
import { useCallback } from 'react';
import '../assets/animations.css';
import x from '../assets/icons/x.svg'
import linkedIn from '../assets/icons/linked-in.svg'
import instagram from '../assets/icons/instagram.svg'

function useScrollTo() {
  return useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);
}

const socialIcons = [
	{name: 'X', icon: x, url: ''},
	{name: 'In', icon: linkedIn, url: ''},
	{name: 'Be', icon: instagram, url: ''},
	{name: 'Ins', icon: instagram, url: ''},
	{name: 'XHS', icon: instagram, url: ''},
]

const drawerLinks = [
	{title: 'About', url: '#about'},
	{title: 'Portfolio', url: '#portfolio'},
	{title: 'Career', url: '#career'},
	{title: 'Contact Us', url: '#contact-us'},
]

export default function Navbar({showDrawer, handleClickDrawer}) {
	const [langExpanded, setLangExpanded] = useState(false)
	
	return (
		<section className="relative">
			<nav className="fixed w-screen">
				<div className="px-20 flex justify-between items-center">	
					<div onClick={handleClickDrawer} className="size-[1.2rem]">{showDrawer ? <CloseIcon/> : <ThreeBars/>}</div>
					<div className="font-bold text-lg">MOTO</div>
					<div>
						<div className="flex items-center justify-center rounded px-4 py-4 relative" onClick={() => {setLangExpanded(!langExpanded)}}>
							<span className="font-bold">En</span>
							<span className="absolute left-[70%] top-[30%]">{langExpanded ? <ArrowDown/> : <ArrowUp />}</span>
							<div className={`absolute top-[60%] left-0 flex items-center justify-center rounded px-4 py-4 ${langExpanded ? '' : 'hidden'}`}>
								<span className="font-bold">Cn</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{<Drawer showDrawer={showDrawer}/>}
		</section>
	)
}

function Drawer({showDrawer}) {
	// console.log('showDrawer', showDrawer)
	return(
		<div className={`fixed px-10 py-10 w-md absolute top-[6rem] z-100 mx-auto backdrop-blur-sm bg-gray-100/40 rounded-xl ${showDrawer ? 'drawer-in' : 'drawer-out'}`}>
			<div className="flex flex-col items-start gap-8 text-3xl font-bold">
				{drawerLinks.map((item, index) => <SiteLinkItem {...item} key={index}/>)}
			</div>

			<div className="mt-[18rem]">
				<div className="flex gap-8 mx-auto">
					{socialIcons.map((item, index) => <SocialIcon {...item} key={index}/>)}
				</div>
				<hr className="border border-2 mt-[2rem] mb-6"></hr>
				<p className="">Hello@motodesign.cn</p>
			</div>
		</div>
	)
}

function SiteLinkItem({url, title}) {
	const [isHovered, setIsHovered] = useState(false);
  	const scrollTo = useScrollTo();
	
	return (
		<div className="flex flex-col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => scrollTo(url)}>
			<a href={url}>{title}</a>
			<hr className={`mt-2 ${isHovered ? 'hover-border' : 'border border-2 border-transparent'}`}></hr>
		</div>
	)
}

function SocialIcon({url, icon, name}) {
	return(
		<a href={url} className="font-bold">
			<img src={icon} alt={name} className="size-6"></img>
		</a>
	)
}

function ArrowUp() {
	return (
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 14-4-4-4 4"/>
		</svg>
	)
}

function ArrowDown() {
	return (
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
		</svg>

	)
}

function ThreeBars() {
	return (
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
		</svg>
	)
}

function CloseIcon() {
	return (
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
		</svg>
	)
}