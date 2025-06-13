import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../assets/animations.css';
import { CompanyEmail } from '../data/site-data'
import { SocialIconItems, SiteLinks, SocialIconLinkItem } from './SocialIconsCollection'
import { useScrollTo, useScrollDirection } from './FunctionCollection'


export default function Navbar({drawerStatus, handleClickDrawer, closeDrawer}) {
	const scrollDirection = useScrollDirection();

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

	return (
		// h-5.2rem
		<section id="navbar" className={`sticky relative z-200 text-black mx-auto px-[0.32rem] lg:px-[3.5rem] py-[0.12rem] lg:py-[1.6rem] lg:rounded-md lg:rounded-xl transition-[top] duration-500 ${ scrollDirection === "down" ? "top-[-5rem] lg:top-[-6rem]" : "top-0"}`}>
			<nav className="flex justify-between items-center h-[0.34rem] lg:h-[2rem]" onClick={closeDrawer}>
				<div onClick={handleClickDrawer} className="cursor-pointer size-[0.25rem] lg:size-[1.25rem] flex items-center justify-center">{drawerStatus == 'opened' ? <CloseIcon/> : <BarsIcon/>}</div>
				<Link to="/" className="max-h-[0.34rem] lg:h-[2rem] object-fit flex items-center justify-center"><LogoIcon/></Link>
				<LangButtons/>
			</nav>
			{<DrawerCard drawerStatus={drawerStatus}/>}
		</section>
	)
}

const drawerClasses = {initial: '-translate-x-[36rem] hidden', opened: 'drawer-in', closed: 'drawer-out'}

function DrawerCard({drawerStatus}) {
	const drawerClassName = drawerClasses[drawerStatus]

	return(
		<div className={`pl-[0.72rem] lg:pl-[4rem] pt-[0.96rem] lg:pt-[8rem] pb-[0.72rem] lg:pb-[4rem] w-[5.6rem] lg:w-[35rem] h-[59rem] flex flex-col justify-between absolute top-[0.8rem] lg:top-[5.2rem] z-100 frosted-glass rounded-[0.24rem] lg:rounded-2xl ${drawerClassName}`}>
			<div className="flex flex-col items-start gap-[0.8rem] lg:gap-[2.5rem]">
       			{SiteLinks.map((item, index) => <SiteLinkItem {...item} key={index}/>)}
			</div>
			<SocialIconsContainer/>
		</div>
	)
}

function SocialIconsContainer() {
	return (
		<div>
			<div className="flex items-end gap-[0.38rem] lg:gap-[2rem]">
        		{SocialIconItems.map((item, index) => <SocialIconLinkItem {...item} key={index} />)}
			</div>
			<hr className="border border-[0.8px] mt-[0.64rem] lg:mt-[1.5rem] w-[3.32rem] lg:w-[27rem]"></hr>
			<p className="text-[0.12rem] lg:text-xs font-medium text-[#161619]/48 mt-[0.24rem] lg:mt-[1.5rem]">{CompanyEmail}</p>
		</div>
	)
}

function SiteLinkItem({url, title, linkTo}) {
	const [isHovered, setIsHovered] = useState(false);
	const scrollTo = useScrollTo();

	return (
		<div className="flex flex-col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => scrollTo(url)}>
			<Link to={linkTo} className="text-[0.4rem] lg:text-5xl font-semibold">{title}</Link>
			<hr className={`mt-[0.12rem] lg:mt-[6px] ${isHovered ? 'hover-border' : 'border border-[1px] border-transparent'}`}></hr>
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
				<span className="text-[0.3rem] lg:text-xl font-bold mr-[6px]">En</span>
				<span className="mb-[6px]">{langStatus ? <LangArrowIcon/> : <LangArrowIcon />}</span>
			</div>
			<div className={`absolute top-[0.45rem] lg:top-[2rem] flex items-center justify-center ${langClassName}`}>
				<span className="text-[0.3rem] lg:text-xl font-bold">Cn</span>
			</div>
		</div>
	)
}

