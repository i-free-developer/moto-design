import { Link } from "react-router-dom"
import { TimelineItems, PerkItemsData, OpenningRoles, CompanyEmail } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon, ArrowIcon } from './SocialIconsCollection'
import { SiteInfoCard,  SiteFooter } from './Footer'
import { useDrawerHandler, useHoverHandler } from './FunctionCollection'

export default function Career({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="career" className="mx-auto pt-[0.32rem] lg:pt-[0.48rem] lg:mt-[1.28rem] lg:mb-[0.48rem]" onClick={closeDrawer}>
				<div className="px-[0.32rem] lg:px-[0.48rem] mx-auto w-screen max-w-screen lg:max-w-[1920px] overflow-x-hidden">
					<CareerHeader/>
					<CareerContenr/>
				</div>
				<div className="mx-auto w-screen w-screen max-w-screen lg:px-[0.48rem] mt-[0.8rem] lg:mt-[1.48rem] overflow-x-hidden">
					<TimeLineCard/>
				</div>
				<div className="mx-auto w-screen max-w-screen mt-[2.16rem] lg:mt-[2.8rem] overflow-x-hidden">
					<LifeAtMotoCard/>
				</div>

				<div className="mx-auto w-screen max-w-screen mt-[0.8rem] lg:mt-[1.6rem] overflow-x-hidden">
					<PerksContainer/>
				</div>

				<div className="px-[0.32rem] lg:px-[0.48rem] lg:mb-[2.88rem] mx-auto w-screen max-w-screen lg:max-w-[1920px] overflow-x-hidden">
					<RolesContainer/>
					<div className="mt-[2.16rem] mb-[1.66rem] lg:mb-0 lg:mt-[2.8rem]"></div>
					<HowToApply/>
				</div>
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</section>
		</main>
	)
}

function CareerHeader() {
	return (
		<div className="relative my-[0.64rem] lg:mt-0 lg:px-[0.16rem]">
			<h1 className="font-extrabold text-[0.48rem] lg:text-[0.8rem] uppercase">[Career]</h1>
			<h2 className="font-extrabold text-[0.88rem] lg:text-[1.28rem] uppercase">How we hire</h2>
			<div className="flex items-center justify-between mt-[0.32rem] lg:mt-0">
				<span className="lg:hidden"><ArrowGroupImg/></span>
				<span className="lg:absolute lg:bottom-[0.48rem] lg:right-0"><PositionBtn/></span>
			</div>
			<span className="absolute top-0 right-0 lg:right-[0.16rem] lg:scale-160"><StarIcon/></span>
		</div>
	)
}

function PositionBtn() {
	function scrollToPositions() { document.querySelector('#positions').scrollIntoView({ behavior: 'smooth', block: 'start' }) }
	return (
		<div className="px-[0.24rem] py-[0.12rem] lg:py-[0.16rem] border border-2 rounded-full flex gap-[0.16rem] items-center justify-between cursor-pointer" onClick={scrollToPositions}>
			<span className="font-medium text-[0.2rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.24rem]">Positions</span>
			<span className="size-[0.08rem] rounded-[50%] bg-slate-900"></span>
		</div>
	)
}

function CareerContenr() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center my-[1.68rem] lg:mt-[1.28rem]">
			<span className="hidden lg:block"><ArrowGroupImg/></span>
			<p className="lg:ml-[10.06rem] text-black/64 font-normal w-[74%] lg:w-[4.8rem] text-[0.24rem] leading-[0.24rem] lg:text-[0.24rem] lg:leading-[0.36rem] tracking-[-2%]">After the <span className="font-bold text-black">portfolio</span> meets our requirement, on average <span className="font-bold text-black">1~3 week</span> interview process with <span className="font-bold text-black">2 inteviews</span>.</p>
		</div>
	)
}

function TimeLineCard() {
	return (
		<div className="flex items-center flex-nowrap px-[0.16rem] lg:px-[0.5rem] py-[0.32rem] lg:py-[0.16rem] overflow-x-auto">
			{TimelineItems.map((item, index) => <TimeLineElement {...item} key={item.id} isEven={index % 2 === 0} isLastItem={index === (TimelineItems.length - 1)}/>)}
		</div>
	)
}

