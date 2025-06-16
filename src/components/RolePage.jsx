import { useState } from 'react'
import { useParams } from "react-router-dom";
import { OpenningRoles } from '../data/site-data'
import { HowToApply } from './Career'
import Navbar from './Navbar'
import { SiteInfoCard,  SiteFooter } from './About'
import { useDrawerHandler, useScreenRatio } from './FunctionCollection'

export default function RolePage() {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const { id } = useParams();
	const {title, roleTag, tags, responsibilities, requirements} = OpenningRoles.find(e => e.id == id)
	const {isMobileDevice, smallScreenRatioDecimal} = useScreenRatio()

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer}/>
			<section id="role-page" className="w-screen max-w-screen lg:min-w-[1920px] lg:max-w-[1920px] mx-auto px-[0.32rem] lg:px-[3rem] pt-[0.32rem] lg:pt-[3rem] lg:mt-[8rem] lg:mb-[3rem]" onClick={closeDrawer}>
				<RoleHeaderCard roleTag={roleTag} title={title} tags={tags}/>
				<ContentSection title={'Responsibilities'} items={responsibilities}/>
				<ContentSection title={'Requirements'} items={requirements}/>
				<div className="my-[1.28rem] lg:my-[8rem]"></div>
				<HowToApply/>
				<div className="my-[1.28rem] lg:my-[8rem]"></div>
				<SiteInfoCard isMobileDevice={isMobileDevice}/>
				<SiteFooter isMobileDevice={isMobileDevice}/>
			</section>
		</main>
	)
}

function RoleHeaderCard({roleTag, title, tags}) {
	return (
		<div className="my-[0.32rem] lg:mt-[8rem] lg:mb-[6rem]">
			<span className="rounded-full text-[0.2rem] lg:text-xl font-medium bg-black/10 px-[0.24rem] lg:px-6 py-[0.14rem] lg:py-3">{roleTag}</span>
			<h1 className="mt-[0.24rem] lg:mt-[2.5rem] text-[0.4rem] lg:text-5xl font-semibold w-full lg:w-[73rem] tracking-[-2%]">{title}</h1>
			<div className="flex flex-row items-center mt-[0.32rem] lg:mt-[4rem] gap-[0.02rem] lg:gap-2">
				{tags.map((tag, index) => <span className="text-[0.2rem] lg:text-2xl font-medium tracking-[-2%]" key={index}>{tag}</span>)}
			</div>
			<hr className="border border-2 border-black/20 my-[0.96rem] lg:my-[8rem]"></hr>
		</div>
	)
}

function ContentSection({title, items}) {
	return (
		<ol className="list-decimal list-inside mt-[1.28rem] lg:mt-[8rem]">
			<header className="text-[0.32rem] lg:text-[2rem] font-bold mb-[0.64rem] lg:mb-[2rem] tracking-[-2%]">{title}</header>
			{items.map((item, index) => <li key={index} className="text-[0.2rem] lg:text-2xl leading-[0.36rem] lg:leading-[40px] font-normal my-[0.08rem] lg:my-[0.5rem] tracking-[-2%]">{item}</li>)}
		</ol>
	)
}