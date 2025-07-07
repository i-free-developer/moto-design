import { useState, useCallback } from 'react'
import { CopyRight, CompanyEmail } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon } from './SocialIconsCollection'
import { useDrawerHandler } from './FunctionCollection'

const SelectOptions = ['Website Design', 'App UI/UX Design', 'Full Brand VI System', 'Graphic Design', '3D Animation & Visual Effects', 'Web3 Strategy Consulting', 'NFT Artwork & Design', 'Social Media Visuals', 'Brand Partnership', 'Other']

export default function Contact({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto min-w-screen max-w-screen overflow-x-hidden">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} />
			<section id="contact-us" className="mx-auto relative max-w-full lg:max-w-full pt-[0.4rem] lg:pt-0" onClick={closeDrawer}>
				<PixelsHeader/>
				<ContactContainer isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
	      <CopyRightCard/>
			</section>
		</main>
	)
}

function PixelsHeader() {
	return (
		<div className="mx-0 lg:mx-[0.16rem] my-auto overflow-hidden relative h-[1.28rem] lg:h-[2.2rem] flex will-change-transform">
			<div className="absolute top-0 left-0 w-full h-full m-auto flex items-center justify-start whitespace-nowrap">
				<div className="scroll-header flex">
					<span className="inline-block text-[1.28rem] leading-[1.28rem] lg:text-[2.2rem] lg:leading-[2.2rem] uppercase font-bold text-nowrap mx-[0.24rem]">Pixels are the atomic units of design.</span>
					<span className="inline-block text-[1.28rem] leading-[1.28rem] lg:text-[2.2rem] lg:leading-[2.2rem] uppercase font-bold text-nowrap mx-[0.24rem]" aria-hidden>Pixels are the atomic units of design.</span>
				</div>
			</div>
		</div>
	)
}

function ContactContainer({isMobileDevice, smallScreenRatioDecimal}) {
	const [displayCard, setDisplayCard] = useState(false)
	function handleDisplayCard() { if (displayCard) {setDisplayCard(false)} }
	const [isSubmitted, setIsSubmitted] = useState(false)

	return (
		<div onClick={handleDisplayCard} className="relative mx-[0.32rem] lg:mx-[0.64rem] mt-[-0.64rem] lg:mt-[-1.1rem] px-[0.4rem] lg:px-[0.56rem] min-h-[12.2rem] h-[calc(100vh-0.4rem-1.28rem-0.64rem)] lg:min-h-[9.28rem] lg:h-[calc(100vh-1.74rem-0.98rem)] backdrop-blur-sm bg-gray-100/40 rounded-[0.24rem] lg:rounded-[0.3rem]">
			<div className="mx-auto flex flex-col justify-between items-center h--[calc(100vh-5rem)] lg:h--[calc(100vh-2.88rem)]">
				<FormHeader isSubmitted={isSubmitted}/>
				<FormBody displayCard={displayCard} setDisplayCard={setDisplayCard} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>
      		</div>
      		<div className="absolute bottom-[0.32rem] lg:bottom-[0.32rem] left-[0.32rem] lg:left-[0.32rem] w-[50%] lg:w-[40%]"><ThankYouCard/></div>
			<div className="absolute bottom-[0.32rem] lg:bottom-[0.32rem] right-[0.32rem] lg:right-[0.32rem] w-[40%] lg:w-[30%] flex items-center justify-end"><ContactEmailCard/></div>
		</div>
	)
}

