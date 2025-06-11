import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../assets/site-styles.css';
import { Navbar, LogoIcon } from './Navbar'
import { TeamMembers, CopyRight, CompanyEmail, CompanyDomain, StatusContents } from '../data/site-data'
import { SocialIconItems, SiteLinks, SocialIconLinkItem, ByBitIcon, AwsIcon, VenturesIcon, GateIcon, GateIconBlack} from './SocialIconsCollection'
import backgroundImage from '../assets/dashed-bg.png'
import { useDrawerHandler, OdometerItem, isElementInViewport } from './FunctionCollection'

export default function About() {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto max-w-[750px] lg:max-w-[1920px] overflow-x-hidden">
      		<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer}/>
			<section id="about" className="mx-auto pt-[3rem]" onClick={closeDrawer}>
				<AboutHeader/>
				<AboutBrand/>
				<AboutStatusContainer/>
				<EcosystemHeader/>
				<EcosystemCard/>
				<div className="mx-[1.5rem] lg:mx-[3rem] mt-[4rem] lg:mt-[10rem] grid grid-cols-3 lg:grid-cols-4 items-center gap-4 lg:gap-6">
					<OurTeam />
					{TeamMembers.map((item, index) => <TeamMemberCard {...item} key={index} />)}
				</div>
				<SiteInfoCard/>
				<SiteFooter/>
			</section>
		</main>
	)
}

function AboutHeader() {
	return (
		<div className="mx-auto mx-[1.5rem] lg:mx-[3rem] my-[4rem] lg:my-[6rem] min-w-full lg:w-[75rem] relative">
			<div className="mx-auto w-content uppercase text-center text-[2rem] leading-[54px] lg:text-[4rem] lg:leading-[88px] tracking-[10%] font-medium">
				<p className="relative">Every frame of code
					<span className="absolute size-[41px] flex items-center top-[-0.7rem] left-[15%] lg:left-[25%]"><LeftQuote/></span>
				</p>
				<p className="">is an elegant murder of</p>
				<p className="text-wrap wrap-normal">the old paradigm, every pixel</p>
				<p className="">a philosophical</p>
				<p className="">statement projected into</p>
				<p className="">the future.
					<span className="absolute size-[41px] flex items-center bottom-[-0.7rem] right-[25%] lg:right-[33%]"><RightQuote/></span>
				</p>
			</div>
			<VerticalItem/>
		</div>
	)
}

function VerticalItem() {
	return (
		<div id="v-item" className="absolute left-[1.5rem] lg:left-0 bottom-0 flex flex-col items-center justify-center">	
			<div className="flex gap-4 items-center text-xs lg:text-base font-medium leading-[16px] text-black/64" style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-[0.8px] border-black/64 h-[8rem] translate-x-[50%]"></span>
			</div>
		</div>
	)
}

function AboutBrand() {
	return (
		<div className="mx-[1.5rem] lg:mx-[3rem] border border-2 lg:border-4 rounded-2xl p-[2rem] lg:px-[4rem] lg:py-[3rem] flex justify-between">
			<p className="uppercase text-2xl lg:text-[2rem] font-bold w-1/4 gap-[1rem] lg:w-1/3">About brand:</p>
			<div className="w-3/4 grow-1 lg:grow-0 lg:w-1/2 flex flex-col justify-between gap-[2rem] text-xl font-medium">
				<p className="">We're a visual design team with 8 years in the Web3 field.</p>
				<p className="">Our members include front-end experts from top design schools and major tech firms, alongside VC specialists with deep insight into Tokenomics and DApp logic.</p>
				<p className="">Design is never about forced abstraction or flashy techniques. We operate at the crossroads of web3 and code-based art，hope to deliver visual solutions that perfectly bridge your product and market needs.</p>
			</div>
		</div>
	)
}

