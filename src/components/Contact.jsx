export default function Contact() {
	return (
		<section id="contact-us" className="mx-auto px-[3rem] my-[3rem] relative">
			<div className="overflow-hidden relative h-[10rem]">
				<div className="flex absolute scroll-header gap-[8rem]">
					<header className="text-[8rem] uppercase font-bold px-[2rem] text-nowrap">Pixels are the atomic units of design.</header>
					<header className="text-[8rem] uppercase font-bold px-[2rem] text-nowrap">Pixels are the atomic units of design.</header>
				</div>
			</div>
			<ContactForm/>
		</section>
	)
}

function ContactForm() {
	return (
		<div className="absolute bottom-[2rem] left-[6rem] right-[6rem] min-h-full border border-2 z-20 items-center backdrop-blur-sm bg-gray-100/40 rounded-xl">
			<div className="flex flex-col mt-[4rem]">
				<header className="text-center text-3xl font-bold my-[2rem]">Please leave your information</header>
				<p className="text-center">we will response as soon as possible!</p>
				<form className="mx-auto my-[3rem]">
					<input autofocuse type="border border-2 border-slate-900 rounded-full p-6 text-gray-900 text-3xl focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="name@flowbite.com" required></input>
				</form>
			</div>
			<div className="flex"></div>
		</div>
	)
}