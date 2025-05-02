import { useState } from 'react'

export default function Landing({showDrawer}) {
	return (
		<section className="h-[95vh] grid place-items-center">
			<div className={`w-4/5 ${showDrawer ? 'section-drawer-in' : 'section-drawer-out'}`}>
				<h1 className="uppercase text-8xl font-bold">Pixels are the atomic units of design.</h1>
			</div>
		</section>
	)
}