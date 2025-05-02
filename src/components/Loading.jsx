export default function Loading() {
	return (
		<section className="mx-auto h-screen">
			<div className="h-11/12 grid content-center">	
				<div className="grid grid-cols-3 gap-20 items-center justify-between text-xl">
					<div className="uppercase justify-self-start">
						<p>Hop on,start </p>
						<p>a jourey with us!</p>
					</div>
					<div className="mx-auto relative">
						<p className="font-bold text-8xl">moto</p>
						<div className="absolute top-0 w-full h-full logo-progress bg-white"></div>
					</div>
					<div className="uppercase justify-self-end">
						<p>loading</p>
						<p>60%</p>
					</div>
				</div>
			</div>

			<div className="text-center">
				<p>Visual apocalypse</p>
				<p className="font-bold">Always trust our aesthetic</p>
			</div>
		</section>
	)
}