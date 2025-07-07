import { useState } from 'react'
import '../assets/site-styles.css';
import { Navbar } from './Navbar'
import { AboutHeaderSvg } from './HeaderSvg'
import { TeamMembers, StatusContents } from '../data/site-data'
import { ByBitIcon, AwsIcon, VenturesIcon, GateIconBlack} from './SocialIconsCollection'
import { useDrawerHandler, OdometerItem, useHoverHandler } from './FunctionCollection'
import { SiteInfoCard,  SiteFooter } from './Footer'

export default function About({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto">
      		<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true} key="about"/>
			<section id="about" className="mx-auto lg:pt-[0.48rem]" onClick={closeDrawer}>
				<div className="px-[0.32rem] lg:px-[0.48rem] mx-auto w-screen max-w-screen lg:max-w-[1920px] overflow-x-hidden">
					{isMobileDevice ? <AboutHeaderMobile smallScreenRatioDecimal={smallScreenRatioDecimal}/> : <AboutHeaderDesktop/>}
					<AboutBrand/>
				</div>
				<AboutStatusContainer smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<EcosystemHeader/>
				<EcosystemContainer isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<div className="px-[0.32rem] lg:px-[0.48rem] mx-auto w-screen max-w-screen lg:max-w-[1920px] overflow-x-hidden">
					<div className="my-[1.2rem] lg:my-[3.52rem] grid grid-cols-3 lg:grid-cols-5 gap-[0.16rem] lg:gap-x-[0.2rem] lg:gap-y-[0.4rem]">
						<OurTeamCard />
						{TeamMembers.map((item, index) => <TeamMemberCard {...item} key={index} />)}
					</div>
				</div>
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</section>
		</main>
	)
}

function AboutHeaderDesktop() {
	return (
		<div className="mx-auto mt-[1.28rem] lg:mt-[2.08rem] min-w-full relative">
			<div className="mx-auto w-content uppercase text-center text-[0.32rem] leading-[0.54rem] lg:text-[0.64rem] lg:leading-[0.88rem] tracking-[10%] font-medium">
				<p className="relative">Every frame of code
					<span className="absolute size-[41px] flex items-center top-0 lg:top-0 left-[0.9rem] lg:left-[25%]"><LeftQuote/></span>
				</p>
				<p className="">is an elegant murder of</p>
				<p className="text-wrap wrap-normal">the old paradigm, every pixel</p>
				<p className="">a philosophical</p>
				<p className="">statement projected into</p>
				<p className="relative">the future.
					<span className="absolute size-[41px] flex items-center top-0 lg:top-0 right-[1.6rem] lg:right-[33%]"><RightQuote/></span>
				</p>
			</div>
		</div>
	)
}

function AboutHeaderMobile({smallScreenRatioDecimal}) {
	return (
		<div className="mx-auto mt-[1.6rem] min-w-full relative">
			<span className="flex items-center justify-center"><AboutHeaderSvg scaleRatio={smallScreenRatioDecimal}/></span>
		</div>
	)
}

function AboutBrand() {
	return (
		<div className="border border-[0.02rem] lg:border-[0.04rem] rounded-[0.16rem] lg:rounded-[0.24rem] p-[0.32rem] lg:px-[0.64rem] lg:py-[0.48rem] mt-[1.28rem] lg:mt-[3.52rem] flex justify-between">
			<p className="uppercase text-[0.24rem] lg:text-[0.32rem] font-bold w-1/4 gap-[0.16rem] lg:gap-[0.16rem] lg:w-1/3">About brand:</p>
			<div className="w-3/4 grow-1 lg:grow-0 lg:w-1/2 flex flex-col justify-between gap-[0.32rem] lg:gap-[0.32rem] text-[0.2rem] lg:text-[0.2rem] font-medium">
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
		<div className="mx-auto relative mt-[1.68rem] lg:mt-[3.6rem] lg:px-[0.48rem] w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] overflow-x-hidden">
			<div className="mx-auto overflow-x-hidden w-full flex items-center justify-between pl-[0.32rem] lg:pl-0">
				<div className={`${showSection === 'left' ? '' : 'translate-x-[-100%] lg:translate-x-0'} transition-translate duration-700 lg:ml-0 mx-auto min-w-full max-w-full lg:min-w-[45%] lg:w-[45%] tracking-[-2%]`}>
					<p className="uppercase text-[0.48rem] lg:text-[0.64rem] font-bold leading-[0.48rem] lg:leading-[0.64rem]">we strive to innovate</p>
					<p className="text-[0.16rem] lg:text-[0.21rem] font-normal leading-[0.24rem] mt-[0.2rem] lg:mt-[0.16rem]">Some Numbers About Us</p>
					<div className="w-full grid grid-cols-2 gap-[0.48rem] lg:gap-[0.64rem] mt-[0.96rem] lg:mt-[0.48rem]">
						{StatusContents.map((item, index) => <StatusItemCard {...item} i={index} key={index}/>)}
					</div>
				</div>
				<AboutCirclesCard showSection={showSection}/>
			</div>
			{ showSection === 'left' && <span className="flex items-center justify-center go-right absolute lg:hidden top-[45%] right-[-0.32rem] z-200" onClick={() => {setShowSection('right')}}><GoToRight scaleRatio={smallScreenRatioDecimal}/></span>}
			{ showSection === 'right' &&  <span className="flex items-center justify-center go-left absolute lg:hidden top-[45%] left-0 z-200" onClick={() => {setShowSection('left')}}><GoToLeft scaleRatio={smallScreenRatioDecimal}/></span>}
		</div>
	)
}