function AboutStatusContainer() {
	const [showSection, setShowSection] = useState('left')	
	return (
		<div className="mx-auto mx-[1.5rem] lg:mx-[3rem] w-full relative">
			<div className="mx-auto overflow-x-hidden w-full my-[4rem] lg:my-[12rem] flex items-center justify-evenly">
				<div className={`${showSection === 'left' ? '' : 'translate-x-[-100%] lg:translate-x-0'} transition-translate duration-700 px-[1.5rem] lg:px-[3rem] mx-auto min-w-full max-w-full lg:min-w-[45%] lg:w-[45%] tracking-[-2%]`}>
					<p className="uppercase text-5xl lg:text-[4rem] font-bold leading-[4rem]">we strive to innovate</p>
					<p className="text-base lg:text-[21px] font-normal lg:font-bold leading-[24px] my-[1rem] lg:my-[2rem]">Some Number About Us</p>	
					<div className="grid grid-cols-2 gap-[4rem] my-[3rem]">
						{StatusContents.map((item, index) => <StatusItemCard {...item} key={index}/>)}
					</div>
				</div>
				<AboutCirclesCard showSection={showSection}/>
			</div>
			{ showSection === 'left' && <span className="go-right absolute lg:hidden top-[40%] right-[0] z-200" onClick={() => {setShowSection('right')}}><GoToRight/></span>}
			{ showSection === 'right' &&  <span className="go-left absolute lg:hidden top-[40%] left-[0] z-200" onClick={() => {setShowSection('left')}}><GoToLeft/></span>}			
		</div>
	)
}

function StatusItemCard({title, suffix, content}) {
	return (
		<article className="w-[80%] my-[1rem] lg:my-[1.5rem]">
			<header className="text-[5rem] lg:text-8xl font-semibold leading-[80px] lg:leading-[96px] tracking-[-8%]">{<OdometerItem value={title}/>} {suffix && <span>{suffix}</span>}</header>
			<hr className="w-full border border-1 lg:border-2 border-black/20 my-[1rem] lg:mt-[2rem] lg:mb-[1.5rem]"></hr>
			<p className="text-base font-normal leading-[20px] tracking-[-2%]">{content}</p>
		</article>
	)
}

function GoToRight() {
	return (
		<svg width="40" height="168" viewBox="0 0 40 168" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.12" d="M40 168C16.416 153.566 0 121.386 0 84.0008C0 46.6156 16.4158 14.4337 40 0V168Z" fill="black"/>
			<path d="M22.9713 84.6863L14.486 76.201L17.3145 73.3726L28.6282 84.6863L17.3145 96L14.486 93.1716L22.9713 84.6863Z" fill="#161619"/>
		</svg>
	)
}

function GoToLeft() {
	return (
		<svg width="40" height="168" viewBox="0 0 40 168" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.12" d="M2.38419e-06 168C23.584 153.566 40 121.386 40 84.0008C40 46.6156 23.5842 14.4337 2.38419e-06 0V168Z" fill="black"/>
			<path d="M17.0287 84.6863L25.514 76.201L22.6855 73.3726L11.3718 84.6863L22.6855 96L25.514 93.1716L17.0287 84.6863Z" fill="#161619"/>
		</svg>
	)
}

