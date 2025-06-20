import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../assets/site-styles.css';
import { Navbar, LogoIcon } from './Navbar'
import { TeamMembers, CopyRight, CompanyEmail, CompanyDomain, StatusContents } from '../data/site-data'
import { SocialIconItems, SiteLinks, SocialIconLinkItem, ByBitIcon, AwsIcon, VenturesIcon, GateIcon, GateIconBlack} from './SocialIconsCollection'
import backgroundImage from '../assets/dashed-bg.png'
import { useDrawerHandler, OdometerItem } from './FunctionCollection'

export default function About({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto">
      		<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true} key="about"/>
			<section id="about" className="mx-auto lg:pt-[3rem]" onClick={closeDrawer}>
				<div className="px-[0.32rem] lg:px-[3rem] mx-auto w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] overflow-x-hidden">
					<AboutHeader smallScreenRatioDecimal={smallScreenRatioDecimal}/>
					<AboutBrand/>
					<AboutStatusContainer smallScreenRatioDecimal={smallScreenRatioDecimal}/>
					<EcosystemHeader/>
				</div>				
				<EcosystemContainer smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<div className="px-[0.32rem] lg:px-[3rem] mx-auto w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] overflow-x-hidden">
					<div className="my-[1.2rem] lg:my-[8rem] grid grid-cols-3 lg:grid-cols-4 items-center gap-[0.16rem] lg:gap-6">
						<OurTeamCard />
						{TeamMembers.map((item, index) => <TeamMemberCard {...item} key={index} />)}
					</div>
					<SiteInfoCard isMobileDevice={isMobileDevice}/>
					<SiteFooter isMobileDevice={isMobileDevice}/>
				</div>
			</section>
		</main>
	)
}

function AboutHeader({smallScreenRatioDecimal}) {
	return (
		<div className="mx-auto my-[1.28rem] lg:mt-[13rem] min-w-full relative">
			<div className="mx-auto w-content uppercase text-center text-[0.32rem] leading-[0.54rem] lg:text-[4rem] lg:leading-[88px] tracking-[10%] font-medium">
				<p className="relative">Every frame of code
					<span className="absolute size-[41px] flex items-center top-0 lg:top-0 left-[0.9rem] lg:left-[25%]"><LeftQuote scaleRatio={smallScreenRatioDecimal}/></span>
				</p>
				<p className="">is an elegant murder of</p>
				<p className="text-wrap wrap-normal">the old paradigm, every pixel</p>
				<p className="">a philosophical</p>
				<p className="">statement projected into</p>
				<p className="relative">the future.
					<span className="absolute size-[41px] flex items-center top-0 lg:top-0 right-[1.6rem] lg:right-[33%]"><RightQuote scaleRatio={smallScreenRatioDecimal}/></span>
				</p>
			</div>
			<VerticalItem/>
		</div>
	)
}

function VerticalItem() {
	return (
		<div id="v-item" className="absolute left-[0.32rem] lg:left-0 bottom-[-0.48rem] lg:bottom-0 flex flex-col items-center justify-center">	
			<div className="flex gap-[0.08rem] lg:gap-4 items-center text-[0.12rem] lg:text-base font-medium leading-[16px] text-black/64" style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-[0.8px] border-black/64 h-[1.2rem] lg:h-[8rem] translate-x-[50%]"></span>
			</div>
		</div>
	)
}

function AboutBrand() {
	return (
		<div className="border border-[0.02rem] lg:border-4 rounded-[0.16rem] lg:rounded-2xl p-[0.32rem] lg:px-[4rem] lg:py-[3rem] lg:my-[22rem] flex justify-between">
			<p className="uppercase text-[0.24rem] lg:text-[2rem] font-bold w-1/4 gap-[0.16rem] lg:gap-[1rem] lg:w-1/3">About brand:</p>
			<div className="w-3/4 grow-1 lg:grow-0 lg:w-1/2 flex flex-col justify-between gap-[0.32rem] lg:gap-[2rem] text-[0.2rem] lg:text-xl font-medium">
				<p className="">We're a visual design team with 8 years in the Web3 field.</p>
				<p className="">Our members include front-end experts from top design schools and major tech firms, alongside VC specialists with deep insight into Tokenomics and DApp logic.</p>
				<p className="">Design is never about forced abstraction or flashy techniques. We operate at the crossroads of web3 and code-based art，hope to deliver visual solutions that perfectly bridge your product and market needs.</p>
			</div>
		</div>
	)
}

function AboutStatusContainer({smallScreenRatioDecimal}) {
	const [showSection, setShowSection] = useState('left')	
	return (
		<div className="mx-auto w-full relative my-[1.68rem] lg:my-0">
			<div className="mx-auto overflow-x-hidden w-full lg:my-[22rem] flex items-center justify-between">
				<div className={`${showSection === 'left' ? '' : 'translate-x-[-100%] lg:translate-x-0'} transition-translate duration-700 mx-auto min-w-full max-w-full lg:ml-0 lg:min-w-[45%] lg:w-[45%] tracking-[-2%]`}>
					<p className="uppercase text-[0.48rem] lg:text-[4rem] font-bold leading-[0.48rem] lg:leading-[4rem]">we strive to innovate</p>
					<p className="text-[0.16rem] lg:text-[21px] font-normal leading-[24px] mt-[0.2rem] lg:my-[2rem]">Some Numbers About Us</p>	
					<div className="w-full grid grid-cols-2 gap-[0.48rem] lg:gap-[4rem] mt-[0.96rem] lg:my-[3rem]">
						{StatusContents.map((item, index) => <StatusItemCard {...item} i={index} key={index}/>)}
					</div>
				</div>
				<AboutCirclesCard showSection={showSection}/>
			</div>
			{ showSection === 'left' && <span className="flex items-center justify-center go-right absolute lg:hidden top-[45%] right-0 z-200" onClick={() => {setShowSection('right')}}><GoToRight scaleRatio={smallScreenRatioDecimal}/></span>}
			{ showSection === 'right' &&  <span className="flex items-center justify-center go-left absolute lg:hidden top-[45%] left-0 z-200" onClick={() => {setShowSection('left')}}><GoToLeft scaleRatio={smallScreenRatioDecimal}/></span>}			
		</div>
	)
}

