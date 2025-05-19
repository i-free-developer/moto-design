import Loading from './Loading'
import Navbar from './Navbar'
import { ServicesItems, CompanyDomain } from '../data/site-data'
const headerClasses = {initial: '', opened: 'section-drawer-in', closed: 'section-drawer-out'}
const serviceClasses = {initial: '', opened: 'horizontal-bar-out', closed: 'horizontal-bar-in'}

export default function Home({drawerStatus, closeDrawer, loadingPercentage, handleClickDrawer}) {
	const headerClassName = headerClasses[drawerStatus]
	const serviceClassName = serviceClasses[drawerStatus]
	if (loadingPercentage <= 100) {
		return <Loading loadingPercentage={loadingPercentage}/>
	} else {
		return (
			<main className="mx-auto h-screen">
      			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer}/>
				<HomeSection headerClassName={headerClassName} serviceClassName={serviceClassName} closeDrawer={closeDrawer}/>
			</main>
		)
	}
}

function HomeSection({headerClassName, serviceClassName, closeDrawer}) {
	return (
		<section id="landing" className="mx-auto text-black relative" onClick={closeDrawer}>
			<div className="h-[calc(100vh-9rem)] relative">
				<div className={`w-4/6 ml-[8rem] translate-y-1/2 ${headerClassName}`}>
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
		<div className={`absolute left-0 bottom-0 w-full ${serviceClassName}`}>
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