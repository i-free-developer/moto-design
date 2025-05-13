import {OpenningRoles} from '../data/site-data'
import {HowToApply} from './Career'


export default function RolePage() {
	const {title, roleTag, responsibilities, requirements, tags} = {...OpenningRoles[0]}
	return (
		<section id="" className="mx-auto px-[6rem]">
			<div className="relative mt-[13.5rem] mb-[6rem]">
				<span className="rounded-full text-xl font-medium bg-black/10 px-6 py-3">{roleTag}</span>
				<h1 className="mt-[2.5rem] text-5xl font-semibold w-[73rem] tracking-[-2%]">{title}</h1>
				<div className="flex flex-row items-center justify-between mt-[4rem]">
					<div>
						{tags.map((tag, index) => <span className="text-2xl font-medium tracking-[-2%]" key={index}>{tag}</span>)}
					</div>
				</div>
				<hr className="border border-2 border-black/20 my-[8rem]"></hr>
			</div>
			<ContentSection title={'Responsibilities'} items={responsibilities}/>
			<ContentSection title={'Requirements'} items={requirements}/>
			<div className="my-[8rem]"></div>
			<HowToApply/>
			<div className="my-[8rem]"></div>
		</section>
	)
}

function ContentSection({title, items}) {
	return (
		<ol className="list-decimal list-inside mt-[8rem]">
			<header className="text-[2rem] font-bold mb-[2rem] tracking-[-2%]">{title}</header>
			{items.map((item, index) => <li key={index} className="text-2xl font-normal my-[0.5rem] tracking-[-2%]">{item}</li>)}
		</ol>
	)
}