function AboutCirclesCard({showSection}) {
	return (
		<div className={`${showSection === 'left' ? '' : 'translate-x-[-100%] lg:translate-x-0'} transition-translate duration-700 m-auto relative min-w-[696px] min-h-[696px] hover:cursor-pointer`}>
			<div className="about-circle-div w-full h-full top-0 right-0" data-circle="true">
				{/* <p className="circle-point circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Restore and follow up" data-point="true"></p> */}
				<p className="circle-point top-[85.3553%] right-[85.3553%]" data-label="Restore and follow up" data-point="false"></p>
			</div>

			<div className="about-circle-div w-[84%] h-[84%] top-[2.45%] right-[2.45%]" data-circle="true">
				{/* <p className="circle-point circle-data-point top-[100%] right-[50%]" data-label="Comprehensive expansion" data-point="true"></p> */}
				{/* <p className="circle-point circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Comprehensive expansion" data-point="true"></p> */}
				<p className="circle-point top-[99.8097%] right-[45.6422%]" data-label="Creative" data-up="true" data-point="false"></p>
			</div>
			
			<div className="about-circle-div w-[67.5%] h-[67.5%] top-[4.95%] right-[4.95%]" data-circle="true">
				{/* <p className="circle-point circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Concept draft output" data-point="true"></p> */}
				{/* <p className="circle-point top-[93.3013%] right-[25%]" data-label="A/B Testing" data-point="false"></p> */}
				<p className="circle-point top-[54.3578%] right-[99.8097%]" data-label="Consulting & Resource" data-point="false"></p>
				{/* <p className="circle-point top-[25%] right-[93.3013%]" data-label="Optimization" data-point="false"></p> */}
			</div>
			<div className="about-circle-div w-[50%] h-[50%] top-[7.4%] right-[7.4%]" data-circle="true">
				{/* <p className="circle-point circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Interaction scheme" data-point="true"></p> */}
				{/* <p className="circle-point top-[88.3022%] right-[17.8606%]" data-label="Final draft output" data-point="false"></p> */}
				<p className="circle-point top-[99.8097%] right-[45.6422%]" data-label="Product" data-up="true" data-point="false"></p>
				{/* <p className="circle-point top-[54.3578%] right-[99.8097%]" data-label="User Experience" data-point="false"></p> */}
				{/* <p className="circle-point top-[32.899%]  right-[96.9846%]" data-label="Innovations" data-point="false"></p> */}
			</div>
			<div className="about-circle-div w-[30.9%] h-[30.9%] top-[10.2%] right-[10.2%]" data-circle="true">
				<p className="circle-point-visible circle-data-point top-[14.6447%] right-[14.6447%]" data-label="Align requirements" data-point="true"></p>
				{/* <p className="circle-point top-[82.1394%] right-[11.6978%]" data-label="Data Science" data-point="false"></p> */}
				{/* <p className="circle-point top-[95.3154%] right-[71.1309%]" data-label="UX Research" data-point="false"></p> */}
				<p className="circle-point top-[50%] right-[100%]" data-label="Brand identity" data-point="false"></p>
			</div>
		</div>
	)
}

function EcosystemHeader() {
	return (
		<div className="mx-auto px-[1.2rem] lg:px-[3rem] w-full text-center scroll-fade-in">
			<h2 className="uppercase text-5xl lg:text-[4rem] font-bold leading-[48px] lg:leading-[64px] tracking-[-2%]">ecosystem resource</h2>
			<p className="lg:px-[10rem] text-base lg:text-[1.75rem] leading-[20px] lg:leading-[36px] tracking-[-2%] mt-[1rem] lg:mt-[2.5rem]">Over the years, Moto has had the privilege of supporting brands, institutions, and entrepreneurial teams from various industries,providing them with visual design, creative, and industry consulting services.</p>	
		</div>
	)
}

function EcosystemCard() {
	return (
		<div className="mx-[1.5rem] lg:mx-[3rem]">
			<div className="overflow-hidden relative m-auto w-full h-[6rem] flex will-change-transform mt-[5rem] lg:mt-[10rem]">
				<div className="absolute top-0 left-0 w-full h-full m-auto flex items-center justify-start whitespace-nowrap">
					<div className="flex items-center scroll-icons gap-[8rem]">
						<TestimonialSlideIcons/>
						<TestimonialSlideIcons/>
						<TestimonialSlideIcons/>
						<TestimonialSlideIcons/>
					</div>
				</div>
				<span className="absolute top-0 bottom-0 left-0  w-[2rem] lg:w-[4rem] bg-linear-to-r from-white to-white-10"></span>
				<span className="absolute top-0 bottom-0 right-0 w-[2rem] lg:w-[4rem] bg-linear-to-l from-white to-white-10"></span>
			</div>
		</div>
	)
}

function TestimonialSlideIcons() {
	return (
		<div className="flex items-center gap-[8rem] h-[6rem]">
			<span className="flex items-center justify-center h-[3rem] cursor-pointer"><GateIconBlack/></span>
			<span className="flex items-center justify-center h-[3rem] cursor-pointer"><ByBitIcon/></span>
			<span className="flex items-center justify-center h-[3rem] cursor-pointer"><VenturesIcon/></span>
			<span className="flex items-center justify-center h-[3rem] cursor-pointer"><AwsIcon/></span>
		</div>
	)
}