function StatusItemCard({title, suffix, content, i}) {
	return (
		<article className="w-[85%] lg:w-4/5 my-[0.16rem] lg:my-[1.5rem]">
			<header className="text-[0.8rem] lg:text-8xl font-semibold leading-[0.8rem] lg:leading-[96px] tracking-[-8%]">{<OdometerItem value={title}/>} {suffix && <span className={`inline-block ${i == 3 ? 'translate-y-[8%]' : '' }`}>{suffix}</span>}</header>
			<hr className="w-full border border-[0.01rem] lg:border-1 border-black/20 my-[0.16rem] lg:mt-[2rem] lg:mb-[1.5rem]"></hr>
			<p className="text-[0.16rem] lg:text-base font-normal leading-[0.20rem] lg:leading-[20px] tracking-[-2%]">{content}</p>
		</article>
	)
}

function GoToRight({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'left', }} width="40" height="168" viewBox="0 0 40 168" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.12" d="M40 168C16.416 153.566 0 121.386 0 84.0008C0 46.6156 16.4158 14.4337 40 0V168Z" fill="black"/>
			<path d="M22.9713 84.6863L14.486 76.201L17.3145 73.3726L28.6282 84.6863L17.3145 96L14.486 93.1716L22.9713 84.6863Z" fill="#161619"/>
		</svg>
	)
}

function GoToLeft({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'left', }} width="40" height="168" viewBox="0 0 40 168" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.12" d="M2.38419e-06 168C23.584 153.566 40 121.386 40 84.0008C40 46.6156 23.5842 14.4337 2.38419e-06 0V168Z" fill="black"/>
			<path d="M17.0287 84.6863L25.514 76.201L22.6855 73.3726L11.3718 84.6863L22.6855 96L25.514 93.1716L17.0287 84.6863Z" fill="#161619"/>
		</svg>
	)
}

function AboutCirclesCard({showSection}) {
	return (
		<div className={`${showSection === 'left' ? '' : 'translate-x-[-100%] lg:translate-x-0'} scale-85 lg:scale-100 transition-translate duration-700 m-auto relative min-w-[6.96rem] min-h-[6.96rem] lg:min-w-[696px] lg:min-h-[696px] hover:cursor-pointer`}>
			<div className="about-circle-div w-full h-full top-0 right-0" data-circle="true">
				{/* <p className="circle-point circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Restore and follow up" data-point="true"></p> */}
				{/* <p className="circle-point-visible circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Restore and follow up" data-point="true"></p> */}
			</div>

			<div className="about-circle-div w-[84%] h-[84%] top-[2.45%] right-[2.45%]" data-circle="true">
				<p className="circle-point-visible circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Creative" data-up="true" data-point="true"></p>
				<p className="circle-point top-[32.899%]  right-[96.9846%]" data-label="Animation" data-point="false"></p>
				<p className="circle-point top-[54.3578%] right-[99.8097%]" data-label="Illustrator" data-point="false"></p>
				<p className="circle-point top-[92.8097%] right-[23.6422%]" data-label="NFT" data-point="true"></p>
				<p className="circle-point top-[79.3022%] right-[8.8606%]" data-label="3D" data-point="true"></p>
			</div>
			
			<div className="about-circle-div w-[67.5%] h-[67.5%] top-[4.95%] right-[4.95%]" data-circle="true">
				<p className="circle-point-visible circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Consulting & Resource" data-up="true" data-point="true"></p>
				<p className="circle-point top-[32.899%]  right-[96.9846%]" data-label="Strategic Review" data-point="false"></p>
				<p className="circle-point top-[54.3578%] right-[99.8097%]" data-label="Vertical Media" data-point="false"></p>
				<p className="circle-point top-[92.8097%] right-[23.6422%]" data-label="VC" data-point="true"></p>
				<p className="circle-point top-[79.3022%] right-[8.8606%]" data-label="Legal" data-point="true"></p>
			</div>
			<div className="about-circle-div w-[50%] h-[50%] top-[7.4%] right-[7.4%]" data-circle="true">
				<p className="circle-point-visible circle-data-point top-[85.3553%] right-[85.3553%]" data-label="Product" data-up="true" data-point="true"></p>
				<p className="circle-point top-[32.899%]  right-[96.9846%]" data-label="Web" data-point="false"></p>
				<p className="circle-point top-[54.3578%] right-[99.8097%]" data-label="App" data-point="false"></p>
				<p className="circle-point top-[92.8097%] right-[23.6422%]" data-label="UX research" data-point="true"></p>
				<p className="circle-point top-[79.3022%] right-[8.8606%]" data-label="UI design" data-point="true"></p>
				<p className="circle-point top-[99.3022%] right-[57.8606%]" data-label="Tech" data-point="true"></p>
			</div>
			<div className="about-circle-div w-[30.9%] h-[30.9%] top-[10.2%] right-[10.2%]" data-circle="true">
				<p className="circle-point-visible circle-data-point top-[14.6447%] right-[14.6447%]" data-label="Brand Identity" data-point="true"></p>
				<p className="circle-point top-[82.1394%] right-[11.6978%]" data-label="Visual identity system(VI)" data-point="false"></p>
				<p className="circle-point top-[95.3154%] right-[71.1309%]" data-label="Font" data-point="false"></p>
				<p className="circle-point top-[50%] right-[100%]" data-label="Story" data-point="false"></p>
			</div>
		</div>
	)
}

function EcosystemHeader() {
	return (
		<div className="mx-auto w-full lg:text-center">
			<h2 className="uppercase text-[0.48rem] lg:text-[4rem] font-bold leading-[0.48rem] lg:leading-[64px] tracking-[-2%]">ecosystem resource</h2>
			<p className="lg:px-[10rem] text-[0.16rem] lg:text-[1.75rem] leading-[0.2rem] lg:leading-[36px] tracking-[-2%] mt-[0.16rem] lg:mt-[2.5rem]">Over the years, Moto has had the privilege of supporting brands, institutions, and entrepreneurial teams from various industries,providing them with visual design, creative, and industry consulting services.</p>	
		</div>
	)
}

