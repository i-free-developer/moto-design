import {ServicesItems, CompanyDomain} from '../data/site-data'

export default function Landing({showDrawer}) {
	return (
		<section className="h-[100vh] mx-auto relative text-black">
			<div className={`w-4/6 h-[90vh] min-h-[50rem] translate-y-4/12 ml-[8rem] ${showDrawer ? 'section-drawer-in' : 'section-drawer-out'}`}>
				<h1 className="uppercase text-9xl font-bold">Pixels are the atomic units of design.</h1>
			</div>
			<VerticalElement/>
			{!showDrawer && <ServiceOfferings/>}
		</section>
	)
}

function ServiceOfferings() {
	return (
		<div className="h-full">
			<hr className="border border-2 border-slate-200 w-full"></hr>
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

function VerticalElement() {
	return (
		<div className="absolute right-[3rem] top-[30%] flex gap-4 items-center text-black opacity-64"
			style={{writingMode: 'vertical-lr'}}>
			<span className="rotate-180">{CompanyDomain}</span>
			<span className="border border-2 border-black/64 h-[8rem]"></span>
		</div>
	)
}