function SiteInfoCard() {
	return (
		<div style={{
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'bottom',
			// width: '100vw',
		}} className="bg-bottom pt-[6rem] mt-[6rem] lg:mt-0 lg:pt-[12rem] px-[1.5rem] lg:px-[6rem] grid grid-cols-2">
			<div className="">
				<header className="text-[56px] leading-[64px] lg:text-[104px] lg:leading-[104px] font-medium">Let'screate something extraordinary together.</header>
			</div>
			<div className="mx-auto w-full flex items-start justify-end">
				<div className="lg:mx-auto flex-col items-center justify-center">
					<p className="text-[32px] leading-[32px] lg:text-[40px] lg:leading-[24px] font-bold text-right lg:text-left">Infomations</p>
					<div className="flex flex-col lg:flex-row items-end lg:items-center gap-[1rem] lg:gap-[3rem] mt-[2rem] lg:mt-[4rem]">
						{ SiteLinks.map((item, index) => <Link to={item.linkTo} key={index} className="text-2xl font-semibold leading-[24px]">{item.title}</Link>)}
					</div>
				</div>
			</div>
			<LogoLinksCard/>
		</div>
	)
}

function LogoLinksCard() {
	return (
		<div className="px-[1.5rem] lg:px-0 mt-[4rem] flex gap-[2rem] lg:translate-x-[120%] lg:translate-y-[-155%]">
			<div className="flex">
				<EllipsIcon/><span className="size-[112px] flex items-center justify-center bg-black rounded-[50%]"><LogoIconSmallWhite/></span>
			</div>
			<div className="">
				<header className="text-[28px] leading-[28px] font-bold">Moto Design</header>
				<p className="text-base font-medium mt-[0.5rem]">Web Design、Other Design</p>
				<div className="mt-[2rem] flex items-end gap-[2rem]">
	        		{SocialIconItems.map((item, index) => <SocialIconLinkItem {...item} key={index} />)}
				</div>
			</div>
		</div>
	)
}

function SiteFooter() {
	return (
		<div className="w-full mx-auto flex items-center justify-between px-[1.5rem] lg:px-[6rem] my-[3rem]">
			<Link to="/"><LogoIcon/></Link>
			<div className="w-2/3 lg:w-1/2 flex flex-col lg:flex-row items-end lg:gap-[2rem] lg:items-center lg:justify-between text-xs leading-[16px] lg:text-xl font-medium lg:leading-[20px]">
				<p className="">{CompanyEmail}</p>
				<p className="lg:mr-[6rem]">{CopyRight}</p>
			</div>
		</div>
	)
}



function TeamMemberCard({name, avatar, description, title, role}) {
	return (
		<article className="group border border-3 lg:border-4 rounded-[1rem] lg:rounded-[1.4rem] perspective-distant w-[13.75rem] lg:w-[26rem] h-[20.8rem] lg:h-[33rem] bg-transparent">
		  <div className="relative min-h-full min-w-full transition-transform duration-1300 transform-3d group-hover:rotate-y-180">

		    <div className="rounded-[1.2rem] absolute inset-0 flex h-full min-w-full flex-col justify-between backface-hidden">
          		<img src={avatar} className="block w-[13.75rem] h-[13.75rem] lg:w-[26rem] lg:h-[26rem] object-cover object-center rounded-[0.8rem] lg:rounded-t-[1.2rem]"></img>
				<div className="grid content-center px-[1.5rem] h-[5.5rem] grow">
					<div className="flex flex-col lg:flex-row lg:items-center justify-between font-normal">
						<header className="text-[1.75rem] leading-[28px] lg:text-[2.5rem] tracking-[-2%]">{name}</header>
						<p className="mt-[0.5rem] lg:mt-0 lg:text-right text-xs">{role}</p>
					</div>
				</div>
		    </div>

		    <div className="rounded-[1.2rem] absolute inset-0 max-h-full min-h-full max-w-full bg-black text-white p-[2.5rem] rotate-y-180 backface-hidden">
		     	<header className="text-[4rem] font-bold tracking-[-2%]">{name}</header>
		     	<p className="uppercase text-[1.5rem] font-normal mt-[1.5rem]">{title}</p>
				<p className="text-base font-normal mt-[4rem]">{description}</p>
		    </div>
		  </div>
		</article>
	)
}