function EcosystemContainer({smallScreenRatioDecimal}) {
	return (
		<div className="m-auto w-full flex overflow-hidden gap--[0.32rem] lg:gap--[8rem] py-[0.8rem] lg:py-[10rem] mt-[0.8rem] lg:mt-[4rem] relative">
			<div className="flex items-center gap--[0.32rem] lg:gap--[8rem] basis-full grow-0 shrink-0 icons-scroll">
				<TestimonialSlideIcons smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</div>
			<div aria-hidden className="flex items-center gap--[0.32rem] lg:gap--[8rem] basis-full grow-0 shrink-0 icons-scroll">
				<TestimonialSlideIcons smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</div>
		    <span className="linear-gradient-cover absolute inset-0 left-0 bottom-0"></span>
		    {/* <span className="absolute top-0 bottom-0 left-0  w-[0.24rem] lg:w-[3rem] bg-linear-to-r from-white to-white-10"></span> */}
		    {/* <span className="absolute top-0 bottom-0 right-0 w-[0.24rem] lg:w-[3rem] bg-linear-to-l from-white to-white-10"></span> */}
		</div>
	)
}

function TestimonialSlideIcons({smallScreenRatioDecimal}) {
	let scaleRatio = smallScreenRatioDecimal * 0.65
	return (
		<div className="flex items-center gap--[0.32rem] lg:gap-[8rem] lg:mr-[8rem]">
			<span className="flex items-center justify-center lg:h-[3rem] cursor-pointer"><GateIconBlack scaleRatio={scaleRatio}/></span>
			<span className="flex items-center justify-center lg:h-[3rem] cursor-pointer"><ByBitIcon scaleRatio={scaleRatio}/></span>
			<span className="flex items-center justify-center lg:h-[3rem] cursor-pointer"><VenturesIcon scaleRatio={scaleRatio}/></span>
			<span className="flex items-center justify-center lg:h-[3rem] cursor-pointer"><AwsIcon scaleRatio={scaleRatio}/></span>
		</div>
	)
}


function SiteInfoCard({isMobileDevice}) {
	return (
		<div style={{
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'bottom',
			// width: '100vw',
		}} className="bg-bottom py-[0.48rem] mt-[1rem] lg:mt-0 lg:py-[12rem]">
			{ isMobileDevice ? <InfoCardMobile/> : <InfoCardDesktop/> }
		</div>
	)
}

function InfoCardMobile() {
	return (
		<>
			<div className="flex justify-between">
				<SiteHeader/>
				<InfoSection/>
			</div>
			<LogoLinksCard/>
		</>
	)
}

function InfoCardDesktop() {
	return (
		<div className="grid grid-cols-2">
			<SiteHeader/>
			<div className="mx-auto flex flex-col justify-between items-start">
				<InfoSection/>
				<LogoLinksCard/>
			</div>
		</div>
	)
}

function SiteHeader() {
	return (<header className="text-[0.56rem] leading-[0.64rem] lg:text-[104px] lg:leading-[104px] font-medium text-wrap w-[3.69rem] lg:w-[685px]">Let'screate something extraordinary together.</header>)
}

function InfoSection() {
	return (
		<div className="lg:mx-auto flex-col items-center justify-center">
			<p className="text-[0.32rem] leading-[0.32rem] lg:text-[40px] lg:leading-[24px] font-bold text-right lg:text-left">Infomations</p>
			<div className="flex flex-col lg:flex-row items-end lg:items-center gap-[0.16rem] lg:gap-[3rem] mt-[0.32rem] lg:mt-[4rem]">
				{ SiteLinks.map((item, index) => <Link to={item.linkTo} key={index} className="font-semibold text-[0.2rem] leading-[0.2rem] lg:text-2xl lg:leading-[24px]"><span className="text-nowrap">{item.title}</span></Link>)}
			</div>
		</div>
	)
}

function LogoLinksCard() {
	return (
		<div className="mx-auto lg:px-0 mt-[0.64rem] lg:mt-[4rem] flex items-center gap-[0.32rem] lg:gap-[2rem]">
			<EllipsIcon/>
			<div className="">
				<header className="text-[0.28rem] leading-[0.28rem] lg:text-[28px] lg:leading-[28px] font-bold">Moto Design</header>
				<p className="text-[0.16rem] lg:text-base font-medium mt-[0.08rem] lg:mt-[0.5rem]">Always trust our aesthetic</p>
				<div className="mt-[0.32rem] lg:mt-[2rem] flex items-end gap-[0.16rem] lg:gap-[2rem] overflow-visible">
	        		{SocialIconItems.map((item, index) => <SocialIconLinkItem {...item} key={item.name} />)}
				</div>
			</div>
		</div>
	)
}

function SiteFooter({isMobileDevice}) {
	return (
		<div className="w-full mx-auto flex items-center justify-between my-[0.48rem] lg:my-[3rem]">
			<Link to="/">{ isMobileDevice ? <LogoIconMobile/> : <LogoIconDesktop/> }</Link>
			<div className="w-2/3 lg:w-1/2 flex flex-col lg:flex-row items-end lg:gap-[2rem] lg:items-center lg:justify-between text-[0.12rem] leading-[0.16rem] lg:text-xl font-medium lg:leading-[20px]">
				<p className="">{CompanyEmail}</p>
				<p className="lg:mr-[6rem]">{CopyRight}</p>
			</div>
		</div>
	)
}

function TeamMemberCard({name, avatar, description, title, role}) {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<article className="border border-[0.03rem] lg:border-4 rounded-[0.16rem] lg:rounded-[1.4rem] w-[2.2rem] lg:w-[26rem] h-[3.3rem] lg:h-[33rem] overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className={`overflow-hidden top-0 relative transition-all duration-500 rounded-0 flex max-h-full min-h-full min-w-full max-w-full flex-col justify-between ${isHovered ? 'lg:top-[-100%]' : ''}`}>
				<img src={avatar} className="block h-[2.2rem] w-[2.2rem] lg:h-[26rem] lg:w-[26rem] object-cover object-center rounded-t-0"></img>
				<div className="grid content-center px-[0.24rem] lg:px-[1.5rem] h-[1.1rem] lg:h-[5.5rem] grow">
					<div className="flex flex-col lg:flex-row lg:items-center justify-between font-normal">
						<header className="text-[0.28rem] leading-[0.28rem] lg:text-[2.5rem] lg:leading-[2.5rem] tracking-[-2%]">{name}</header>
						<p className="mt-[0.08rem] lg:mt-0 text-[0.12rem] lg:text-right lg:text-xs">{role}</p>
					</div>
				</div>
			</div>

		    <div className={`relative transition-all duration-500 rounded-0 max-h-full min-h-full min-w-full max-w-full bg-black text-white p-[0.4rem] lg:p-[2.5rem] ${isHovered ? 'lg:top-[-100%] xz-100' : 'lg:top-[6px] '}`}>
		     	<header className="text-[0.28rem] lg:text-[4rem] font-bold tracking-[-2%]">{name}</header>
		     	<p className="uppercase text-[0.24rem] lg:text-[1.5rem] font-normal mt-[0.24rem] lg:mt-[1.5rem]">{title}</p>
				<p className="text-[0.16rem] lg:text-base font-normal mt-[0.32rem] lg:mt-[4rem]">{description}</p>
		    </div>
		</article>
	)
}

