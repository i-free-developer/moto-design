import { useState } from 'react'
import { useCallback } from 'react';
import '../assets/animations.css';
import { SocialIconItems, SiteLinks, SocialIcon, ArrowUpIcon, ArrowDownIcon, ThreeBarsIcon, CloseIcon } from './SocialIcon'


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

export default function Navbar({showDrawer, handleClickDrawer}) {
	const [langExpanded, setLangExpanded] = useState(false)

	return (
		<section className="relative z-200">
			<nav className="fixed w-screen">
				<div className="px-[4rem] my-[2rem] flex justify-between items-center">
					<div onClick={handleClickDrawer} className="size-[1.2rem]">{showDrawer ? <CloseIcon/> : <ThreeBarsIcon/>}</div>
					<div className="font-bold text-lg">MOTO</div>
					<div>
						<div className="flex items-center justify-center rounded px-4 py-4 relative" onClick={() => {setLangExpanded(!langExpanded)}}>
							<span className="font-bold">En</span>
							<span className="absolute left-[70%] top-[30%]">{langExpanded ? <ArrowDownIcon/> : <ArrowUpIcon />}</span>
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
		<div className={`fixed p-[4rem] w-md absolute top-[8rem] z-100 mx-auto backdrop-blur-sm bg-gray-100/40 rounded-xl ${showDrawer ? 'drawer-in' : 'drawer-out'}`}>
			<div className="flex flex-col items-start gap-8 text-3xl font-bold mt-[2rem]">
        {SiteLinks.map((item, index) => <SiteLinkItem {...item} key={index}/>)}
			</div>

			<div className="mt-[16rem]">
				<div className="flex gap-8 mx-auto">
          {SocialIconItems.map((item, index) => <SocialIcon {...item} key={index}/>)}
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