function FormBody({displayCard, setDisplayCard, isSubmitted, setIsSubmitted,  isMobileDevice, smallScreenRatioDecimal}) {
	const { callApi, loading } = useFakeApi();
	const [userName, setUserName] = useState('')
	const [userRole, setUserRole] = useState('')
	const [teamData, setTeamData] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [isDisabled, setIsDisabled] = useState(false)

	const setFormField = (field, value) => {
		// console.log('field: ',field, 'value: ', value)
		if (field == 'name') {setUserName(value)}
		if (field == 'role') {setUserRole(value)}
		if (field == 'email') {setUserEmail(value)}
		if (field == 'team') {setTeamData(value)}
		// setIsDisabled(!(!!userName && !!userRole && !!teamData && !!userEmail))
	}

	const handleSubmit = (e) => {
	    e.preventDefault(); // Prevent page reload
		const form = e.target;
	    const formData = new FormData(form);
	    // fetch('/some-api', { method: form.method, body: formData });
	    const formJson = Object.fromEntries(formData.entries());
	    // console.log(formJson);
		goSubmit(formJson)
	}
	const goSubmit = async (data) => {
	    // console.log('Submitted name:', data);
	    try {
	    	const result = await callApi({ data: data });
	      	console.log(result);
	      	setIsSubmitted(true)
	    } catch (err) {
	      	console.error(err);
	    }
	}

	if (isSubmitted) {
		return (<SumbittedGroup isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal} setIsSubmitted={setIsSubmitted}/>)
	} else {
		return (
			<form id="contact-form" className="mx-auto w-full lg:w-[14.2rem] mt-[0.96rem] lg:mt-[1.28rem] h--[1.28rem] lg:h--[2.56rem] flex flex-col gap-[0.2rem]" onSubmit={handleSubmit}>
				<div className="text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full lg:flex lg:items-center lg:flex-nowrap">
					<div className="flex items-center">
						<span className="">Hi there, &nbsp;I’m</span>
						<span className="grow lg:w-[4.8rem] ml-[0.12rem] border-b-[1.5px] border-black/40 flex justify-center items-stretch"><input autoComplete="off" name="name" value={userName} onChange={e => setFormField('name', e.target.value)} className="border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="Enter your name*"></input></span>
					</div>
					<div className="mt-[0.2rem] lg:mt-0 flex items-center">
						<span className="">and work as</span>
						<span className="grow lg:w-[4.4rem] ml-[0.12rem] border-b-[1.5px] border-black/40 flex justify-center"><input autoComplete="off" name="role" value={userRole} onChange={e => setFormField('role', e.target.value)} className="border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="Your role in the team*"></input></span>
					</div>
				</div>

				<div className="text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full flex items-center flex-wrap lg:flex-nowrap">
					<span className="mt-[0.2rem] lg:mt-0 ">I’m looking for a creative team to help  with</span>
					<span className="mt-[0.2rem] lg:mt-0 grow relative lg:w-[6rem] lg:ml-[0.12rem] border-b-[1.5px] border-black/40 flex justify-center items-center">
						<input onClick={() => setDisplayCard(!displayCard)} autoComplete="off" name="team" value={teamData} onChange={e => {}} className="cursor-pointer border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="What type of service are you looking for?"></input>
						<span className={`${ displayCard ? 'text-black' : 'text-black/40'}`}><ArrIcons/></span>
						<SelectCard displayCard={displayCard} setTeamData={setTeamData} setFormField={setFormField}/>
					</span>
				</div>

				<div className="mt-[0.2rem] lg:mt-0 text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full flex items-center flex-wrap lg:flex-nowrap">
					<span className="">The goal is to make it real — with precision and purpose.</span>
				</div>

				<div className="mt-[0.2rem] lg:mt-0 text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full flex items-center justify-start flex-wrap lg:flex-nowrap">
					<div className="flex items-center justify-start w-full lg:w-[55%]">
						<span className="">Hit my inbox at</span>
						<span className="grow lg:grow-0 lg:w-[4.8rem] ml-[0.12rem] border-b-[1.5px] border-black/40 flex items-center justify-center"><input autoComplete="off" name="email" value={userEmail} onChange={e => setFormField('email', e.target.value)} className="border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="Enter your email*" type="email"></input></span>
					</div>
					<div className="mt-[0.2rem] lg:mt-0 flex items-center lg:flex-nowrap text-nowrap">
						<span className=""><span className="hidden lg:inline-block">, &nbsp;</span>let's build something bold!</span>
					</div>
				</div>
				<div className="mx-auto mt-[1.08rem] lg:mt-[0.98rem]">
					<button disabled={isDisabled} className="text-[0.32rem] font-medium px-[0.32rem] py-[0.08rem] rounded-full text-white bg-black/50">{loading ? 'Submiting...' : 'Submit'}</button>
				</div>
			</form>
		)
	}
}