function OurTeamCard() {
	return (
		<div className="mb-[0.32rem] lg:mb-0 col-span-3 lg:col-span-2 flex flex-col w-4/5">
			<div className="flex sm:gap-[0.08rem] mb-[0.16rem] lg:mb-8">
				<span className="text-[0.48rem] leading-[0.48rem] lg:text-[10.5rem] lg:leading-[168px] font-bold uppercase tracking-[-2%]">our</span>
				<span className="lg:hidden text-[0.48rem] leading-[0.48rem] lg:text-[10.5rem] lg:leading-[168px] font-bold uppercase text-right tracking-[-2%]">team</span>
			</div>
			<p className="text-[0.16rem] lg:text-base">As a dynamic design company, we endow products with artistic power,</p>
			<p className="text-[0.16rem] lg:text-base">attract global enterprises, and redefine the future of products.</p>
			<p className="hidden lg:block lg:mt-4 text-5xl leading-[48px] lg:text-[10.5rem] lg:leading-[168px] font-bold uppercase text-right tracking-[-2%]">team</p>
		</div>
	)
}

function LeftQuote({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'bottom right', }} width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.4238 22.408V14.344C14.4238 10.632 15.2238 7.56 16.8238 5.128C18.4878 2.696 20.8878 1.09599 24.0238 0.327997V3.68799C22.1038 4.2 20.7278 5.16 19.8958 6.568C19.0638 7.912 18.5838 9.672 18.4558 11.848H22.1038V22.408H14.4238ZM0.0237505 22.408V14.344C0.0237505 10.632 0.82375 7.56 2.42375 5.128C4.08775 2.696 6.48775 1.09599 9.62375 0.327997V3.68799C7.70375 4.2 6.32775 5.16 5.49575 6.568C4.66375 7.912 4.18375 9.672 4.05575 11.848H7.70375V22.408H0.0237505Z" fill="black"/>
		</svg>
	)
}

function RightQuote({scaleRatio}) {
	return (
		<svg style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'top left', }} width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.5763 0.591999L10.5763 8.656C10.5763 12.368 9.77625 15.44 8.17625 17.872C6.51225 20.304 4.11225 21.904 0.976253 22.672L0.976253 19.312C2.89625 18.8 4.27225 17.84 5.10425 16.432C5.93625 15.088 6.41625 13.328 6.54425 11.152L2.89625 11.152L2.89626 0.591998L10.5763 0.591999ZM24.9763 0.592L24.9763 8.656C24.9763 12.368 24.1763 15.44 22.5763 17.872C20.9123 20.304 18.5123 21.904 15.3763 22.672L15.3763 19.312C17.2963 18.8 18.6723 17.84 19.5043 16.432C20.3363 15.088 20.8163 13.328 20.9443 11.152L17.2963 11.152L17.2963 0.592L24.9763 0.592Z" fill="black"/>
		</svg>
	)
}