function LifeAtMotoCard() {
	return (
		<div className="mx-auto w-full text-center scroll-fade-in">
			<h2 className="font-bold text-[0.48rem] lg:text-[0.8rem] uppercase lg:my-[0.4rem]">Life at moto</h2>
			<p className="text-[0.16rem] lg:text-[0.24rem] lg:leading-[0.32rem] font-normal">We believe great design is borderless, and so are the minds behind it.</p>
			<p className="text-[0.16rem] lg:text-[0.24rem] lg:leading-[0.32rem] font-normal">We’re not everywhere — but we think like we are.</p>
		</div>
	)
}

function TimeLineElement({id, title, isEven, isLastItem}) {
	const {isHovered, setIsHovered} = useHoverHandler();

	return (
		<div className="flex flex-col grow min-w-content text-black/40 hover:text-black hover:cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-[0.24rem] leading-[0.24rem] lg:text-[0.28rem] lg:leading-[0.36rem] translate-x-[-0.06rem]">{id}</span>
			<div className="flex items-center mt-[0.12rem] mb-[0.32rem] h-[0.4rem] relative text-black">
				<span className={`w-full ${isEven ? 'h-[0.4rem]' : 'h-[0.2rem]'} border-l-1 lg:border-l-2 ${isLastItem ? 'border-r-1 lg:border-r-2 h-[0.4rem]' : ''}`}></span>
				<span className="absolute w-full border-t-1 lg:border-t-2 bottom-[0.2rem] lg:bottom-[0.19rem] translate-y--[-0.69rem] lg:translate-y--[-0.77rem]"></span>
				<span className={`absolute rounded-full border-[0.1rem] flex items-center justify-center left-[-0.13rem] ${isHovered ? 'block' : 'hidden'}`}>
					<span className="size-[0.08rem] bg-white rounded-full"></span>
				</span>
			</div>
			<span className="text-[0.16rem] leading-[0.16rem] lg:text-[0.24rem] lg:leading-[0.24rem] translate-x-[-0.06rem]">{title}</span>
		</div>
	)
}

function PerksContainer() {
	return (
		<div className="mx-auto flex items-center overflow-x-scroll">
			<div className="mx-auto whitespace-nowrap flex flex-nowrap">
				{PerkItemsData.map((item, index) => <PerkCard {...item} index={index} key={item.number}/>)}
			</div>
		</div>
	)
}