function StatusItemCard({title, suffix, content, i}) {
	return (
		<article className="w-[85%] lg:w-4/5 my-[0.16rem] lg:my-[0.16rem]">
			<header className="text-[0.8rem] lg:text-[0.96rem] font-semibold leading-[0.8rem] lg:leading-[0.96rem] tracking-[-8%]">{<OdometerItem className="min-w-content" value={title}/>} {suffix && <span className={`inline-block ${i == 3 ? 'translate-y-[8%]' : '' }`}>{suffix}</span>}</header>
			<hr className="w-full border border-[0.01rem] lg:border-1 border-black/20 my-[0.16rem] lg:mt-[0.32rem] lg:mb-[0.2rem]"></hr>
			<p className="text-[0.16rem] lg:text-[0.16rem] font-normal leading-[0.20rem] lg:leading-[0.2rem] tracking-[-2%]">{content}</p>
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
		<div className={`${showSection === 'left' ? '' : 'translate-x-[-100%] lg:translate-x-0'} lg:mr-[0.32rem] scale-85 lg:scale-100 transition-translate duration-700 m-auto relative min-w-[6.96rem] min-h-[6.96rem] hover:cursor-pointer`}>
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
		<div className="mx-auto lg:text-center px-[0.32rem] lg:px-[0.48rem] mt-[2.16rem] lg:mt-[3.36rem] w-screen max-w-screen lg:max-w-[1920px] overflow-x-hidden">
			<h2 className="uppercase text-[0.48rem] lg:text-[0.64rem] font-bold leading-[0.48rem] lg:leading-[0.64rem] tracking-[-2%]">ecosystem resource</h2>
			<p className="lg:px-[1.6rem] text-[0.16rem] lg:text-[0.24rem] leading-[0.2rem] lg:leading-[0.36rem] tracking-[-2%] mt-[0.16rem] lg:mt-[0.4rem]">Over the years, Moto has had the privilege of supporting brands, institutions, and entrepreneurial teams from various industries,providing them with visual design, creative, and industry consulting services.</p>
		</div>
	)
}

function EcosystemContainer({isMobileDevice, smallScreenRatioDecimal}) {
	return (
		<div className="m-auto w-full flex items-center overflow-hidden gap--[0.32rem] lg:gap--[8rem] py-[0.8rem] lg:py-[1.6rem] mt-[0.8rem] lg:mt-[0.64rem] relative">
			<div className="flex items-center gap--[0.32rem] lg:gap--[8rem] grow-0 shrink-0 icons-scroll mr-[0.8rem] lg:mr-0 ">
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</div>
			<div aria-hidden className="flex items-center gap--[0.32rem] lg:gap--[8rem] grow-0 shrink-0 icons-scroll ml-0">
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
				<TestimonialSlideIcons isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</div>
		    <span className="linear-gradient-cover absolute inset-0 left-0 bottom-0"></span>
		    {/* <span className="absolute top-0 bottom-0 left-0  w-[0.24rem] lg:w-[3rem] bg-linear-to-r from-white to-white-10"></span> */}
		    {/* <span className="absolute top-0 bottom-0 right-0 w-[0.24rem] lg:w-[3rem] bg-linear-to-l from-white to-white-10"></span> */}
		</div>
	)
}

