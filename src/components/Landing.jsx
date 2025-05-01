import '../assets/animations.css';
import { useState } from 'react'
import x from '../assets/icons/x.svg'
import linkedIn from '../assets/icons/linked-in.svg'
import instagram from '../assets/icons/instagram.svg'


const socialIcons = [
	{name: 'X', icon: x, url: ''},
	{name: 'In', icon: linkedIn, url: ''},
	{name: 'Be', icon: '', url: ''},
	{name: 'Ins', icon: instagram, url: ''},
	{name: 'XHS', icon: '', url: ''},
]

const drawerLinks = [
	{title: 'About', url: '#about'},
	{title: 'Portfolio', url: '#portfolio'},
	{title: 'Career', url: '#career'},
	{title: 'Contact Us', url: '#contact-us'},
]

export default function Landing({showDrawer}) {
	return (
		<section className="pt-10 pb-20 relative h-[95vh]">
			<h1 className={`uppercase text-8xl mt-[8%] font-bold mx-50 max-width-full ${showDrawer ? 'section-drawer-in' : 'section-drawer-out'}`}>Pixels are the atomic units of design.</h1>
			{<Drawer showDrawer={showDrawer}/>}
		</section>
	)
}

function Drawer({showDrawer}) {
	console.log('showDrawer', showDrawer)
	return(
		<div className={`px-10 py-10 w-md absolute top-[4rem] z-100 mx-auto backdrop-blur-sm bg-gray-100/40 rounded-xl ${showDrawer ? 'drawer-in' : 'drawer-out'}`}>
			<div className="flex flex-col items-start gap-8 text-3xl font-bold">
				{drawerLinks.map(item => <DrawerLink {...item} />)}
			</div>

			<div className="mt-[16rem]">
				<div className="flex gap-8 mx-auto">
					{socialIcons.map(item => <SocialIcon {...item} />)}
				</div>
				<hr className="border border-2 mt-[2rem] mb-6"></hr>
				<p className="">Hello@motodesign .cn</p>
			</div>
		</div>
	)
}

function DrawerLink({url, title}) {
  const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="flex flex-col" 
			onMouseEnter={() => setIsHovered(true)}
      		onMouseLeave={() => setIsHovered(false)}>
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