function SelectCard({displayCard, setTeamData, setFormField}) {
	const [selectedItems, setSelectedItems] = useState([])
	function handleSelectedItem(e) {
		e.preventDefault(); e.stopPropagation();
		const item = e.target.dataset.item
		let newArr = Array.from(selectedItems);
		let itemExisted = newArr.find(x => x == item)
		itemExisted ? newArr = newArr.filter(x => x != item) : newArr.push(item)
	  setSelectedItems(newArr);
	  setFormField('team', newArr.join(', '))
	}
	return (
		<div onClick={e => {e.preventDefault(); e.stopPropagation()}} className={`${displayCard ? '' : 'hidden'} z-10 absolute right-0 top-[0.42rem] bg-black py-[0.28rem] pl-[0.28rem] pr-[0.25rem] lg:pr-[0.68rem] w-[4.36rem] lg:w-[6rem] flex items-center gap-[0.12rem] flex-wrap text-[0.16rem] font-medium`}>
			{SelectOptions.map((item, index) => <span className={`${selectedItems.includes(item) ? 'bg-white text-black' : 'bg-black text-white'} px-[0.16rem] py-[0.02rem] border rounded-full`} data-item={item} key={index} onClick={handleSelectedItem}>{item}</span>)}
		</div>
	)
}

function FormHeader({isSubmitted}) {
	let textHeader, textBody;
	if (isSubmitted) { textHeader = 'Successfully Submitted', textBody = (<div className="flex flex-wrap items-center justify-center"><span>We will provide you with feedback as soon as possible.</span><span>Thank you for your patience!</span></div>)}
	else { textHeader = 'Please leave your information', textBody = (<p>we will response as soon as possible!</p>)}

	return (
		<div className="mx-auto flex flex-col mt-[1.68rem] lg:mt-[1.92rem] font-medium text-center">
			<header className="text-[0.32rem] lg:text-[0.32rem]">{textHeader}</header>
			<div className=" mx-auto text-[0.16rem] lg:text-[0.16rem] text-black/64 mt-[0.08rem] lg:mt-[0.12rem]">{textBody}</div>
		</div>
	)
}

function SumbittedGroup({isMobileDevice, smallScreenRatioDecimal, setIsSubmitted}) {
	return (
		<div className="mx-auto w-full mt-[1.28rem] lg:mt-[1.08rem] h--[1.92rem] lg:h--[2.8rem] flex flex-col items-center justify-between lg:scale-90">
			<div className="mx-auto flex items-center justify-center h-[2.34rem] w-[3.95rem] lg:h-[2.8rem] lg:w-[4.6rem]">
				<img src="/submitted-already.png" alt="Submitted Already" className="object-fit object-center"></img>
			</div>
			<div className="mx-auto mt-[2.38rem] lg:mt-[1.08rem]">
				<span onClick={e => {setIsSubmitted(false)}} className="text-[0.32rem] font-medium px-[0.32rem] py-[0.08rem] rounded-full bg-black text-white">Get in Touch Again</span>
			</div>
		</div>
	)
}

function ThankYouCard() {
	return (
		<div className="w-full lg:w-content text-nowrap relative">
			<p className="text-wrap text-[0.12rem] lg:text-[0.16rem] font-medium">Thank you for your attention!</p>
			<p className="text-wrap text-[0.12rem] lg:text-[0.16rem] font-medium">Whether it's product consultation,</p>
			<p className="text-wrap text-[0.12rem] lg:text-[0.16rem] font-medium">cooperation invitations, or valuable suggestions,</p>
			<p className="text-wrap text-[0.12rem] lg:text-[0.16rem] font-medium">we will listen attentively.</p>
    		<div className="absolute left-0 top-[-0.32rem] lg:top-[-0.64rem]">{<StarIcon/>}</div>
		</div>
	)
}

function ContactEmailCard() {
	return (
		<div className="w-full my-auto text-right font-medium">
      		<p className="text-[0.12rem] lg:text-[0.16rem]">Email Address</p>
      		<p className="text-[0.14rem] lg:text-[0.28rem]">{CompanyEmail}</p>
    	</div>
	)
}

function CopyRightCard() {
	return (
		<div className="w-full h-[0.64rem] flex items-center justify-center">
			<p className="text-center text-black/50 text-[0.12rem] font-medium">{CopyRight}</p>
		</div>
	)
}

function ArrIcons() {
	return (
		<svg width="6" height="12" viewBox="0 0 6 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<g opacity="1">
				<path d="M3 12L5.59808 7.5H0.401924L3 12Z" fill="currentColor"/>
				<path d="M3 0L5.59808 4.5H0.401924L3 0Z" fill="currentColor"/>
			</g>
		</svg>
	)
}

const useFakeApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = useCallback(async (mockData, shouldFail = false) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (shouldFail) throw new Error('Mock API failure');
      return mockData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { callApi, loading, error };
};