function PerkCard({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card hover:cursor-pointer transition-transform duration-300 size-[4rem] lg:size-[4.8rem] pt-[0.24rem] lg:pt-[0.28rem] pb-[0.4rem] px-[0.32rem] bg-[#f7f7f7] border border-2 border-[#000000] shrink-0 ${index === 0 ? '' : 'ml-[-2.72rem] lg:ml-[-2.74rem]'}`}>
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<span className="font-normal text-[0.2rem] tracking-[-2%]">{number}</span>
					<span className="font-bold mt-[0.1rem]"><PerkIcon iconName={number}/></span>
				</div>
				<span className="font-bold text-[0.72rem] lg:text-[0.8rem] tracking-[-2%]">{title}</span>
			</div>
			<div className="mt-[1.6rem] lg:mt-[1.8rem] max-w-full">
				<header className="font-semibold text-[0.24rem] lg:text-[0.32rem] tracking-[-2%] text-wrap">{subtitle}</header>
				<p className="mt-[0.2rem] lg:mt-[0.24rem] overflow-hidden text-clip lg:text-wrap text-[0.14rem] font-normal tracking-[-2%]">{content}</p>
			</div>
		</div>
	)
}

function PerkIcon({ iconName }) {
  return <img src={`/perk-${iconName}.png`} alt={iconName} className="size-[0.24rem] object-cover object-center"/>;
}

function RolesContainer() {
	return (
		<div className="mt-[2.16rem] lg:mt-[2.8rem] lg:mb-[2.8rem] grid grid-cols-1 lg:grid-cols-2">
			<div className="lg:w-[6.48rem] tracking-[-2%] scroll-fade-in">
				<h3 className="uppercase font-bold text-[0.2rem] leading-[0.2rem] lg:text-[0.24rem] lg:leading-[0.32rem]">join our team</h3>
				<p className="uppercase font-bold text-[0.48rem] leading-[0.48rem] lg:text-[0.8rem] lg:leading-[0.96rem] mt-[0.48rem] lg:mt-[0.16rem]">find your perfect role</p>
				<p className="text-[0.16rem] leading-[0.16rem] lg:text-[0.2rem] lg:leading-[0.28rem] mt-[0.12rem] lg:mt-[0.72rem] font-normal">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-[0.32rem] lg:text-[0.36rem] mt-[1.28rem] lg:mt-[2.4rem] font-bold scroll-fade-in"><span className="mr-[0.02rem]">13</span>Positions</p>
			</div>
			<div id="positions" className="mt-[0.8rem] lg:mt-0 flex flex-col gap-[0.08rem]">
				{OpenningRoles.map((item, index) => <RoleCard {...item} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, tags, index, id}) {
	return (
		<article className="lg:w-[8.8rem] tracking-[-2%] scroll-fade-in">
			{index === 0 &&  <hr className="border border-[0.8px] lg:border-1 border-black/20 mb-[0.48rem] lg:w-[8.8rem]"></hr> }
			<header className="font-bold text-[0.16rem] lg:text-[0.2rem]">{team}</header>
			<div className="relative">
				<p className="text-[0.32rem] lg:text-[0.32rem] font-normal mt-[0.24rem] lg:mt-[0.24rem]">{title}</p>
				<div className="flex flex-row items-center gap-[0.02rem] mt-[0.48rem] lg:mt-[0.48rem]">
					{tags.map((tag, index) => <span className="text-[0.16rem] lg:text-[0.2rem] font-medium text-black opacity-40" key={index}>{tag}</span>)}
				</div>
				<hr className="border border-[0.8px] lg:border-1 border-black/20 my-[0.48rem] w-full lg:w-[8.8rem]"></hr>
				<ApplyButon id={id}/>
			</div>
		</article>
	)
}

function ApplyButon({id}) {
	const {isHovered, setIsHovered} = useHoverHandler();

	return (
		<Link to={`/role/${id}`} className="will-change-transform absolute bottom-[0.4rem] lg:bottom-[0.4rem] right-0 flex items-center justify-between gap-[0.24rem] lg:gap-[0.16rem] bg-slate-900 rounded-full pl-[0.24rem] py-[0.06rem] lg:py-[0.04rem] pr-[0.04rem]"
			onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="text-white font-medium text-[0.2rem] lg:text-[0.24rem]">Apply</span>
			<div className={`bg-white size-[0.24rem] lg:size-[0.4rem] flex items-center justify-center rounded-full scale-15 transition duration-300 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>
		</Link>
	)
}

export function HowToApply() {
	return (
		<div className="tracking-[-2%] w-full mx-auto">
			<h2 className="uppercase font-bold text-[0.48rem] lg:text-[0.8rem] lg:leading-[0.8rem]">how to apply</h2>
			<p className="mt-[0.48rem] lg:mt-[0.48rem] text-[0.2rem] leading-[0.24rem] lg:text-[0.28rem] lg:leading-[0.4rem]">Send your CV and portfolio to <span className="font-bold">({CompanyEmail})</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-[0.2rem] leading-[0.24rem] lg:text-[0.28rem] lg:leading-[0.4rem]">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-[0.2rem] leading-[0.24rem] lg:text-[0.28rem] lg:leading-[0.4rem] my-[0.24rem] lg:my-[0.4rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
		</div>
	)
}


function ArrowGroupImg() {
	return (
		<img className="h-[0.17rem] object-cover object-center" src="/arrow-group.png"></img>
	)
}