function LogoIcon() {
	return (
		<svg width="128" height="31" viewBox="0 0 128 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38272 0.0697609C1.20394 0.06193 1.02542 0.090322 0.857948 0.153223C0.690471 0.216124 0.537505 0.31223 0.408283 0.43574C0.27906 0.55925 0.176261 0.707603 0.106089 0.871845C0.0359173 1.03609 -0.000171593 1.21281 6.13398e-07 1.39135V8.11524V29.3998C0.00306486 29.7514 0.145198 30.0875 0.39546 30.335C0.645722 30.5826 0.98385 30.7214 1.33624 30.7214H6.80901C7.16032 30.7214 7.49724 30.5822 7.74565 30.3343C7.99407 30.0865 8.13363 29.7503 8.13363 29.3998V9.86577C12.0568 11.4875 15.4442 14.1766 17.9095 17.6263C20.3749 21.0761 21.8189 25.1476 22.077 29.3766C22.0919 29.7181 22.2376 30.0408 22.4841 30.2781C22.7306 30.5154 23.0591 30.6492 23.4016 30.6519H28.886C29.0634 30.6535 29.2393 30.6193 29.403 30.5513C29.5668 30.4833 29.715 30.3829 29.8388 30.2561C29.9626 30.1294 30.0594 29.9789 30.1233 29.8138C30.1872 29.6487 30.2169 29.4724 30.2106 29.2955C29.8563 21.737 26.7187 14.5749 21.399 9.18179C16.0793 3.78869 8.95186 0.544058 1.38272 0.0697609ZM92.3864 4.05772H87.3319V1.3218C87.3319 1.14627 87.2969 0.972504 87.2289 0.810631C87.1609 0.648758 87.0612 0.502024 86.9357 0.378995C86.8103 0.255966 86.6615 0.159106 86.4981 0.09407C86.3347 0.0290338 86.1599 -0.00287592 85.984 0.000203415H81.6616C81.3164 0.000203415 80.9854 0.136999 80.7414 0.380498C80.4973 0.623996 80.3602 0.954251 80.3602 1.29861V17.3896V17.5171C80.3558 20.7912 81.5729 23.9498 83.7744 26.3778C85.976 28.8058 89.0045 30.3293 92.2702 30.6519C92.4553 30.6735 92.6429 30.6552 92.8203 30.5982C92.9977 30.5413 93.1608 30.4469 93.2985 30.3216C93.4362 30.1963 93.5454 30.043 93.6185 29.8719C93.6917 29.7009 93.7272 29.5162 93.7226 29.3303V24.9597C93.7146 24.641 93.5934 24.3355 93.3806 24.0977C93.1677 23.8599 92.8772 23.7052 92.5606 23.6613C91.0939 23.3862 89.7692 22.6093 88.8147 21.4645C87.8603 20.3197 87.3359 18.8786 87.3319 17.3896V12.1728H92.398C92.7493 12.1728 93.0862 12.0335 93.3346 11.7857C93.583 11.5378 93.7226 11.2017 93.7226 10.8512V5.39091C93.7226 5.21583 93.688 5.04247 93.6209 4.88072C93.5537 4.71897 93.4553 4.572 93.3312 4.4482C93.2071 4.32441 93.0598 4.2262 92.8977 4.1592C92.7356 4.09221 92.5618 4.05772 92.3864 4.05772ZM108.828 4.05772C106.185 4.05772 103.602 4.83962 101.404 6.30454C99.2067 7.76947 97.494 9.85162 96.4827 12.2877C95.4713 14.7238 95.2067 17.4044 95.7223 19.9905C96.2378 22.5766 97.5105 24.9521 99.3793 26.8166C101.248 28.6811 103.629 29.9508 106.221 30.4653C108.813 30.9797 111.5 30.7156 113.941 29.7066C116.383 28.6975 118.47 26.9888 119.938 24.7963C121.407 22.6039 122.19 20.0264 122.19 17.3896C122.187 13.8558 120.778 10.4677 118.272 7.97002C115.767 5.47232 112.37 4.06931 108.828 4.06932V4.05772ZM108.828 24.3337C107.969 24.3157 107.123 24.1288 106.337 23.7838C105.55 23.4389 104.84 22.9426 104.247 22.3234C103.653 21.7042 103.188 20.9743 102.877 20.1754C102.567 19.3765 102.417 18.5244 102.437 17.6678C102.385 16.7981 102.511 15.9269 102.808 15.1078C103.106 14.2886 103.568 13.5388 104.166 12.9045C104.765 12.2701 105.487 11.7647 106.289 11.4192C107.091 11.0737 107.955 10.8954 108.828 10.8954C109.701 10.8954 110.565 11.0737 111.367 11.4192C112.168 11.7647 112.891 12.2701 113.489 12.9045C114.088 13.5388 114.55 14.2886 114.848 15.1078C115.145 15.9269 115.271 16.7981 115.219 17.6678C115.24 18.5254 115.092 19.3787 114.782 20.179C114.472 20.9792 114.007 21.7105 113.413 22.3309C112.82 22.9513 112.109 23.4487 111.322 23.7944C110.535 24.14 109.688 24.3273 108.828 24.3453V24.3337ZM64.093 4.06932C61.4496 4.06932 58.8657 4.85151 56.668 6.31694C54.4703 7.78238 52.7576 9.86521 51.7466 12.302C50.7356 14.7387 50.4717 17.4199 50.9882 20.0063C51.5047 22.5928 52.7785 24.9683 54.6484 26.8323C56.5184 28.6963 58.9004 29.9652 61.4932 30.4783C64.086 30.9914 66.7731 30.7257 69.2146 29.7149C71.656 28.704 73.7421 26.9934 75.209 24.7995C76.6759 22.6056 77.4576 20.0269 77.4553 17.3896C77.4523 13.8558 76.0431 10.4677 73.5375 7.97002C71.0319 5.47232 67.6349 4.06931 64.093 4.06932ZM64.093 24.3453C63.2343 24.3273 62.3877 24.1404 61.6016 23.7954C60.8155 23.4505 60.1053 22.9542 59.5117 22.335C58.918 21.7158 58.4527 20.9859 58.1422 20.187C57.8317 19.3881 57.6822 18.536 57.7023 17.6794C57.6497 16.8097 57.776 15.9385 58.0733 15.1194C58.3707 14.3002 58.8329 13.5504 59.4315 12.9161C60.0301 12.2817 60.7524 11.7763 61.5541 11.4308C62.3557 11.0853 63.2197 10.907 64.093 10.907C64.9662 10.907 65.8302 11.0853 66.6318 11.4308C67.4335 11.7763 68.1558 12.2817 68.7544 12.9161C69.353 13.5504 69.8152 14.3002 70.1126 15.1194C70.41 15.9385 70.5362 16.8097 70.4837 17.6794C70.5037 18.536 70.3542 19.3881 70.0437 20.187C69.7333 20.9859 69.2679 21.7158 68.6743 22.335C68.0806 22.9542 67.3704 23.4505 66.5843 23.7954C65.7982 24.1404 64.9516 24.3273 64.093 24.3453Z" fill="#161619"/>
			<path d="M126.653 30.7329H123.458C123.111 30.7298 122.78 30.5904 122.537 30.3451C122.293 30.0998 122.156 29.7683 122.156 29.4229V26.2464C122.155 26.0749 122.187 25.9048 122.252 25.746C122.317 25.5871 122.412 25.4426 122.533 25.3208C122.654 25.199 122.798 25.1023 122.957 25.0363C123.116 24.9704 123.286 24.9364 123.458 24.9364H126.653C127.001 24.9364 127.335 25.0744 127.581 25.3201C127.828 25.5658 127.966 25.899 127.966 26.2464V29.4229C127.963 29.7694 127.824 30.1008 127.578 30.3458C127.333 30.5908 127 30.7298 126.653 30.7329Z" fill="#161619"/>
			<path d="M41.5753 29.3996C41.2489 23.9661 38.9674 18.8329 35.1504 14.9437C31.3335 11.0545 26.2376 8.67084 20.7997 8.23095C20.4682 8.21137 20.1557 8.0704 19.922 7.83507C19.6882 7.59974 19.5498 7.28661 19.5332 6.95573V1.42591C19.5331 1.24686 19.5691 1.06963 19.6392 0.90478C19.7092 0.739932 19.8118 0.590849 19.9409 0.466425C20.0699 0.342002 20.2228 0.244788 20.3903 0.180583C20.5578 0.116378 20.7366 0.0864979 20.9159 0.0927257C28.4798 0.57275 35.6002 3.82021 40.9131 9.21301C46.2261 14.6058 49.358 21.7648 49.7089 29.3185C49.7152 29.4953 49.6855 29.6716 49.6216 29.8367C49.5577 30.0018 49.461 30.1523 49.3372 30.2791C49.2134 30.4058 49.0651 30.5063 48.9014 30.5743C48.7376 30.6423 48.5617 30.6765 48.3843 30.6748H42.8999C42.5583 30.6694 42.2314 30.5347 41.9855 30.2979C41.7396 30.0612 41.593 29.7401 41.5753 29.3996Z" fill="#161619"/>
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

export { LogoIcon, Navbar }
