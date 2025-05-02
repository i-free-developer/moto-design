import { useState } from 'react'

export default function Landing({showDrawer}) {
	return (
		<section className="pt-10 pb-20 relative h-[95vh]">
			<h1 className={`uppercase text-8xl mt-[8%] font-bold mx-50 max-width-full ${showDrawer ? 'section-drawer-in' : 'section-drawer-out'}`}>Pixels are the atomic units of design.</h1>
		</section>
	)
}