function OurTeam() {
	return (
		<div className="col-span-3 lg:col-span-2 flex flex-col gap-8 w-4/5">
			<div className="flex sm:gap-[0.5rem]">
				<span className="text-5xl leading-[48px] lg:text-[10.5rem] lg:leading-[168px] font-bold uppercase tracking-[-2%]">our</span>
				<span className="lg:hidden text-5xl leading-[48px] lg:text-[10.5rem] lg:leading-[168px] font-bold uppercase text-right tracking-[-2%]">team</span>
			</div>
			<p className="text-base">As a dynamic design company, we endow products with artistic power, attract global enterprises, and redefine the future of products.</p>
			<p className="hidden lg:block text-5xl leading-[48px] lg:text-[10.5rem] lg:leading-[168px] font-bold uppercase text-right tracking-[-2%]">team</p>
		</div>
	)
}

function LeftQuote() {
	return (
		<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.4238 22.408V14.344C14.4238 10.632 15.2238 7.56 16.8238 5.128C18.4878 2.696 20.8878 1.09599 24.0238 0.327997V3.68799C22.1038 4.2 20.7278 5.16 19.8958 6.568C19.0638 7.912 18.5838 9.672 18.4558 11.848H22.1038V22.408H14.4238ZM0.0237505 22.408V14.344C0.0237505 10.632 0.82375 7.56 2.42375 5.128C4.08775 2.696 6.48775 1.09599 9.62375 0.327997V3.68799C7.70375 4.2 6.32775 5.16 5.49575 6.568C4.66375 7.912 4.18375 9.672 4.05575 11.848H7.70375V22.408H0.0237505Z" fill="black"/>
		</svg>
	)
}

function RightQuote() {
	return (
		<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.5763 0.591999L10.5763 8.656C10.5763 12.368 9.77625 15.44 8.17625 17.872C6.51225 20.304 4.11225 21.904 0.976253 22.672L0.976253 19.312C2.89625 18.8 4.27225 17.84 5.10425 16.432C5.93625 15.088 6.41625 13.328 6.54425 11.152L2.89625 11.152L2.89626 0.591998L10.5763 0.591999ZM24.9763 0.592L24.9763 8.656C24.9763 12.368 24.1763 15.44 22.5763 17.872C20.9123 20.304 18.5123 21.904 15.3763 22.672L15.3763 19.312C17.2963 18.8 18.6723 17.84 19.5043 16.432C20.3363 15.088 20.8163 13.328 20.9443 11.152L17.2963 11.152L17.2963 0.592L24.9763 0.592Z" fill="black"/>
		</svg>
	)
}


function EllipsIcon() {
	return (
		<svg width="110" height="112" viewBox="0 0 110 112" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.48" d="M54 56C54 86.9279 79.0721 112 110 112V0C79.0721 0 54 25.0721 54 56Z" fill="#0E0E0E"/>
			<path opacity="0.28" d="M54 4C33.4772 12.3187 19 32.4664 19 56C19 79.5336 33.4772 99.6813 54 108V4Z" fill="#0E0E0E"/>
			<path opacity="0.16" d="M18.5 14.4092C7.14013 24.6582 0 39.4953 0 56.0001C0 72.5048 7.14013 87.3419 18.5 97.591V14.4092Z" fill="#0E0E0E"/>
		</svg>
	)
}

