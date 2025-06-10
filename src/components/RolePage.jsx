import { useState } from 'react'
import { useParams } from "react-router-dom";
import { OpenningRoles } from '../data/site-data'
import { HowToApply } from './Career'
import Navbar from './Navbar'
import { SiteInfoCard,  SiteFooter } from './About'
import { handleClickDrawer, closeDrawer } from './FunctionCollection'

export default function RolePage() {
	const [drawerStatus, setDrawerStatus] = useState('initial')
	const { id } = useParams();
	const {title, roleTag, tags, responsibilities, requirements} = OpenningRoles.find(e => e.id == id)

	return (
		<main className="mx-auto max-w-[750px] lg:max-w-[1920px]">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={() => {handleClickDrawer(drawerStatus, setDrawerStatus)} }/>
			<section id="role-page" className="mx-auto px-[1.5rem] lg:px-[3rem]" onClick={() => closeDrawer(drawerStatus, setDrawerStatus)}>
				<RoleHeaderCard roleTag={roleTag} title={title} tags={tags}/>
				<ContentSection title={'Responsibilities'} items={responsibilities}/>
				<ContentSection title={'Requirements'} items={requirements}/>
				<div className="my-[8rem]"></div>
				<HowToApply/>
				<div className="my-[8rem]"></div>
				<SiteInfoCard/>
				<SiteFooter/>
			</section>
		</main>
	)
}

function RoleHeaderCard({roleTag, title, tags}) {
	return (
		<div className="mt-[6rem] lg:mt-[8rem] mb-[6rem]">
			<span className="rounded-full text-xl font-medium bg-black/10 px-6 py-3">{roleTag}</span>
			<h1 className="mt-[1.5rem] lg:mt-[2.5rem] text-[2.5rem] lg:text-5xl font-semibold w-full lg:w-[73rem] tracking-[-2%]">{title}</h1>
			<div className="flex flex-row items-center mt-[2rem] lg:mt-[4rem] gap-2">
				{tags.map((tag, index) => <span className="text-xl lg:text-2xl font-medium tracking-[-2%]" key={index}>{tag}</span>)}
			</div>
			<hr className="border border-2 border-black/20 my-[6rem] lg:my-[8rem]"></hr>
		</div>
	)
}

function ContentSection({title, items}) {
	return (
		<ol className="list-decimal list-inside mt-[6rem] lg:mt-[8rem]">
			<header className="text-[2rem] font-bold mb-[2rem] tracking-[-2%]">{title}</header>
			{items.map((item, index) => <li key={index} className="text-xl  lg:text-2xl leading-[36px] lg:leading-[40px] font-normal my-[0.5rem] tracking-[-2%]">{item}</li>)}
		</ol>
	)
}