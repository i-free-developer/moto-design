import { useState } from 'react'
import arrowRight from '../assets/icons/arrow-right.svg'
import {timelineItems, perkItems, openningRoles} from '../data/career-data'
import {HowToApply} from './Career'


export default function RolePage() {
	const {title, roleTag, responsibilities, requirements, tags} = {...openningRoles[0]}
	return (
		<section id="" className="mx-auto px-[3rem] my-[3rem]">
			<div className="relative mt-[8rem]">
				<span className="rounded-full bg-slate-200 px-6 py-3">{roleTag}</span>
				<h1 className="mt-[3rem] text-5xl font-bold w-3/5">{title}</h1>
				<div className="flex flex-row items-center justify-between mt-[4rem]">
					<div>
						{tags.map((tag, index) => <span className="text-gray-600">{tag}</span>)}
					</div>
					<div className="flex items-center justify-between gap-[1rem] bg-slate-900 rounded-full px-6 py-2">
						<span className="text-white">Apply</span>
						<div className="bg-slate-100 flex items-center justify-center rounded-full -mr-4">
							<img src={arrowRight} alt="Arrow Right" className="w-8"></img>
						</div>
					</div>
				</div>
				<hr className="border border-2 border-slate-200 my-[6rem]"></hr>
			</div>
			<ContentSection title={'Responsibilities'} items={responsibilities}/>
			<ContentSection title={'Requirements'} items={requirements}/>
			<HowToApply/>
			<div className="my-[8rem]"></div>
		</section>
	)
}

function ContentSection({title, items}) {
	return (
		<ol className="list-decimal list-inside my-[4rem]">
			<header className="text-3xl font-bold my-[1rem]">{title}</header>
			{items.map((item, index) => <li key={index} className="my-[0.5rem]">{item}</li>)}
		</ol>
	)
}