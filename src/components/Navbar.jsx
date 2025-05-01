import { useState } from 'react'

export default function Navbar({showDrawer, handleClickDrawer}) {
	const [langExpanded, setLangExpanded] = useState(false)
	
	return (
		<nav className="mx-auto flex justify-between items-center px-10 py-10">
			<div onClick={handleClickDrawer} className="size-[1.2rem]">{showDrawer ? <CloseIcon/> : <ThreeBars/>}</div>
			<div className="font-bold text-lg">MOTO</div>
			<div>
				<div className="flex items-center justify-center rounded px-4 py-4 relative" onClick={() => {setLangExpanded(!langExpanded)}}>
					<span className="font-bold">En</span>
					<span className="absolute left-[70%] top-[30%]">{langExpanded ? <ArrowDown/> : <ArrowUp />}</span>
					<div className={`absolute top-[60%] left-0 flex items-center justify-center rounded px-4 py-4 ${langExpanded ? '' : 'hidden'}`}>
						<span className="font-bold">Cn</span>
					</div>
				</div>
			</div>
			
		</nav>
	)
}

function ArrowUp() {
	return (
		<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 14-4-4-4 4"/>
		</svg>
	)
}

function ArrowDown() {
	return (
		<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"/>
		</svg>

	)
}

function ThreeBars() {
	return (
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
		</svg>
	)
}

function CloseIcon() {
	return (
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
		  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
		</svg>
	)
}