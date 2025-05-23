import { TeamMembers } from '../data/site-data'

export default function About({closeDrawer}) {
	return (
		<section id="about" className="mx-auto px-[3rem] my-[3rem]" onClick={closeDrawer}>
			<div className="grid grid-cols-4 items-center gap-6">
			<OurTeam />
			{TeamMembers.map((item, index) => <TeamMemberCard {...item} key={index} />)}
			</div>
		</section>
	)
}

function TeamMemberCard({name, avatar, description, title, role}) {
	return (
		<article className="group border border-4 rounded-[1.4rem] perspective-distant h-[33rem] bg-transparent">
		  <div className="relative h-full w-full transition-transform duration-1300 transform-3d group-hover:rotate-y-180">

		    <div className="rounded-[1.2rem] absolute inset-0 flex h-full w-full flex-col justify-between backface-hidden">
          		<img src={avatar} className="block w-[26-rem] h-[26rem] object-cover object-center rounded-t-[1.2rem]"></img>
				<div className="grid content-center px-[1.5rem] h-[5.5rem] grow">
					<div className="flex items-center justify-between font-normal">
						<header className="text-[2.5rem] tracking-[-2%]">{name}</header>
						<p className="text-right text-xs">{role}</p>
					</div>
				</div>
		    </div>

		    <div className="rounded-[1.2rem] absolute inset-0 max-h-full min-h-full w-full bg-black text-white p-[2.5rem] rotate-y-180 backface-hidden">
		     	<header className="text-[4rem] font-bold tracking-[-2%]">{name}</header>
		     	<p className="uppercase text-[1.5rem] font-normal mt-[1.5rem]">{title}</p>
				<p className="text-base font-normal mt-[4rem]">{description}</p>
		    </div>
		  </div>
		</article>
	)
}

function OurTeam() {
	return (
		<div className="col-span-2 flex flex-col gap-8 w-4/5">
			<p className="text-[10.5rem] font-bold uppercase">our</p>
			<p className="text-base">As a dynamic design company, we endow products with artistic power, attract global enterprises, and redefine the future of products.</p>
			<p className="text-[10.5rem] font-bold uppercase text-right">team</p>
		</div>
	)
}

