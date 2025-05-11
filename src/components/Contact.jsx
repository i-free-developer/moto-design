import { useState } from 'react'

const placeHolders = ['Name', 'Roles*', 'Enter your email*', 'A brief introduction about your project', ]

const buttonContents = {
	0: ['Next'],
	1: ['Back', 'Next'],
	2: ['Back', 'Next'],
	3: ['Submit'],
}

export default function Contact() {
	return (
		<section id="contact-us" className="mx-auto px-[3rem] my-[3rem] min-h-[80rem] relative flex flex-col justify-between">
			<div className="overflow-hidden relative h-[12rem]">
				<div className="flex absolute scroll-header gap-[6rem]">
					<header className="text-[10rem] uppercase font-bold px-[2rem] text-nowrap">Pixels are the atomic units of design.</header>
					<header className="text-[10rem] uppercase font-bold px-[2rem] text-nowrap">Pixels are the atomic units of design.</header>
				</div>
			</div>
			<ContactBody/>
      <div className="mx-auto">
        <p className="text-center text-2xl py-[1rem]"> © 2025 Moto Design LLC. All rights reserved.</p>
      </div>
		</section>
	)
}

function ContactBody() {
	const [currentStep, setCurrentStep] = useState(0)

	function goBack() {
		setCurrentStep(currentStep - 1)
	}

	function goNext() {
		setCurrentStep(currentStep + 1)
	}

	function goSubmit() {
		setCurrentStep(currentStep + 1)
	}

	function getInTouch() {
		setCurrentStep(0)
	}

	console.log('currentStep ->', currentStep)

	return (
		<div className="absolute top-[6rem] left-[3rem] right-[3rem] h-[80%] border border-2 flex flex-col items-center justify-between backdrop-blur-sm bg-gray-100/40 rounded-xl">
			{currentStep >= 4 ? <SumbittedGroup/> : <FormGroup currentStep={currentStep} goBack={goBack} goNext={goNext} goSubmit={goSubmit} getInTouch={getInTouch}/> }
				<div className="flex items-center justify-center w-full px-[6rem] pb-[4rem]">
          <div className="w-full md:w-1/4 text-wrap">
						<p className="text-wrap">Thank you for your attention! Whether it's product consultation, cooperation invitations, or valuable suggestions, we will listen attentively.</p>
					</div>
					<ButtonGroups currentStep={currentStep} goBack={goBack} goNext={goNext} goSubmit={goSubmit} getInTouch={getInTouch}/>
          <div className="w-full md:w-1/4 text-right">
              <p>Email Address</p>
              <p>Hello@motodesign@.cn</p>
            </div>
          </div>
		</div>
	)
}

function ButtonGroups({currentStep, goBack, goNext, goSubmit, getInTouch}) {

	let btnGroups;
	if (currentStep === 0) {
		btnGroups = (<StepButton btnAction={goNext} btnText="Next"/>)
	} else if (currentStep === 1 || currentStep === 2) {
		btnGroups = (<><StepButton btnAction={goBack} btnText="Back"/><StepButton btnAction={goNext} btnText="Next"/></>)
	} else if (currentStep === 3) {
		btnGroups = (<StepButton btnAction={goSubmit} btnText="Submit"/>)
	} else {
		btnGroups = (<StepButton btnAction={getInTouch} btnText="Get in Touch Again"/>)
	}

	return	(
		<div className="mx-auto flex items-center justify-center grow gap-4">
			{btnGroups}
		</div>
	)
}

function StepButton({btnAction, btnText}) {
	return (
		<span className="rounded-full bg-slate-900 px-8 py-3 text-white text-2xl" onClick={btnAction}>{btnText}</span>
	)
}

function FormGroup({currentStep}) {
	const holderText = placeHolders[currentStep]
	return (
		<>
			<div className="flex flex-col mt-[6rem]">
				<header className="text-center text-3xl font-bold my-[2rem]">Please leave your information</header>
				<p className="text-center text-xl">we will response as soon as possible!</p>
			</div>
			<form className="mx-auto w-full md:w-1/3">
				<input autofocuse="true" type="text" className="appearance-none border border-2 border-slate-900 rounded-full px-8 py-8 text-gray-900 text-3xl focus:outline-none focus:border-slate-900 block w-full placeholder-gray-500" placeholder={holderText} required={true}></input>
				<div className="mx-auto flex mt-[1rem] gap-2 items-center justify-center">
					{ placeHolders.map((item, index) => <span className={`border border-2 w-8 ${ currentStep === index ? 'border-black' : 'border-gray-200'}`} key={index}></span>) }
				</div>
			</form>
		</>
	)
}

function SumbittedGroup() {
	return (
		<>
			<div className="flex flex-col mt-[6rem]">
				<header className="text-center text-3xl font-bold my-[2rem]">Successfully Submitted</header>
				<p className="text-center text-xl">We will provide you with feedback as soon as possible. Thank you for your patience!</p>
				<div className="mx-auto flex items-center gap-6 mt-[2rem]">
					<span className="bg-slate-900 size-12 rounded-full"></span>
					<span className="bg-slate-900 size-12 rounded-full"></span>
				</div>
				<div className="mx-auto uppercase font-bold">
					<CircleText/>
				</div>
			</div>
		</>
	)
}

function CircleText() {
	return (
    // w440 h260
		<svg  viewBox="0 0 600 400" width="600" height="300">
			<path id="circlePath" d="M100,200 A200,200 0 0,0 200,200" fill="#ccc" stroke="#ccc" strokeWidth="2"/>
      {/* <path id="circlePath" d="M100,0 a200 200 0 1 1 0 1" stroke="blue" strokeWidth="5" /> */}
      <text>
				<textPath href="#circlePath">Submitted already</textPath>
			</text>
		</svg>
	)
}

// `M0,${radius} A${radius},${radius} 0 0,0 ${diameter},${radius}`;
// `M0,${diameter},${radius} A${radius},${radius} 0 0 1 0,${radius}`;

{/* <path d="M300,300 a200,200 0 0,0 -200,200 z" fill="yellow" stroke="blue" stroke-width="5" /> */}
