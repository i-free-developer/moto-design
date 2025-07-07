import { StarIcon } from './SocialIconsCollection'
import '../assets/animations.css';

export default function Loading({loadingPercentage}) {
	return (
		<section id="loading" className="mx-auto max-w-[750px] lg:max-w-[1920px] lg:h-dvh overflow-hidden">
			<div className="lg:px-[0.56rem] lg:h-full pt-[2rem] lg:pt-0 lg:m-auto lg:flex lg:flex-row items-center justify-between">
				<LeftCard/>
				<LogoAnimationCard loadingPercentage={loadingPercentage}/>
				<LoadingPercentageCard loadingPercentage={loadingPercentage}/>
			</div>
			<BottomCard/>
		</section>
	)
}

function LeftCard() {
	return (
		<div className="uppercase lg:justify-self-start mx-auto lg:mx-0 text-center lg:text-left font-medium text-[0.2rem] lg:text-[0.2rem] text-black/64">
			<p>Hop on,start</p>
			<p>a jourey with us!</p>
		</div>
	)
}

function LogoAnimationCard({loadingPercentage}) {
	let percentage = Math.min(loadingPercentage, 100)
	return (
		<div className={`mx-auto lg:translate-x-[-15%] mt-[2.8rem] lg:mt-0 w-[425px] h-[103px]`}>
			<div className={`h-full border bg-black logo-masked`} style={{width: `${percentage}%`, maxWidth: '100%'}}></div>
		</div>
	)
}

function LoadingPercentageCard({loadingPercentage}) {
	return (
		<div className="mx-auto lg:mx-0 mt-[0.6rem] lg:mt-0 flex gap-[0.2rem] lg:gap-0 lg:flex-col uppercase justify-center lg:justify-self-end lg:text-right font-medium text-[0.2rem] lg:text-[0.2rem] text-black/64">
			<p>loading</p>
			<p><span className="">{loadingPercentage}</span>%</p>
		</div>
	)
}

function BottomCard() {
	return (
		<div className="mt-[6rem] lg:mt-0 lg:translate-y-[-180%] mx-auto text-center text-[0.16rem] font-medium">
			<div className="mx-auto flex items-center justify-center"><StarIcon/></div>
			<p className="text-black/64 mt-[0.32rem] lg:mt-[0.24rem]">Visual apocalypse</p>
			<p >Always trust our aesthetic</p>
		</div>
	)
}
