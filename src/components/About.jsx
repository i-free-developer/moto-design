const teamMembers = [
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
	{name: 'Eilven', avatar: 'https://images.unsplash.com/photo-1744023238070-062811b3a702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D', description: 'Eilven is the founder of our company and an outstanding designer'},
]

export default function About() {
	return (
		<section id="about" className="mx-auto px-[3rem] my-[3rem]">
			<div className="grid grid-cols-4 items-center gap-6">
			<OurTeam />
			{teamMembers.map((item, index) => <TeamMember {...item} key={index} />)}
			</div>
			
		</section>
	)
}

function TeamMember({name, avatar, description}) {
	return (
		<article className="group border border-2 rounded-md perspective-distant h-[30rem] w-full bg-transparent">
		  <div className="relative h-full w-full text-center pb-6 transition-transform duration-1300 transform-3d group-hover:rotate-y-180">
		    
		    <div className="rounded-[inherit] absolute inset-0 flex h-full w-full flex-col justify-between backface-hidden">
			    <img src={avatar} className="block w-full h-[24rem] object-cover object-center"></img>
				<div className="flex items-center justify-between p-6">
					<header className="text-lg font-bold">{name}</header>
					<p className="text-right text-sm">{description}</p>
				</div>
		    </div>

		    <div className="rounded-[inherit] absolute inset-0 h-full w-full flex flex-col p-[2rem] gap-[3rem] text-center rotate-y-180 backface-hidden">
		     	<header className="text-5xl font-bold">{name}</header>
				<p className="text-xl">{description}</p>
		    </div>
		  </div>
		</article>
	)
}

function OurTeam() {
	return (
		<div className="col-span-2 flex flex-col gap-8 pl-4 py-4 pr-24">
			<p className="text-8xl font-bold uppercase">our</p>
			<p className="text-lg">As a dynamic design company, we endow products with artistic power, attract global enterprises, and redefine the future of products.</p>
			<p className="text-8xl font-bold uppercase text-right">team</p>
		</div>
	)
}

