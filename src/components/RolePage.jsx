import { useParams } from "react-router-dom";
import { OpenningRoles } from '../data/site-data'
import { HowToApply } from './Career'
import Navbar from './Navbar'
import { SiteInfoCard,  SiteFooter } from './Footer'
import { useDrawerHandler } from './FunctionCollection'

export default function RolePage({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const { id } = useParams();
	const roleItem = OpenningRoles.find(e => e.id == id)
	// const {title, roleTag, tags, responsibilities, requirements} = OpenningRoles.find(e => e.id == id)

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="role-page" className="mx-auto w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] overflow-x-hidden" onClick={closeDrawer}>
				<div className="mx-auto px-[0.32rem] lg:px-[0.48rem]">
					<RoleHeaderCard {...roleItem}/>
					<ContentSection title={'Responsibilities'} items={roleItem.responsibilities}/>
					<ContentSection title={'Requirements'} items={roleItem.requirements}/>
					<div className="mt-[2.16rem] lg:mt-[2.6rem]"></div>
					<HowToApply/>
					<div className="mt-[1.98rem] lg:mt-[2.88rem]"></div>
				</div>
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
			</section>
		</main>
	)
}

function RoleHeaderCard({roleTag, title, tags, fullTime, onSite, isRemote}) {
	return (
		<div className="">
			<span className="rounded-full text-[0.2rem] lg:text-[0.2rem] font-medium bg-black/10 px-[0.24rem] lg:px-[0.24rem] py-[0.12rem] lg:py-[0.12rem]">{roleTag}</span>
			<h1 className="mt-[0.28rem] lg:mt-[0.4rem] text-[0.4rem] lg:text-[0.64rem] leading-[0.48rem] lg:leading-[0.68rem] font-semibold tracking-[-2%]">{title}</h1>
			<h2 className="text-[0.4rem] lg:text-[0.64rem] leading-[0.48rem] lg:leading-[0.68rem] font-semibold tracking-[-2%]">{fullTime}&nbsp;/&nbsp;{onSite}</h2>
			<div className="flex flex-row items-center gap-[0.08rem] mt-[0.56rem] lg:mt-[0.64rem] gap-[0.02rem] text-[0.2rem] lg:text-[0.24rem] font-medium tracking-[-2%]">
				<span>{fullTime}</span>
				<span>{onSite}</span>
				<span>{isRemote}</span>
			</div>
			<hr className="border border-1 lg:border-2 border-black/20 mt-[1.28rem] lg:mt-[1.6rem]"></hr>
		</div>
	)
}

function ContentSection({title, items}) {
	return (
		<div className="list-decimal list-inside mt-[0.96rem]">
			<header className="text-[0.32rem] lg:text-[0.32rem] font-bold mb-[0.4rem] tracking-[-2%]">{title}</header>
			<ol>
				{items.map((item, index) => <li key={index} className="text-[0.2rem] lg:text-[0.24rem] leading-[0.36rem] lg:leading-[0.4rem] font-normal my-[0.08rem] lg:my-[0.08rem] tracking-[-2%]">{item}</li>)}
			</ol>
		</div>
	)
}