function LogoIconSmallWhite() {
	return (
		<svg width="81" height="20" viewBox="0 0 81 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.875233 0.0441573C0.76207 0.0392005 0.649073 0.0571721 0.543064 0.0969873C0.437054 0.136802 0.34023 0.197636 0.258435 0.275815C0.17664 0.353995 0.11157 0.447899 0.0671522 0.551861C0.0227349 0.655823 -0.000108615 0.767686 3.88269e-07 0.880699V5.13679V18.6095C0.00194 18.8321 0.0919077 19.0448 0.250319 19.2015C0.408729 19.3582 0.622758 19.4461 0.845813 19.4461H4.30997C4.53234 19.4461 4.7456 19.3579 4.90285 19.201C5.06009 19.0442 5.14842 18.8314 5.14842 18.6095V6.24484C7.63171 7.27136 9.77587 8.97349 11.3364 11.1571C12.8969 13.3407 13.811 15.918 13.9743 18.5948C13.9837 18.811 14.076 19.0152 14.232 19.1654C14.388 19.3157 14.5959 19.4004 14.8128 19.402H18.2843C18.3965 19.4031 18.5079 19.3814 18.6115 19.3384C18.7152 19.2953 18.809 19.2318 18.8874 19.1515C18.9658 19.0713 19.027 18.976 19.0675 18.8715C19.1079 18.767 19.1267 18.6554 19.1227 18.5435C18.8985 13.7591 16.9124 9.22562 13.5451 5.81189C10.1779 2.39817 5.66635 0.344378 0.875233 0.0441573ZM58.4787 2.56846H55.2794V0.836671C55.2794 0.725568 55.2572 0.615576 55.2142 0.513113C55.1711 0.410651 55.108 0.317771 55.0286 0.239896C54.9492 0.162021 54.855 0.100711 54.7516 0.0595445C54.6482 0.0183778 54.5375 -0.0018204 54.4262 0.000128758H51.6902C51.4717 0.000128758 51.2622 0.0867179 51.1077 0.240848C50.9532 0.394977 50.8664 0.604022 50.8664 0.821994V11.0073V11.088C50.8636 13.1604 51.634 15.1598 53.0276 16.6966C54.4211 18.2335 56.3381 19.1979 58.4052 19.402C58.5224 19.4157 58.6411 19.4042 58.7534 19.3681C58.8657 19.332 58.969 19.2723 59.0561 19.193C59.1433 19.1137 59.2124 19.0166 59.2587 18.9083C59.305 18.8001 59.3275 18.6832 59.3246 18.5655V15.799C59.3195 15.5973 59.2428 15.4039 59.1081 15.2534C58.9734 15.1028 58.7894 15.0049 58.5891 14.9772C57.6606 14.803 56.8221 14.3112 56.218 13.5866C55.6139 12.862 55.2819 11.9498 55.2794 11.0073V7.70512H58.4861C58.7085 7.70512 58.9217 7.61698 59.079 7.4601C59.2362 7.30322 59.3246 7.09044 59.3246 6.86858V3.41234C59.3246 3.30152 59.3027 3.19178 59.2602 3.0894C59.2177 2.98702 59.1554 2.89399 59.0768 2.81563C58.9983 2.73726 58.905 2.6751 58.8024 2.6327C58.6998 2.59029 58.5898 2.56846 58.4787 2.56846ZM68.8859 2.56846C67.2131 2.56846 65.5778 3.06339 64.1868 3.99065C62.7959 4.91792 61.7118 6.23588 61.0716 7.77787C60.4315 9.31986 60.264 11.0166 60.5903 12.6536C60.9167 14.2906 61.7222 15.7942 62.9051 16.9744C64.088 18.1546 65.5951 18.9583 67.2358 19.2839C68.8765 19.6095 70.5772 19.4424 72.1227 18.8037C73.6682 18.165 74.9892 17.0834 75.9186 15.6956C76.848 14.3078 77.344 12.6763 77.344 11.0073C77.3421 8.77042 76.4501 6.62586 74.8641 5.04487C73.2781 3.46387 71.1279 2.5758 68.8859 2.5758V2.56846ZM68.8859 15.4028C68.3424 15.3913 67.8065 15.2731 67.309 15.0547C66.8113 14.8364 66.3618 14.5222 65.986 14.1303C65.6103 13.7384 65.3157 13.2763 65.1192 12.7706C64.9227 12.265 64.828 11.7256 64.8407 11.1834C64.8074 10.6329 64.8874 10.0814 65.0756 9.56293C65.2639 9.04441 65.5564 8.5698 65.9353 8.16827C66.3142 7.76675 66.7714 7.4468 67.2788 7.22811C67.7863 7.00941 68.3332 6.8966 68.8859 6.8966C69.4387 6.8966 69.9856 7.00941 70.493 7.22811C71.0004 7.4468 71.4576 7.76675 71.8365 8.16827C72.2154 8.5698 72.508 9.04441 72.6962 9.56293C72.8845 10.0814 72.9644 10.6329 72.9311 11.1834C72.9448 11.7262 72.8509 12.2664 72.6548 12.7729C72.4587 13.2794 72.1643 13.7423 71.7884 14.135C71.4126 14.5278 70.9627 14.8425 70.4646 15.0614C69.9665 15.2802 69.43 15.3987 68.8859 15.4101V15.4028ZM40.5696 2.5758C38.8964 2.5758 37.2608 3.07091 35.8697 3.9985C34.4786 4.92609 33.3946 6.24449 32.7546 7.7869C32.1146 9.32932 31.9476 11.0265 32.2745 12.6636C32.6015 14.3008 33.4078 15.8044 34.5914 16.9843C35.775 18.1642 37.2828 18.9674 38.924 19.2921C40.5652 19.6169 42.2661 19.4488 43.8115 18.8089C45.3569 18.1691 46.6773 17.0863 47.6058 15.6976C48.5343 14.3089 49.0292 12.6766 49.0277 11.0073C49.0258 8.77042 48.1338 6.62586 46.5478 5.04487C44.9618 3.46387 42.8115 2.5758 40.5696 2.5758ZM40.5696 15.4101C40.0261 15.3987 39.4902 15.2804 38.9926 15.062C38.495 14.8437 38.0455 14.5296 37.6697 14.1376C37.294 13.7457 36.9994 13.2837 36.8029 12.778C36.6063 12.2723 36.5117 11.7329 36.5244 11.1907C36.4911 10.6402 36.571 10.0888 36.7593 9.57026C36.9475 9.05175 37.2401 8.57714 37.619 8.17561C37.9979 7.77409 38.4551 7.45414 38.9625 7.23545C39.4699 7.01675 40.0168 6.90394 40.5696 6.90394C41.1223 6.90394 41.6692 7.01675 42.1766 7.23545C42.6841 7.45414 43.1413 7.77409 43.5202 8.17561C43.8991 8.57714 44.1916 9.05175 44.3799 9.57026C44.5681 10.0888 44.6481 10.6402 44.6148 11.1907C44.6275 11.7329 44.5328 12.2723 44.3363 12.778C44.1398 13.2837 43.8452 13.7457 43.4695 14.1376C43.0937 14.5296 42.6442 14.8437 42.1466 15.062C41.649 15.2804 41.1131 15.3987 40.5696 15.4101Z" fill="#F7F7F7"/>
			<path d="M80.1689 19.4532H78.1463C77.9271 19.4513 77.7176 19.3631 77.5634 19.2078C77.4091 19.0525 77.3225 18.8427 77.3225 18.624V16.6134C77.3216 16.5048 77.3422 16.3972 77.3831 16.2966C77.4241 16.1961 77.4846 16.1046 77.5612 16.0275C77.6378 15.9504 77.7289 15.8892 77.8293 15.8474C77.9298 15.8057 78.0375 15.7842 78.1463 15.7842H80.1689C80.3893 15.7842 80.6007 15.8715 80.7566 16.027C80.9124 16.1826 81 16.3935 81 16.6134V18.624C80.9981 18.8433 80.9099 19.0531 80.7544 19.2082C80.599 19.3633 80.3887 19.4513 80.1689 19.4532Z" fill="#F7F7F7"/>
			<path d="M26.3164 18.6093C26.1097 15.17 24.6656 11.9208 22.2495 9.459C19.8335 6.99722 16.6079 5.48839 13.1658 5.20995C12.956 5.19756 12.7582 5.10833 12.6102 4.95937C12.4623 4.81041 12.3746 4.61221 12.3641 4.40276V0.902496C12.3641 0.789162 12.3869 0.676976 12.4312 0.57263C12.4755 0.468285 12.5405 0.373918 12.6222 0.295161C12.7039 0.216403 12.8006 0.154868 12.9066 0.114228C13.0127 0.0735875 13.1258 0.0546741 13.2394 0.0586161C18.0271 0.362462 22.5342 2.41804 25.8972 5.83158C29.2602 9.24511 31.2427 13.7766 31.4648 18.5579C31.4688 18.6699 31.45 18.7815 31.4095 18.886C31.3691 18.9905 31.3078 19.0858 31.2295 19.166C31.1511 19.2462 31.0573 19.3098 30.9536 19.3528C30.8499 19.3959 30.7386 19.4175 30.6263 19.4165H27.1548C26.9385 19.4131 26.7316 19.3278 26.576 19.1779C26.4203 19.0281 26.3275 18.8248 26.3164 18.6093Z" fill="#F7F7F7"/>
		</svg>
	)
}

export { SiteInfoCard,  SiteFooter }


