import { useState } from 'react'

import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import doubleArrowRight from '../assets/icons/double-arrow-right.svg'

const timelineItems = [
	{number: '01', title: 'Portfolio review'},
	{number: '02', title: 'Interviews'},
	{number: '03', title: 'Background investigation'},
	{number: '04', title: 'Round 2 interview'},
	{number: '05', title: 'Offer'},
]

const perkItems = [
	{number: '01', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
	{number: '02', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
	{number: '03', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
	{number: '04', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
	{number: '05', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
	{number: '06', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
	{number: '07', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
	{number: '08', title: 'Perks', subtitle: 'Flexible working hours', content: 'After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.'},
]

const openningRoles = [
	{team: 'MOTO  >  Design Department  >  WEB', title: 'Senior UI Designer / Full-time', tags: ['Full-time', 'On-site (ShenZhen)']},
	{team: 'MOTO  >  Design Department  >  WEB', title: 'Senior UI Designer / Full-time', tags: ['Full-time', 'On-site (ShenZhen)']},
	{team: 'MOTO  >  Design Department  >  WEB', title: 'Senior UI Designer / Full-time', tags: ['Full-time', 'On-site (ShenZhen)']},
	{team: 'MOTO  >  Design Department  >  WEB', title: 'Senior UI Designer / Full-time', tags: ['Full-time', 'On-site (ShenZhen)']},
	{team: 'MOTO  >  Design Department  >  WEB', title: 'Senior UI Designer / Full-time', tags: ['Full-time', 'On-site (ShenZhen)']},
]

export default function Career() {
	return (
		<section id="career" className="mx-auto px-[3rem] my-[2rem] flex flex-col gap-8 max-w-screen">
			<h1 className="font-bold text-4xl uppercase mt-[8rem]">[Career]</h1>
			<div className="flex items-center justify-between">
				<h2 className="font-bold text-6xl uppercase">How we hire</h2>
				<div className="px-8 py-4 border rounded-full flex gap-4 items-center justify-between">
					<span>Positions</span>
					<span className="size-2 rounded-[50%] bg-slate-900"></span>
				</div>
			</div>
			<div className="flex items-center my-[6rem]">
				<div className="flex items-center w-1/5 gap-4">
					<img src={arrowLeft} alt="Arrow Left" className="size-12"></img>
					<img src={doubleArrowRight} alt="Arrow Right" className="size-12"></img>
				</div>
				<p className="w-1/4 text-xl">After the portfolio meets our requirement, on average 1~3 week interview process with 2 inteviews.</p>
			</div>

			<div className="flex items-center min-w-full my-[6rem]">
				{timelineItems.map(item => <TimeLineItem {...item} key={item.number} />)}
			</div>

			<div className="mx-auto px-[4rem]">
				<h2 className="font-bold text-6xl uppercase text-center my-[2rem]">Life at moto</h2>
				<p className="text-center text-xl">We believe great design is borderless, and so are the minds behind it.</p>
				<p className="text-center text-xl">We’re not everywhere — but we think like we are.</p>
			</div>
			
			<Perks/>
			<Roles/>
			<HowToApply/>
		</section>
	)
}

function TimeLineItem({number, title}) {
	return (
		<div className="flex flex-col relative gap-8 grow">
			<div className="">
				<span className="absolute left-0 right-0 border border-2"></span>
				<span className="absolute left-0 -top-1.5 size-4 border rounded-[50%] bg-slate-900"></span>
			</div>
			<div className="flex items-end gap-2">
				<span className="font-bold text-3xl">{number}</span>
				<span className="">{title}</span>
			</div>
		</div>
	)
}

function Perks() {
	return (
		<div className="mx-auto flex max-w-screen flex-nowrap my-[4rem]">
			{perkItems.map((item, index) => <PerkItem {...item} index={index} key={item.number}/>)}
		</div>
	)
}

function PerkItem({number, title, subtitle, content, index}) {
	return (
		<div className={`perk-card p-[1rem] bg-white border border-2 shrink-0 ${index === 0 ? '' : '-ml-[18rem]'}`}>
			<div className="flex items-center justify-between gap-[2rem] mb-[18rem]">
				<div className="flex flex-col">
					<span className="font-bold">{number}</span>
					<span className="font-bold">Q</span>
				</div>
				<span className="font-bold text-6xl">{title}</span>
			</div>
			<div>
				<header className="font-bold text-3xl mb-[1rem]">{subtitle}</header>
				<p className="w-[28rem]">{content}</p>
			</div>
		</div>
	)
}

function Roles() {
	return (
		<div className="grid grid-cols-2">
			<div className="pr-[3rem] w-4/5">
				<h3 className="uppercase">join our team</h3>
				<p className="font-bold text-6xl uppercase mt-[2rem] mb-[4rem]">find your perfect role</p>
				<p className="">Explore our open roles and find the one that fits not just your resume, but your rhythm.</p>
				<p className="text-2xl mt-[6rem] font-bold"><span className="text-3xl mr-2">13</span>Positions</p>
			</div>
			<div className="flex flex-col gap-8">
				{openningRoles.map((item, index) => <RoleCard {...item} index={index} key={index}/>)}
			</div>
		</div>
	)
}

function RoleCard({team, title, tags, index}) {
	return (
		<article className="relative flex flex-col gap-4 px-[1rem]">
			{index === 0 &&  <hr className="border border-2 border-slate-200 mb-[1rem]"></hr> }
			<header className="font-bold text-lg">{team}</header>
			<p className="text-4xl font-light">{title}</p>
			<div className="flex flex-row items-center gap-2 mt-[1rem]">
				{tags.map((tag, index) => <span className="text-gray-600">{tag}</span>)}
			</div>
			<hr className="border border-2 border-slate-200 mt-[2rem]"></hr>
			
			<div className="absolute right-[1rem] bottom-[2rem] flex items-center justify-between gap-[1rem] bg-slate-900 rounded-full px-6 py-2">
				<span className="text-white">Apply</span>
				<div className="bg-slate-100 flex items-center justify-center rounded-full -mr-4">
					<img src={arrowRight} alt="Arrow Right" className="w-8"></img>
				</div>
			</div>
		</article>
	)
}

function HowToApply() {
	return (
		<div className="">
			<h2 className="uppercase font-bold text-6xl mt-[4rem]">how to apply</h2>
			<p className="mt-[3rem] text-xl">Send your CV and portfolio to <span className="font-bold">(Hello@motodesign.cn)</span>, with the subject "<span className="font-bold">Position + Name</span>".</p>
			<p className="text-xl">We’re not just hiring doers—we’re looking for partners in creation.</p>
			<p className="text-xl my-[3rem]">*File Types: ( pdf, ppt, pptx, txt )</p>
		</div>
	)
}