function EllipsIcon() {
	return (
		<svg width="222" height="112" viewBox="0 0 222 112" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.48" d="M54 56C54 86.9279 79.0721 112 110 112V0C79.0721 0 54 25.0721 54 56Z" fill="#0E0E0E"/>
			<path opacity="0.28" d="M54 4C33.4772 12.3187 19 32.4664 19 56C19 79.5336 33.4772 99.6813 54 108V4Z" fill="#0E0E0E"/>
			<path opacity="0.16" d="M18.5 14.4092C7.14013 24.6582 0 39.4953 0 56.0001C0 72.5048 7.14013 87.3419 18.5 97.591V14.4092Z" fill="#0E0E0E"/>
			<circle cx="166" cy="56" r="56" fill="#161619"/>
			<path d="M126.875 47.0426C126.762 47.0378 126.649 47.0551 126.543 47.0935C126.437 47.1319 126.34 47.1905 126.258 47.2659C126.177 47.3412 126.112 47.4317 126.067 47.532C126.023 47.6322 126 47.74 126 47.8489V51.9516V64.9385C126.002 65.153 126.092 65.3581 126.25 65.5092C126.409 65.6602 126.623 65.7449 126.846 65.7449H130.31C130.532 65.7449 130.746 65.66 130.903 65.5087C131.06 65.3575 131.148 65.1524 131.148 64.9385V53.0197C133.632 54.0092 135.776 55.6499 137.336 57.7548C138.897 59.8597 139.811 62.344 139.974 64.9244C139.984 65.1327 140.076 65.3296 140.232 65.4744C140.388 65.6192 140.596 65.7009 140.813 65.7025H144.284C144.397 65.7035 144.508 65.6826 144.612 65.6411C144.715 65.5996 144.809 65.5384 144.887 65.461C144.966 65.3837 145.027 65.2919 145.067 65.1911C145.108 65.0904 145.127 64.9828 145.123 64.8749C144.898 60.263 142.912 55.893 139.545 52.6023C136.178 49.3117 131.666 47.332 126.875 47.0426ZM184.479 49.4759H181.279V47.8065C181.279 47.6994 181.257 47.5934 181.214 47.4946C181.171 47.3958 181.108 47.3063 181.029 47.2312C180.949 47.1562 180.855 47.0971 180.752 47.0574C180.648 47.0177 180.538 46.9982 180.426 47.0001H177.69C177.472 47.0001 177.262 47.0836 177.108 47.2322C176.953 47.3807 176.866 47.5822 176.866 47.7924V57.6104V57.6882C176.864 59.6859 177.634 61.6132 179.028 63.0946C180.421 64.5761 182.338 65.5057 184.405 65.7025C184.522 65.7157 184.641 65.7045 184.753 65.6698C184.866 65.635 184.969 65.5774 185.056 65.501C185.143 65.4245 185.212 65.3309 185.259 65.2266C185.305 65.1222 185.327 65.0095 185.325 64.8961V62.2294C185.32 62.0349 185.243 61.8485 185.108 61.7034C184.973 61.5583 184.789 61.4639 184.589 61.4371C183.661 61.2693 182.822 60.7952 182.218 60.0967C181.614 59.3982 181.282 58.5189 181.279 57.6104V54.4273H184.486C184.708 54.4273 184.922 54.3423 185.079 54.1911C185.236 54.0399 185.325 53.8348 185.325 53.6209V50.2893C185.325 50.1825 185.303 50.0767 185.26 49.978C185.218 49.8793 185.155 49.7896 185.077 49.7141C184.998 49.6386 184.905 49.5787 184.802 49.5378C184.7 49.4969 184.59 49.4759 184.479 49.4759ZM194.886 49.4759C193.213 49.4759 191.578 49.9529 190.187 50.8468C188.796 51.7406 187.712 53.011 187.072 54.4974C186.431 55.9838 186.264 57.6194 186.59 59.1973C186.917 60.7753 187.722 62.2247 188.905 63.3624C190.088 64.5 191.595 65.2747 193.236 65.5886C194.877 65.9025 196.577 65.7414 198.123 65.1257C199.668 64.51 200.989 63.4674 201.919 62.1297C202.848 60.792 203.344 59.2192 203.344 57.6104C203.342 55.4542 202.45 53.387 200.864 51.863C199.278 50.339 197.128 49.4829 194.886 49.4829V49.4759ZM194.886 61.8474C194.342 61.8364 193.807 61.7224 193.309 61.5119C192.811 61.3014 192.362 60.9986 191.986 60.6208C191.61 60.243 191.316 59.7976 191.119 59.3102C190.923 58.8227 190.828 58.3028 190.841 57.7801C190.807 57.2495 190.887 56.7179 191.076 56.2181C191.264 55.7183 191.556 55.2608 191.935 54.8738C192.314 54.4867 192.771 54.1783 193.279 53.9675C193.786 53.7567 194.333 53.6479 194.886 53.6479C195.439 53.6479 195.986 53.7567 196.493 53.9675C197 54.1783 197.458 54.4867 197.837 54.8738C198.215 55.2608 198.508 55.7183 198.696 56.2181C198.884 56.7179 198.964 57.2495 198.931 57.7801C198.945 58.3034 198.851 58.8241 198.655 59.3124C198.459 59.8006 198.164 60.2468 197.788 60.6254C197.413 61.0039 196.963 61.3074 196.465 61.5183C195.967 61.7292 195.43 61.8435 194.886 61.8545V61.8474ZM166.57 49.4829C164.896 49.4829 163.261 49.9602 161.87 50.8543C160.479 51.7485 159.395 53.0193 158.755 54.5061C158.115 55.9929 157.948 57.6289 158.275 59.207C158.601 60.7852 159.408 62.2346 160.591 63.3719C161.775 64.5093 163.283 65.2835 164.924 65.5965C166.565 65.9096 168.266 65.7475 169.811 65.1308C171.357 64.514 172.677 63.4703 173.606 62.1316C174.534 60.793 175.029 59.2195 175.028 57.6104C175.026 55.4542 174.134 53.387 172.548 51.863C170.962 50.339 168.812 49.4829 166.57 49.4829ZM166.57 61.8545C166.026 61.8435 165.49 61.7295 164.993 61.519C164.495 61.3085 164.045 61.0057 163.67 60.6279C163.294 60.2501 162.999 59.8047 162.803 59.3173C162.606 58.8298 162.512 58.3099 162.524 57.7872C162.491 57.2566 162.571 56.725 162.759 56.2252C162.948 55.7254 163.24 55.2679 163.619 54.8808C163.998 54.4938 164.455 54.1854 164.963 53.9746C165.47 53.7638 166.017 53.655 166.57 53.655C167.122 53.655 167.669 53.7638 168.177 53.9746C168.684 54.1854 169.141 54.4938 169.52 54.8808C169.899 55.2679 170.192 55.7254 170.38 56.2252C170.568 56.725 170.648 57.2566 170.615 57.7872C170.627 58.3099 170.533 58.8298 170.336 59.3173C170.14 59.8047 169.845 60.2501 169.469 60.6279C169.094 61.0057 168.644 61.3085 168.147 61.519C167.649 61.7295 167.113 61.8435 166.57 61.8545Z" fill="#F7F7F7"/>
			<path d="M206.169 65.7516H204.146C203.927 65.7497 203.718 65.6647 203.563 65.515C203.409 65.3653 203.323 65.1631 203.323 64.9523V63.0141C203.322 62.9095 203.342 62.8057 203.383 62.7088C203.424 62.6119 203.485 62.5237 203.561 62.4494C203.638 62.3751 203.729 62.3161 203.829 62.2758C203.93 62.2356 204.037 62.2148 204.146 62.2148H206.169C206.389 62.2148 206.601 62.2991 206.757 62.449C206.912 62.5989 207 62.8022 207 63.0141V64.9523C206.998 65.1637 206.91 65.3659 206.754 65.5154C206.599 65.6649 206.389 65.7497 206.169 65.7516Z" fill="#F7F7F7"/>
			<path d="M152.316 64.938C152.11 61.6227 150.666 58.4906 148.25 56.1176C145.833 53.7446 142.608 52.2902 139.166 52.0218C138.956 52.0098 138.758 51.9238 138.61 51.7802C138.462 51.6366 138.375 51.4456 138.364 51.2437V47.8696C138.364 47.7604 138.387 47.6522 138.431 47.5516C138.476 47.4511 138.54 47.3601 138.622 47.2842C138.704 47.2083 138.801 47.1489 138.907 47.1098C139.013 47.0706 139.126 47.0524 139.239 47.0562C144.027 47.349 148.534 49.3305 151.897 52.621C155.26 55.9114 157.243 60.2795 157.465 64.8885C157.469 64.9964 157.45 65.104 157.41 65.2047C157.369 65.3054 157.308 65.3973 157.229 65.4746C157.151 65.5519 157.057 65.6132 156.954 65.6547C156.85 65.6962 156.739 65.7171 156.626 65.7161H153.155C152.939 65.7128 152.732 65.6306 152.576 65.4861C152.42 65.3417 152.328 65.1457 152.316 64.938Z" fill="#F7F7F7"/>
		</svg>
	)
}

