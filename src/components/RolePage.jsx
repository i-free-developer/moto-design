import { useParams } from "react-router-dom";
import { OpenningRoles } from '../data/site-data'
import { HowToApply } from './Career'
import Navbar from './Navbar'
import { SiteInfoCard,  SiteFooter } from './About'
import { useDrawerHandler } from './FunctionCollection'

export default function RolePage({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const { id } = useParams();
	const {title, roleTag, tags, responsibilities, requirements} = OpenningRoles.find(e => e.id == id)

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="role-page" className="mx-auto" onClick={closeDrawer}>
				<div className="w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] mx-auto px-[0.32rem] lg:px-[0.48rem] lg:mt-[1.28rem] lg:mb-[0.48rem]">
					<RoleHeaderCard roleTag={roleTag} title={title} tags={tags}/>
					<ContentSection title={'Responsibilities'} items={responsibilities}/>
					<ContentSection title={'Requirements'} items={requirements}/>
					<div className="my-[1.28rem] lg:my-[1.6rem]"></div>
					<HowToApply/>
					<div className="my-[1.28rem] lg:my-[2.88rem]"></div>
				</div>
				
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice}/>
			</section>
		</main>
	)
}

function RoleHeaderCard({roleTag, title, tags}) {
	return (
		<div className="my-[0.32rem] lg:my-[0.96rem]">
			<span className="rounded-full text-[0.2rem] lg:text-[0.2rem] font-medium bg-black/10 px-[0.24rem] lg:px-[0.24rem] py-[0.14rem] lg:py-[0.14rem]">{roleTag}</span>
			<h1 className="mt-[0.24rem] lg:mt-[0.4rem] text-[0.4rem] lg:text-[0.48rem] font-semibold w-full lg:w-[11.7rem] tracking-[-2%]">{title}</h1>
			<div className="flex flex-row items-center mt-[0.32rem] lg:mt-[0.64rem] gap-[0.02rem]">
				{tags.map((tag, index) => <span className="text-[0.2rem] lg:text-[0.24rem] font-medium tracking-[-2%]" key={index}>{tag}</span>)}
			</div>
			<hr className="border border-2 border-black/20 my-[0.96rem] lg:my-[1.6rem]"></hr>
		</div>
	)
}

function ContentSection({title, items}) {
	return (
		<ol className="list-decimal list-inside mt-[1.28rem] lg:mt-[1.28rem]">
			<header className="text-[0.32rem] lg:text-[0.32rem] font-bold mb-[0.64rem] lg:mb-[0.32rem] tracking-[-2%]">{title}</header>
			{items.map((item, index) => <li key={index} className="text-[0.2rem] lg:text-[0.24rem] leading-[0.36rem] lg:leading-[0.4rem] font-normal my-[0.08rem] lg:my-[0.08rem] tracking-[-2%]">{item}</li>)}
		</ol>
	)
}