import { ServicesItems, CompanyDomain } from '../data/site-data'
const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}
const serviceClasses = {initial: '', opened: 'horizontal-bar-out', closed: 'horizontal-bar-in'}

export default function Home({drawerStatus, closeDrawer}) {
	const headerClassName = headerClasses[drawerStatus]
	const serviceClassName = serviceClasses[drawerStatus]
	return (
		<section id="landing" className="mx-auto h-screen text-black relative" onClick={closeDrawer}>
			<div className="min-h-[calc(100vh-14rem)] relative flex flex-col justify-center">
				<div className={`w-4/6 ml-[8rem] ${headerClassName}`}>
					<h1 className="uppercase text-9xl font-bold">Pixels are the atomic units of design.</h1>
				</div>
				<VerticalElement headerClassName={headerClassName}/>
			</div>
			<ServiceOfferings serviceClassName={serviceClassName}/>
		</section>
	)
}

function ServiceOfferings({serviceClassName}) {
	return (
		<div className={`absolute left-0 bottom-[10rem] w-full ${serviceClassName}`}>
			<hr className="border border-2 border-black/40 w-full"></hr>
			<div className="mx-auto w-full flex items-center justify-between mt-[1.5rem] px-[3rem] text-xl">
				<div className="flex items-center justify-around gap-4">
					<span className="font-bold uppercase">Service Offerings:</span>
					{ServicesItems.map((item, index) => <span className="opacity-64" key={index}>{item}</span>)}
				</div>
				<div>
					<button className="bg-black px-6 py-3 flex items-center gap-4 text-[#f7f7f7] rounded-full">See What We’ve  Made<span className="size-[6px] bg-white rounded-full"></span></button>
				</div>
			</div>
		</div>
	)
}

function VerticalElement({headerClassName}) {
	return (
		<div className="absolute right-[3rem] top-0 h-full flex flex-col items-center justify-center">	
			<div className={`flex gap-4 items-center text-black/64 ${headerClassName}`} style={{writingMode: 'vertical-lr'}}>
				<span className="rotate-180">{CompanyDomain}</span>
				<span className="border border-2 border-black/64 h-[8rem]"></span>
			</div>
		</div>
	)
}