function LogoIconMobile() {
	return (
		<svg width="118" height="29" viewBox="0 0 118 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.27503 0.465695C1.11017 0.458474 0.945562 0.484655 0.791129 0.542657C0.636696 0.60066 0.495643 0.689281 0.376485 0.803172C0.257326 0.917063 0.162533 1.05386 0.0978266 1.20531C0.03312 1.35676 -0.000158229 1.51972 5.65625e-07 1.68436V7.88459V27.5115C0.00282616 27.8357 0.13389 28.1457 0.364661 28.3739C0.595432 28.6021 0.907226 28.7302 1.23217 28.7302H6.27871C6.60266 28.7302 6.91334 28.6018 7.14241 28.3733C7.37148 28.1447 7.50016 27.8347 7.50016 27.5115V9.49879C11.1178 10.9942 14.2414 13.4739 16.5147 16.6549C18.7881 19.836 20.1196 23.5905 20.3576 27.4901C20.3713 27.805 20.5057 28.1026 20.733 28.3214C20.9603 28.5402 21.2632 28.6636 21.579 28.6661H26.6363C26.7999 28.6676 26.962 28.6361 27.1131 28.5733C27.2641 28.5106 27.4008 28.418 27.5149 28.3011C27.6291 28.1842 27.7183 28.0455 27.7772 27.8932C27.8362 27.741 27.8635 27.5784 27.8577 27.4153C27.5311 20.4455 24.6378 13.8412 19.7324 8.86808C14.827 3.895 8.25467 0.903054 1.27503 0.465695ZM85.1911 4.14307H80.5303V1.62022C80.5304 1.45837 80.4981 1.29813 80.4353 1.14887C80.3726 0.999599 80.2807 0.864293 80.165 0.750846C80.0493 0.637398 79.9121 0.548082 79.7615 0.488111C79.6108 0.42814 79.4496 0.398715 79.2874 0.401555H75.3016C74.9834 0.401555 74.6781 0.527697 74.4531 0.752232C74.228 0.976766 74.1016 1.2813 74.1016 1.59884V16.4366V16.5542C74.0975 19.5734 75.2198 22.4859 77.2499 24.7248C79.2801 26.9637 82.0727 28.3687 85.084 28.6661C85.2547 28.686 85.4277 28.6691 85.5913 28.6166C85.7549 28.5641 85.9053 28.4771 86.0323 28.3615C86.1593 28.246 86.2599 28.1046 86.3274 27.9469C86.3948 27.7891 86.4276 27.6188 86.4233 27.4474V23.4172C86.416 23.1233 86.3042 22.8416 86.1079 22.6223C85.9117 22.403 85.6437 22.2604 85.3519 22.2199C83.9993 21.9662 82.7778 21.2498 81.8977 20.1942C81.0176 19.1386 80.5341 17.8097 80.5303 16.4366V11.6261H85.2019C85.5258 11.6261 85.8365 11.4977 86.0656 11.2692C86.2946 11.0406 86.4233 10.7307 86.4233 10.4074V5.37243C86.4233 5.21099 86.3914 5.05113 86.3295 4.90197C86.2676 4.75282 86.1768 4.6173 86.0624 4.50314C85.948 4.38899 85.8122 4.29843 85.6627 4.23665C85.5132 4.17487 85.353 4.14307 85.1911 4.14307ZM100.352 4.14307C97.9152 4.14307 95.5329 4.86408 93.5066 6.21491C91.4803 7.56574 89.901 9.48574 88.9684 11.7321C88.0358 13.9784 87.7918 16.4503 88.2672 18.835C88.7427 21.2197 89.9162 23.4102 91.6394 25.1295C93.3627 26.8488 95.5582 28.0196 97.9483 28.494C100.339 28.9683 102.816 28.7249 105.067 27.7944C107.319 26.8639 109.243 25.2882 110.597 23.2666C111.951 21.2449 112.674 18.8681 112.674 16.4366C112.671 13.178 111.372 10.0539 109.061 7.75068C106.751 5.4475 103.618 4.15376 100.352 4.15376V4.14307ZM100.352 22.84C99.5604 22.8233 98.7798 22.651 98.0549 22.3329C97.33 22.0148 96.6751 21.5572 96.1277 20.9862C95.5803 20.4153 95.1512 19.7422 94.8649 19.0055C94.5786 18.2689 94.4407 17.4831 94.4592 16.6932C94.4107 15.8913 94.5272 15.0879 94.8014 14.3325C95.0756 13.5772 95.5018 12.8858 96.0538 12.3008C96.6058 11.7159 97.2718 11.2498 98.011 10.9312C98.7502 10.6126 99.547 10.4483 100.352 10.4483C101.157 10.4483 101.954 10.6126 102.693 10.9312C103.433 11.2498 104.099 11.7159 104.651 12.3008C105.203 12.8858 105.629 13.5772 105.903 14.3325C106.177 15.0879 106.294 15.8913 106.245 16.6932C106.265 17.484 106.128 18.2709 105.843 19.0088C105.557 19.7467 105.128 20.421 104.581 20.9931C104.033 21.5653 103.378 22.0238 102.652 22.3426C101.926 22.6614 101.145 22.834 100.352 22.8507V22.84ZM59.1013 4.15376C56.6638 4.15376 54.2811 4.87504 52.2546 6.22635C50.2281 7.57765 48.6488 9.49828 47.7165 11.7453C46.7842 13.9922 46.5408 16.4646 47.0171 18.8496C47.4934 21.2346 48.668 23.4251 50.3923 25.144C52.1166 26.8628 54.3131 28.0328 56.704 28.506C59.0949 28.9791 61.5727 28.7341 63.824 27.802C66.0753 26.8699 67.999 25.2925 69.3516 23.2695C70.7042 21.2464 71.4251 18.8685 71.423 16.4366C71.4202 13.178 70.1207 10.0539 67.8103 7.75068C65.4998 5.4475 62.3673 4.15376 59.1013 4.15376ZM59.1013 22.8507C58.3095 22.834 57.5289 22.6617 56.804 22.3436C56.0791 22.0255 55.4242 21.5679 54.8768 20.9969C54.3294 20.426 53.9003 19.7529 53.614 19.0162C53.3277 18.2795 53.1898 17.4938 53.2083 16.7039C53.1598 15.902 53.2763 15.0986 53.5505 14.3432C53.8247 13.5879 54.2509 12.8965 54.8029 12.3115C55.3549 11.7266 56.0209 11.2605 56.7601 10.9419C57.4993 10.6233 58.2961 10.459 59.1013 10.459C59.9065 10.459 60.7032 10.6233 61.4424 10.9419C62.1816 11.2605 62.8477 11.7266 63.3997 12.3115C63.9517 12.8965 64.3779 13.5879 64.6521 14.3432C64.9263 15.0986 65.0428 15.902 64.9943 16.7039C65.0128 17.4938 64.8749 18.2795 64.5886 19.0162C64.3023 19.7529 63.8732 20.426 63.3258 20.9969C62.7784 21.5679 62.1235 22.0255 61.3986 22.3436C60.6737 22.6617 59.893 22.834 59.1013 22.8507Z" fill="#161619"/>
			<path d="M116.789 28.741H113.843C113.523 28.7382 113.218 28.6097 112.993 28.3835C112.769 28.1572 112.643 27.8516 112.643 27.533V24.604C112.641 24.4458 112.671 24.289 112.731 24.1425C112.791 23.996 112.879 23.8628 112.99 23.7504C113.102 23.6381 113.235 23.549 113.381 23.4881C113.527 23.4273 113.684 23.396 113.843 23.396H116.789C117.11 23.396 117.418 23.5233 117.645 23.7498C117.872 23.9763 118 24.2836 118 24.604V27.533C117.997 27.8526 117.869 28.1582 117.642 28.3841C117.416 28.6101 117.109 28.7382 116.789 28.741Z" fill="#161619"/>
			<path d="M38.3372 27.511C38.0361 22.5007 35.9324 17.7673 32.4126 14.181C28.8929 10.5947 24.1939 8.39663 19.1796 7.991C18.8739 7.97295 18.5857 7.84296 18.3702 7.62595C18.1547 7.40895 18.027 7.12021 18.0117 6.81509V1.71594C18.0116 1.55084 18.0449 1.3874 18.1094 1.23539C18.174 1.08339 18.2686 0.945913 18.3876 0.831179C18.5066 0.716446 18.6476 0.626803 18.802 0.567598C18.9565 0.508394 19.1214 0.480841 19.2867 0.486584C26.2615 0.929223 32.8274 3.92377 37.7265 8.89658C42.6257 13.8694 45.5137 20.4708 45.8373 27.4362C45.8431 27.5993 45.8157 27.7619 45.7568 27.9141C45.6979 28.0664 45.6087 28.2051 45.4945 28.322C45.3804 28.4389 45.2437 28.5315 45.0926 28.5942C44.9416 28.6569 44.7794 28.6885 44.6159 28.6869H39.5586C39.2435 28.6819 38.9421 28.5577 38.7154 28.3394C38.4886 28.1211 38.3534 27.825 38.3372 27.511Z" fill="#161619"/>
		</svg>
	)
}