function TestimonialSlideIcons({isMobileDevice, smallScreenRatioDecimal}) {
	let scaleRatio = isMobileDevice? smallScreenRatioDecimal * 0.65 : 1
	return (
		<div className="flex items-center gap-[0.8rem] lg:gap-[1.28rem] mr-[0.8rem] lg:mr-[1.28rem]">
			<span className="flex items-center justify-center lg:h-[0.48rem] cursor-pointer"><GateIconBlack scaleRatio={scaleRatio}/></span>
			<span className="flex items-center justify-center lg:h-[0.48rem] cursor-pointer"><ByBitIcon scaleRatio={scaleRatio}/></span>
			<span className="flex items-center justify-center lg:h-[0.48rem] cursor-pointer"><VenturesIcon scaleRatio={scaleRatio}/></span>
			<span className="flex items-center justify-center lg:h-[0.48rem] cursor-pointer"><AwsIcon scaleRatio={scaleRatio}/></span>
		</div>
	)
}

function TeamMemberCard({name, avatar, description, title, role}) {
	const {isHovered, setIsHovered} = useHoverHandler();
	return (
		<article className="box-border border border-[0.03rem] lg:border-[4px] rounded-[0.16rem] w-[2.2rem] lg:w-[3.3rem] h-[3.3rem] lg:h-[4.6rem] overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className={`overflow-hidden top-0 rounded-0 flex max-h-full min-h-full min-w-full max-w-full flex-col justify-between`}>
				<img src={avatar} className="mx-auto w-[2.2rem] h-[2.2rem] lg:w-[3.3rem] lg:h-[3.4rem] object-cover object-center scale-103"></img>
				<div className="w-full px-[0.2rem] lg:px-[0.24rem] py-[0.2rem] ">
					<header className="text-[0.28rem] leading-[0.28rem] lg:text-[0.4rem] lg:leading-[0.4rem] tracking-[-2%] text-nowrap">{name}</header>
					<p className="mt-[0.08rem] text-[0.12rem]">{role}</p>
				</div>
			</div>

		    <div className={`relative transition-all duration-300 rounded-0 lg:h-[2.6rem] min-w-full max-w-full bg-[#F7F7F7]/30 backdrop-blur-[16px] text-black pt-[0.16rem] lg:pt-[0.16rem] pb-[0.16rem] lg:pb-[0.32rem] px-[0.12rem] lg:px-[0.2rem] ${isHovered ? 'lg:top-[-2.6rem] z-10' : 'lg:top-0 '}`}>
		     	<header className="text-[0.28rem] lg:text-[0.4rem] font-bold tracking-[-2%]">{name}</header>
		     	<p className="uppercase text-[0.24rem] lg:text-[0.24rem] font-normal mt-[0.12rem] lg:mt-[0.12rem]">{title}</p>
				<p className="text-[0.16rem] lg:text-[0.16rem] font-normal mt-[0.32rem] lg:mt-[0.4rem]">{description}</p>
		    </div>
		</article>
	)
}

function OurTeamCard() {
	return (
		<div className="col-span-3 lg:col-span-2 flex flex-col pb-[0.32rem] lg:pr-[1.44rem]">
			<div className="flex sm:gap-[0.08rem] mb-[0.16rem] lg:mb-[0.08rem]">
				<span className="text-[0.48rem] leading-[0.48rem] lg:text-[1.68rem] lg:leading-[1.68rem] font-bold uppercase tracking-[-2%]">our</span>
				<span className="lg:hidden text-[0.48rem] leading-[0.48rem] lg:text-[1.68rem] lg:leading-[1.68rem] font-bold uppercase text-right tracking-[-2%]">team</span>
			</div>
			<p className="text-[0.16rem] lg:text-[0.16rem]">As a dynamic design company, we endow products with artistic power,</p>
			<p className="text-[0.16rem] lg:text-[0.16rem]">attract global enterprises, and redefine the future of products.</p>
			<p className="hidden lg:block lg:mt-[0.04rem] text-5xl leading-[48px] lg:text-[1.68rem] lg:leading-[1.68rem] font-bold uppercase text-right tracking-[-2%]">team</p>
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
// export { SiteInfoCard,  SiteFooter }