function LogoIconDesktop() {
	return (
		<svg width="128" height="30" viewBox="0 0 128 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38308 0.184939C1.20426 0.177389 1.0257 0.204764 0.858175 0.265414C0.690654 0.326063 0.537648 0.418728 0.408391 0.537817C0.279134 0.656905 0.176307 0.799947 0.106117 0.958309C0.0359268 1.11667 -0.000171639 1.28707 6.13561e-07 1.45922V7.94239V28.465C0.00306567 28.804 0.145237 29.1281 0.395565 29.3667C0.645894 29.6054 0.984112 29.7393 1.33659 29.7393H6.81081C7.16222 29.7393 7.49923 29.605 7.74771 29.366C7.99619 29.1271 8.13579 28.8029 8.13579 28.465V9.63025C12.06 11.1939 15.4483 13.7867 17.9143 17.113C20.3803 20.4392 21.8247 24.365 22.0828 28.4426C22.0977 28.7719 22.2435 29.083 22.4901 29.3118C22.7367 29.5406 23.0652 29.6696 23.4078 29.6722H28.8937C29.0711 29.6738 29.247 29.6408 29.4108 29.5753C29.5746 29.5097 29.7229 29.4129 29.8468 29.2906C29.9706 29.1684 30.0674 29.0233 30.1313 28.8641C30.1952 28.7049 30.2249 28.5349 30.2186 28.3644C29.8643 21.0765 26.7258 14.1708 21.4047 8.97076C16.0836 3.77073 8.95423 0.642256 1.38308 0.184939ZM92.4109 4.03013H87.3551V1.39215C87.3551 1.22291 87.3201 1.05536 87.252 0.899286C87.184 0.743208 87.0843 0.601727 86.9588 0.483103C86.8333 0.364478 86.6845 0.271086 86.521 0.208378C86.3576 0.14567 86.1828 0.114903 86.0069 0.117872H81.6833C81.338 0.117872 81.0069 0.249771 80.7628 0.484552C80.5187 0.719333 80.3816 1.03776 80.3816 1.36979V16.8847V17.0077C80.3771 20.1646 81.5945 23.2101 83.7967 25.5511C85.9988 27.8922 89.0281 29.3612 92.2947 29.6722C92.4798 29.6931 92.6675 29.6754 92.845 29.6205C93.0224 29.5656 93.1856 29.4746 93.3233 29.3538C93.4611 29.233 93.5702 29.0851 93.6434 28.9202C93.7166 28.7553 93.7521 28.5772 93.7475 28.3979V24.1839C93.7395 23.8765 93.6182 23.582 93.4054 23.3527C93.1925 23.1233 92.9018 22.9742 92.5852 22.9319C91.1181 22.6666 89.793 21.9176 88.8383 20.8137C87.8837 19.7099 87.3591 18.3205 87.3551 16.8847V11.8547H92.4225C92.7739 11.8547 93.1109 11.7204 93.3594 11.4814C93.6079 11.2424 93.7475 10.9183 93.7475 10.5804V5.31559C93.7475 5.14678 93.7129 4.97962 93.6457 4.82367C93.5786 4.66771 93.4801 4.526 93.356 4.40663C93.2319 4.28727 93.0845 4.19258 92.9224 4.12798C92.7602 4.06338 92.5864 4.03013 92.4109 4.03013ZM108.857 4.03013C106.213 4.03013 103.629 4.78404 101.431 6.19652C99.2331 7.60899 97.5199 9.6166 96.5083 11.9655C95.4967 14.3143 95.232 16.899 95.7477 19.3925C96.2634 21.886 97.5364 24.1765 99.4057 25.9742C101.275 27.772 103.656 28.9963 106.249 29.4923C108.842 29.9883 111.529 29.7337 113.972 28.7608C116.414 27.7878 118.501 26.1402 119.97 24.0263C121.439 21.9124 122.223 19.4271 122.223 16.8847C122.22 13.4774 120.81 10.2107 118.304 7.80237C115.798 5.39409 112.4 4.04131 108.857 4.04131V4.03013ZM108.857 23.5803C107.998 23.5628 107.151 23.3827 106.365 23.0501C105.578 22.7174 104.868 22.2389 104.274 21.6419C103.68 21.0449 103.215 20.3411 102.904 19.5708C102.594 18.8005 102.444 17.9789 102.464 17.153C102.412 16.3144 102.538 15.4744 102.836 14.6846C103.133 13.8948 103.595 13.1718 104.194 12.5602C104.793 11.9485 105.515 11.4612 106.317 11.128C107.119 10.7949 107.983 10.6231 108.857 10.6231C109.73 10.6231 110.595 10.7949 111.396 11.128C112.198 11.4612 112.921 11.9485 113.519 12.5602C114.118 13.1718 114.581 13.8948 114.878 14.6846C115.175 15.4744 115.302 16.3144 115.249 17.153C115.271 17.9798 115.122 18.8027 114.813 19.5742C114.503 20.3458 114.037 21.0509 113.444 21.6491C112.85 22.2474 112.139 22.7269 111.352 23.0602C110.564 23.3935 109.717 23.574 108.857 23.5914V23.5803ZM64.11 4.04131C61.466 4.04131 58.8813 4.7955 56.6831 6.20847C54.4848 7.62145 52.7717 9.62971 51.7604 11.9792C50.7491 14.3287 50.4851 16.9139 51.0017 19.4078C51.5184 21.9016 52.7925 24.1921 54.663 25.9894C56.5334 27.7867 58.916 29.0101 61.5095 29.5048C64.1031 29.9995 66.7909 29.7434 69.233 28.7687C71.6751 27.7941 73.7617 26.1448 75.229 24.0294C76.6963 21.914 77.4782 19.4276 77.4759 16.8847C77.4728 13.4774 76.0633 10.2107 73.557 7.80237C71.0508 5.39409 67.6528 4.04131 64.11 4.04131ZM64.11 23.5914C63.2511 23.574 62.4043 23.3938 61.618 23.0612C60.8316 22.7286 60.1212 22.2501 59.5275 21.6531C58.9337 21.0561 58.4682 20.3523 58.1576 19.582C57.8471 18.8117 57.6975 17.9901 57.7176 17.1641C57.665 16.3256 57.7913 15.4856 58.0888 14.6958C58.3862 13.9059 58.8485 13.183 59.4473 12.5713C60.046 11.9597 60.7686 11.4723 61.5704 11.1392C62.3723 10.8061 63.2365 10.6342 64.11 10.6342C64.9835 10.6342 65.8477 10.8061 66.6495 11.1392C67.4514 11.4723 68.1739 11.9597 68.7727 12.5713C69.3714 13.183 69.8337 13.9059 70.1312 14.6958C70.4287 15.4856 70.555 16.3256 70.5024 17.1641C70.5224 17.9901 70.3729 18.8117 70.0623 19.582C69.7518 20.3523 69.2863 21.0561 68.6925 21.6531C68.0987 22.2501 67.3883 22.7286 66.602 23.0612C65.8157 23.3938 64.9688 23.574 64.11 23.5914Z" fill="#161619"/>
			<path d="M126.687 29.7501H123.49C123.144 29.7471 122.813 29.6128 122.569 29.3762C122.325 29.1396 122.189 28.82 122.189 28.487V25.4242C122.187 25.2589 122.22 25.0949 122.284 24.9417C122.349 24.7885 122.445 24.6492 122.566 24.5318C122.687 24.4143 122.831 24.3211 122.99 24.2575C123.148 24.1939 123.319 24.1611 123.49 24.1611H126.687C127.035 24.1611 127.369 24.2942 127.615 24.5311C127.862 24.768 128 25.0892 128 25.4242V28.487C127.997 28.8211 127.858 29.1406 127.612 29.3769C127.366 29.6131 127.034 29.7472 126.687 29.7501Z" fill="#161619"/>
			<path d="M41.5863 28.464C41.2598 23.2251 38.9777 18.2756 35.1597 14.5257C31.3417 10.7757 26.2445 8.47736 20.8052 8.05322C20.4736 8.03434 20.161 7.89842 19.9272 7.67151C19.6934 7.44461 19.5549 7.14269 19.5383 6.82365V1.4918C19.5382 1.31916 19.5743 1.14827 19.6443 0.989327C19.7144 0.83038 19.817 0.686634 19.9461 0.566665C20.0752 0.446696 20.2281 0.352962 20.3956 0.291056C20.5632 0.22915 20.742 0.200339 20.9214 0.206344C28.4873 0.669183 35.6096 3.80039 40.9239 9.00012C46.2383 14.1999 49.3711 21.1025 49.7221 28.3858C49.7284 28.5563 49.6987 28.7263 49.6348 28.8855C49.5709 29.0447 49.4741 29.1898 49.3502 29.312C49.2264 29.4343 49.0781 29.5311 48.9143 29.5967C48.7505 29.6622 48.5746 29.6952 48.3971 29.6936H42.9113C42.5695 29.6884 42.2426 29.5585 41.9966 29.3302C41.7506 29.1019 41.6039 28.7923 41.5863 28.464Z" fill="#161619"/>
		</svg>
	)
}

export { SiteInfoCard,  SiteFooter }


