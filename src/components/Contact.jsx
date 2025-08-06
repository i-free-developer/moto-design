import { useState, useCallback, useEffect } from 'react'
import { CopyRight, ApiPath } from '../data/site-data'
import Navbar from './Navbar'
import { StarIcon, ArrowOnlyIcon, MobileArrowBtn } from './SocialIconsCollection'
import { useDrawerHandler, useHoverHandler } from './FunctionCollection'
import { EmailCard } from './Footer'

const SelectOptions = ['Website Design', 'App UI/UX Design', 'Full Brand VI System', 'Graphic Design', '3D Animation & Visual Effects', 'Web3 Strategy Consulting', 'NFT Artwork & Design', 'Social Media Visuals', 'Brand Partnership', 'Other']

export default function Contact({isMobileDevice, smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()

	return (
		<main className="mx-auto min-w-screen max-w-screen overflow-x-hidden">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} />
			<section id="contact-us" className="mx-auto relative max-w-full pt-[0.4rem] lg:pt-0" onClick={closeDrawer}>
				<PixelsHeader/>
				<ContactContainer isMobileDevice={isMobileDevice}/>
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

function ContactContainer({isMobileDevice}) {
	const [displayCard, setDisplayCard] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false) // true
	function handleDisplayCard() { if (displayCard) {setDisplayCard(false)} }

	return (
		<div onClick={handleDisplayCard} className="relative mx-[0.32rem] lg:mx-[0.64rem] mt-[-0.64rem] lg:mt-[-1.1rem] px-[0.4rem] lg:px-[0.56rem] min-h-[12.2rem] h-[calc(100vh-0.4rem-1.28rem-0.64rem)] lg:min-h-[9.28rem] lg:h-[calc(100vh-1.74rem-0.98rem)] backdrop-blur-sm bg-gray-100/40 rounded-[0.24rem] lg:rounded-[0.3rem]">
			<div className="mx-auto flex flex-col justify-between items-center h--[calc(100vh-5rem)] lg:h--[calc(100vh-2.88rem)]">
				<FormHeader isSubmitted={isSubmitted}/>
				<FormBody displayCard={displayCard} setDisplayCard={setDisplayCard} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} isMobileDevice={isMobileDevice}/>
      		</div>
      		<div className="absolute bottom-[0.32rem] lg:bottom-[0.32rem] left-[0.32rem] lg:left-[0.32rem] w-[50%] lg:w-[40%]"><ThankYouCard/></div>
			<div className="absolute bottom-[0.32rem] lg:bottom-[0.32rem] right-[0.32rem] lg:right-[0.32rem] w-[40%] lg:w-[30%] flex items-center justify-end"><ContactEmailContainer/></div>
		</div>
	)
}

function FormBody({displayCard, setDisplayCard, isSubmitted, setIsSubmitted, isMobileDevice}) {
	// const { callApi, loading } = useFakeApi(); //useFakeApi();
	const { callApi, loading } = usePostApi(); //useFakeApi();
	const [userName, setUserName] = useState('')
	const [userRole, setUserRole] = useState('')
	const [teamData, setTeamData] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [isDisabled, setIsDisabled] = useState(true)
	const [formIsValid, setFormIsValid] = useState(false)
	const [emailIsValid, setEmailIsValid] = useState(true)
	const [nameIsValid, setNameIsValid] = useState(true)
	const [roleIsValid, setRoleIsValid] = useState(true)
	const [teamIsValid, setTeamIsValid] = useState(true)
	const {isHovered, setIsHovered} = useHoverHandler();

	const handleFormFieldChange = (field, value) => {
		// console.log('field: ',field, 'value: ', value)
		if (field == 'name') {setUserName(value); setNameIsValid(value.length >= 0); setFormIsValid(userEmail.length > 0 && (value.length > 0) && userRole.length > 0 && teamData.length > 0)}
		if (field == 'role') {setUserRole(value); setRoleIsValid(value.length >= 0); setFormIsValid(userEmail.length > 0 && (value.length > 0) && userName.length > 0 && teamData.length > 0)}
		if (field == 'team') {setTeamData(value); setTeamIsValid(value.length >= 0); setFormIsValid(userEmail.length > 0 && (value.length > 0) && userRole.length > 0 && userName.length > 0)}
		if (field == 'email') {let emailValid = validateEmail(value); setUserEmail(value); setEmailIsValid(emailValid); setFormIsValid(emailValid && userRole.length > 0 && userName.length > 0 && teamData.length > 0)}

	}

	const handleFormFieldFocus = (field, value) => {
		return
		if (field == 'name') {setNameIsValid(value.length > 0); setFormIsValid(userEmail.length && (value.length > 0) && userRole.length > 0 && teamData.length > 0)}
		if (field == 'role') {setRoleIsValid(value.length > 0); setFormIsValid(userEmail.length && (value.length > 0) && userName.length > 0 && teamData.length > 0)}
		if (field == 'team') {setTeamIsValid(value.length > 0); setFormIsValid(userEmail.length && (value.length > 0) && userRole.length > 0 && userName.length > 0)}
		if (field == 'email') {let emailValid = validateEmail(value); setUserEmail(value); setEmailIsValid(emailValid); setFormIsValid(emailValid && userRole.length > 0 && userName.length > 0 && teamData.length > 0)}
	}

	const handleFormFieldBlur = (field, value) => {
		if (field == 'name') {value ? setNameIsValid(value.length > 0) : setNameIsValid(true); setFormIsValid(userEmail.length > 0 && (value.length > 0) && userRole.length > 0 && teamData.length > 0)}
		if (field == 'role') {value ? setRoleIsValid(value.length > 0) : setRoleIsValid(true); setFormIsValid(userEmail.length > 0 && (value.length > 0) && userName.length > 0 && teamData.length > 0)}
		if (field == 'team') {value ? setTeamIsValid(value.length > 0) : setTeamIsValid(true); setFormIsValid(userEmail.length > 0 && (value.length > 0) && userRole.length > 0 && userName.length > 0)}
		if (field == 'email') {let emailValid = validateEmail(value); setUserEmail(value); value ? setEmailIsValid(emailValid) : setEmailIsValid(true); setFormIsValid(emailValid && userRole.length > 0 && userName.length > 0 && teamData.length > 0)}
	}

	function handleFinalCheck(e) {
	    e.preventDefault(); // Prevent page reload
		setNameIsValid(userName.length > 0); setEmailIsValid(validateEmail(userEmail)); setRoleIsValid(userRole.length > 0); setTeamIsValid(teamData.length > 0)
		if (formIsValid) {handleSubmit(e)}
	}

	function validateEmail(email) {
	  if (!email) {return false}
	  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { return false }
	  // Additional checks
	  if (email.length > 254) {return false}
	  if (email.split('@')[0].length > 64) {return false}
	  return true ; // Valid email
	}

	const handleSubmit = (e) => {
	    e.preventDefault(); // Prevent page reload
		const form = document.querySelector('form') //e.target;
	    const formData = new FormData(form);
	    // fetch('/some-api', { method: form.method, body: formData });
	    const formJson = Object.fromEntries(formData.entries());
	    console.log(formJson);
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
		return (<SumbittedGroup setIsSubmitted={setIsSubmitted} isMobileDevice={isMobileDevice}/>)
	} else {
		return (
			<form id="contact-form" className="mx-auto w-full lg:w-[14.2rem] mt-[0.96rem] lg:mt-[1.28rem] h--[1.28rem] lg:h--[2.56rem] flex flex-col gap-[0.2rem]">
				<div className="text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full lg:flex lg:items-center lg:flex-nowrap">
					<div className="flex items-center">
						<span className="">Hi there, &nbsp;I’m</span>
						<span className={`${ nameIsValid ? 'border-black/40 ' : 'border-[#FF0000]'} grow lg:w-[4.8rem] ml-[0.12rem] border-b-[1.5px] flex justify-center items-stretch`}>
							<input autoComplete="off" name="name" value={userName} onChange={e => handleFormFieldChange('name', e.target.value)} onBlur={e => handleFormFieldBlur('name', e.target.value)} onFocus={e => handleFormFieldFocus('name', e.target.value)}
							className="border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="Enter your name*"></input>
						</span>
					</div>
					<div className="mt-[0.2rem] lg:mt-0 flex items-center">
						<span className="">and work as</span>
						<span className={`${ roleIsValid ? 'border-black/40 ' : 'border-[#FF0000]'} grow lg:w-[4.4rem] ml-[0.12rem] border-b-[1.5px] flex justify-center`}>
							<input autoComplete="off" name="role" value={userRole} onChange={e => handleFormFieldChange('role', e.target.value)} onBlur={e => handleFormFieldBlur('role', e.target.value)} onFocus={e => handleFormFieldFocus('role', e.target.value)}
							className="border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="Your role in the team*"></input>
						</span>
					</div>
				</div>

				<div className="text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full flex items-center flex-wrap lg:flex-nowrap">
					<span className="mt-[0.2rem] lg:mt-0 ">I’m looking for a creative team to help  with</span>
					<span className={`${ teamIsValid ? 'border-black/40 ' : 'border-[#FF0000]'} mt-[0.2rem] lg:mt-0 grow relative lg:w-[6rem] lg:ml-[0.12rem] border-b-[1.5px] flex justify-center items-center`}>
						<input onClick={() => setDisplayCard(!displayCard)} autoComplete="off" name="service" value={teamData} onChange={e => {}} onBlur={e => handleFormFieldBlur('team', e.target.value)} onFocus={e => handleFormFieldFocus('team', e.target.value)}
							className="cursor-pointer border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="What type of service are you looking for*"></input>
						<span className={`${ displayCard ? 'text-black' : 'text-black/40'}`}><ArrIcons/></span>
						<SelectCard displayCard={displayCard} setTeamData={setTeamData} handleFormFieldChange={handleFormFieldChange}/>
					</span>
				</div>

				<div className="mt-[0.2rem] lg:mt-0 text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full flex items-center flex-wrap lg:flex-nowrap">
					<span className="">The goal is to make it real — with precision and purpose.</span>
				</div>

				<div className="mt-[0.2rem] lg:mt-0 text-[0.36rem] leading-[0.36rem] lg:text-[0.4rem] lg:leading-[0.4rem] font-medium w-full flex items-center justify-start flex-wrap lg:flex-nowrap">
					<div className="flex items-center justify-start w-full lg:w-[55%]">
						<span className="">Hit my inbox at</span>
						<span className={`${ emailIsValid ? 'border-black/40 ' : 'border-[#FF0000]'} grow lg:grow-0 lg:w-[4.8rem] ml-[0.12rem] border-b-[1.5px] flex items-center justify-center`}>
							<input autoComplete="off" name="email" value={userEmail} onChange={e => handleFormFieldChange('email', e.target.value)} onBlur={e => handleFormFieldBlur('email', e.target.value)} onFocus={e => handleFormFieldFocus('email', e.target.value)}
								className="border-none w-full text-center placeholder:text-center h-[0.32rem] text-[0.16rem] leading-[0.16rem]" placeholder="Enter your email*" type="email"></input>
							</span>
					</div>
					<div className="mt-[0.2rem] lg:mt-0 flex items-center lg:flex-nowrap text-nowrap">
						<span className=""><span className="hidden lg:inline-block">, &nbsp;</span>let's build something bold!</span>
					</div>
				</div>
				<div className="mx-auto mt-[1.08rem] lg:mt-[0.98rem]">
					{isMobileDevice ? <ButtonMobile formIsValid={formIsValid} loading={loading} handleFinalCheck={handleFinalCheck}/> : <ButtonDeskstop formIsValid={formIsValid} loading={loading} handleFinalCheck={handleFinalCheck}/>}
				</div>
			</form>
		)
	}
}

function ButtonMobile({formIsValid, loading, handleFinalCheck}) {
	return (
		<button onClick={handleFinalCheck} className={`${ !formIsValid ? 'bg-black/50' : 'bg-black'} cursor-pointer text-[0.32rem] font-medium pl-[0.32rem] pr-[0.08rem] py-[0.08rem] rounded-full text-white flex items-center justify-center`}>
			{loading ? 'Submitting...' : 'Submit'}
			<span className="size-[0.48rem] bg-white rounded-full flex items-center justify-center ml-[0.2rem]"><MobileArrowBtn/></span>
		</button>
	)
}

function ButtonDeskstop({formIsValid, loading, handleFinalCheck}) {
	const {isHovered, setIsHovered} = useHoverHandler();

	return (
		<button onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleFinalCheck}
			className={`${ !formIsValid ? 'bg-black/50' : 'bg-black'} cursor-pointer text-[0.32rem] font-medium pl-[0.32rem] pr-[0.08rem] py-[0.08rem] rounded-full text-white flex items-center`}>
			{loading ? 'Submitting...' : 'Submit'}
			{/* <div className={`ml-[0.12rem] lg:ml-[0.08rem] bg-white size-[0.48rem] lg:size-[0.48rem] flex items-center justify-center rounded-full scale-15 transition duration-300 hover:scale-100 ${isHovered ? 'scale-100' : ''}`}><ArrowIcon/></div>		 */}
			<div className={`relative size-[0.5rem] ml-[0.12rem] flex items-center justify-center rounded-full`}>
				<span className={`absolute rounded-full border border-white bg-white size-[0.08rem] transition duration-300 ${isHovered ? 'scale-600' : ''}`}></span>
				<span className={`transition duration-300 ${isHovered ? 'scale-100' : 'scale-0'}`}><ArrowOnlyIcon/></span>
			</div>
		</button>
	)
}

function SelectCard({displayCard, setTeamData, handleFormFieldChange}) {
	const [selectedItems, setSelectedItems] = useState([])
	function handleSelectedItem(e) {
		e.preventDefault(); e.stopPropagation();
		const item = e.target.dataset.item
		let newArr = Array.from(selectedItems);
		let itemExisted = newArr.find(x => x == item)
		itemExisted ? newArr = newArr.filter(x => x != item) : newArr.push(item)
	  setSelectedItems(newArr);
	  handleFormFieldChange('team', newArr.join(', '))
	}
	return (
		<div onClick={e => {e.preventDefault(); e.stopPropagation()}} className={`${displayCard ? '' : 'hidden'} z-10 absolute right-0 top-[0.42rem] bg-black py-[0.28rem] pl-[0.28rem] pr-[0.25rem] lg:pr-[0.68rem] w-[4.36rem] lg:w-[6rem] flex items-center gap-[0.12rem] flex-wrap text-[0.16rem] font-medium`}>
			{SelectOptions.map((item, index) => <span className={`${selectedItems.includes(item) ? 'bg-[#F1F1F1] text-black' : 'bg-black text-[#F1F1F1]'} px-[0.16rem] py-[0.02rem] border border-[#F1F1F1]/40 hover:border-[#F1F1F1] rounded-full cursor-pointer`} data-item={item} key={index} onClick={handleSelectedItem}>{item}</span>)}
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

function SumbittedGroup({setIsSubmitted, isMobileDevice}) {
	return (
		<div className="mx-auto w-full mt-[1.28rem] lg:mt-[1.08rem] h--[1.92rem] lg:h--[2.8rem] flex flex-col items-center justify-between lg:scale-91">
			<div className="mx-auto flex items-center justify-center h--[2.34rem] w--[3.95rem] h-[2.8rem] w-[4.6rem]">
				{/* <img src={SubmittedImg} alt="Submitted Already" className="object-fit object-center"></img> */}
				<span><SubmittedIconDesktop/></span>
			</div>
			<div className="mx-auto mt-[2.935rem] lg:mt-[0.98rem]">
				{isMobileDevice ? <SubmittedBtnMobile setIsSubmitted={setIsSubmitted}/> : <SubmittedBtnDesktop setIsSubmitted={setIsSubmitted}/>}
			</div>
		</div>
	)
}

function SubmittedBtnMobile({setIsSubmitted}) {
	return (
		<button onClick={e => {setIsSubmitted(false)}}
			className="cursor-pointer text-[0.32rem] font-medium pl-[0.32rem] pr-[0.1rem] gap-[0.1rem] py-[0.08rem] min-h-[0.48rem] flex items-center justify-between rounded-full bg-black text-white">
			<span>Get in Touch Again</span>
			<div className={`relative size-[0.48rem] flex items-center justify-center rounded-full transition duration-300`}>
				<span className="absolute rounded-full border border-white bg-white size-[0.1rem] transition duration-300 scale-460"></span>
				<span className="scale-100"><ArrowOnlyIcon/></span>
			</div>
		</button>
	)
}

function SubmittedBtnDesktop({setIsSubmitted}) {
	const {isHovered, setIsHovered} = useHoverHandler();
	return (
		<button onClick={e => {setIsSubmitted(false)}} onMouseEnter={() => setIsHovered(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
				className="cursor-pointer text-[0.32rem] font-medium pl-[0.32rem] pr-[0.1rem] gap-[0.1rem] py-[0.08rem] min-h-[0.48rem] flex items-center justify-between rounded-full bg-black text-white">
			<span>Get in Touch Again</span>
			<div className={`relative size-[0.48rem] flex items-center justify-center rounded-full transition duration-300`}>
				<span className={`absolute rounded-full border border-white bg-white size-[0.1rem] transition duration-300 ${isHovered ? 'scale-460' : ''}`}></span>
				<span className={`transition duration-300 ${isHovered ? 'scale-110' : 'scale-0'}`}><ArrowOnlyIcon/></span>
			</div>
		</button>
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

function ContactEmailContainer() {
	return (
		<div className="w-full my-auto text-right font-medium">
      		<p className="text-[0.12rem] lg:text-[0.16rem]">Email Address</p>
      		<p className="text-[0.14rem] lg:text-[0.28rem]"><EmailCard/></p>
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

function SubmittedIconDesktop() {
 	const designedBigWidth = 1920
	const designedSmallWidth = 750
	const [iconRatio, setIconRatio] = useState(1.0)

	useEffect(() => {
		function setRatio() {
			const windowWidth = document.documentElement.clientWidth;
			if (windowWidth <= designedSmallWidth) {
				let rSmall = parseFloat((windowWidth / designedSmallWidth).toFixed(2))
				setIconRatio(rSmall)
			} else if (windowWidth <= designedBigWidth) {
				let rBig = parseFloat((windowWidth / designedBigWidth).toFixed(2))
				setIconRatio(rBig)
			} else {
				setIconRatio(1.0)
			}
		}
		setRatio()
		window.addEventListener('load', setRatio)
	    window.addEventListener('resize', setRatio)
	    window.addEventListener('pageshow', setRatio)

	    return () => {
	      window.removeEventListener('load', setRatio);
	      window.removeEventListener('resize', setRatio);
	      window.removeEventListener('pageshow', setRatio);
	    }
	}, [])

	return (
		<svg style={{ transform: `scale(${iconRatio})`}} width="460" height="280" viewBox="0 0 460 280" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M166 12C183.673 12 198 26.3269 198 44C198 61.6731 183.673 76 166 76C148.327 76 134 61.6731 134 44C134 26.3269 148.327 12 166 12ZM278 12C295.673 12 310 26.3269 310 44C310 61.6731 295.673 76 278 76C260.327 76 246 61.6731 246 44C246 26.3269 260.327 12 278 12Z" fill="#161619"/>
			<path d="M439.335 49.9253L400.227 65.7226L400.332 54.3631L430.19 43.9201L430.155 47.7599L400.499 36.3638L400.606 24.9243L439.404 42.4856L439.335 49.9253ZM455.075 60.792L430.305 48.8013L439.404 42.4856L455.178 49.6725L455.075 60.792Z" fill="black"/>
			<path d="M433.701 96.5176C432.928 100.006 431.376 102.94 429.046 105.319C426.717 107.698 423.889 109.366 420.563 110.322C417.249 111.226 413.743 111.269 410.046 110.45C406.297 109.619 403.112 108.093 400.49 105.874C397.88 103.602 396.015 100.922 394.897 97.8331C393.79 94.6926 393.629 91.3519 394.414 87.8112C395.014 85.1035 396.097 82.8034 397.664 80.9109C399.242 78.9663 401.165 77.5624 403.432 76.6991C405.659 75.7722 408.007 75.5279 410.477 75.9661L423.912 78.9433C426.336 79.5897 428.393 80.7831 430.083 82.5234C431.773 84.2636 432.949 86.3541 433.61 88.7949C434.271 91.2357 434.301 93.81 433.701 96.5176ZM424.631 92.7049C425.058 90.7783 425.011 89.0198 424.489 87.4292C423.927 85.7751 422.978 84.3902 421.641 83.2745C420.263 82.0952 418.559 81.2805 416.528 80.8305C414.55 80.392 412.713 80.422 411.018 80.9205C409.283 81.3554 407.837 82.2095 406.681 83.4828C405.484 84.6925 404.678 86.2346 404.263 88.1091C403.836 90.0357 403.904 91.8261 404.466 93.4802C405.039 95.0823 405.989 96.4672 407.314 97.635C408.651 98.7507 410.309 99.5278 412.288 99.9662C414.318 100.416 416.201 100.424 417.936 99.989C419.631 99.4905 421.083 98.6104 422.291 97.3486C423.447 96.0753 424.227 94.5274 424.631 92.7049ZM437.559 75.4124L435.309 85.566L425.155 83.3159L416.302 79.6332L406.861 79.3436L378.821 73.1297L381.089 62.8979L437.559 75.4124Z" fill="black"/>
			<path d="M416.646 145.24C415.146 148.425 412.998 150.921 410.202 152.729C407.406 154.537 404.292 155.517 400.86 155.67C397.428 155.822 393.999 155.092 390.573 153.479C387.098 151.844 384.327 149.655 382.258 146.912C380.189 144.17 378.96 141.145 378.572 137.838C378.184 134.531 378.739 131.285 380.238 128.1C381.42 125.591 382.983 123.586 384.927 122.085C386.872 120.583 389.034 119.685 391.413 119.39C393.766 119.024 396.099 119.327 398.413 120.298L411.007 126.227C413.278 127.414 415.022 129.031 416.239 131.078C417.479 133.077 418.164 135.315 418.295 137.793C418.377 140.249 417.827 142.731 416.646 145.24ZM408.705 139.38C409.955 136.726 410.097 134.17 409.132 131.711C408.119 129.23 406.214 127.331 403.415 126.013C401.581 125.15 399.783 124.775 398.02 124.888C396.232 124.931 394.634 125.446 393.226 126.433C391.792 127.35 390.655 128.701 389.814 130.486C388.996 132.223 388.68 133.961 388.864 135.698C389.023 137.364 389.644 138.924 390.728 140.378C391.787 141.76 393.233 142.883 395.066 143.746C396.948 144.632 398.783 145.054 400.572 145.012C402.335 144.899 403.933 144.384 405.367 143.467C406.775 142.479 407.888 141.117 408.705 139.38ZM420.692 134.766L411.283 130.336L403.458 124.796L394.346 122.363L385.733 118.308L390.163 108.898L425.122 125.357L420.692 134.766Z" fill="black"/>
			<path d="M393.245 184.036C390.771 187.246 387.898 189.577 384.625 191.028C381.31 192.446 377.879 192.966 374.332 192.589C370.817 192.17 367.518 190.772 364.434 188.396C361.392 186.052 359.226 183.271 357.934 180.054C356.633 176.762 356.229 173.354 356.723 169.83C357.175 166.272 358.557 162.994 360.868 159.995C363.147 157.038 365.825 154.96 368.902 153.763C371.97 152.491 375.154 152.117 378.454 152.64C381.744 153.088 384.847 154.435 387.762 156.682C388.311 157.105 388.849 157.587 389.375 158.127C389.892 158.592 390.444 159.186 391.032 159.909L371.27 185.685L365.06 180.899L381.843 158.989L381.853 164.349C379.972 163.034 378.19 162.2 376.509 161.847C374.861 161.452 373.297 161.56 371.817 162.17C370.327 162.705 368.98 163.754 367.775 165.317C366.506 166.965 365.779 168.694 365.595 170.505C365.369 172.284 365.672 174.032 366.503 175.75C367.324 177.393 368.643 178.914 370.46 180.314C372.319 181.746 374.205 182.662 376.12 183.06C378.026 183.384 379.863 183.183 381.633 182.46C383.36 181.704 384.891 180.46 386.226 178.728C387.43 177.164 388.267 175.554 388.737 173.896C389.165 172.205 389.208 170.488 388.868 168.745L397.508 167.626C398.1 170.439 398.01 173.265 397.237 176.103C396.496 178.899 395.166 181.543 393.245 184.036Z" fill="black"/>
			<path d="M355.663 222.933L329.897 194.137L337.707 187.149L363.473 215.945L355.663 222.933ZM349.23 200.027L344.376 200.72C341.568 196.863 340.112 193.156 340.008 189.6C339.867 186.004 341.407 182.765 344.626 179.885C346.017 178.64 347.483 177.758 349.022 177.239C350.526 176.681 352.198 176.509 354.037 176.725L354.162 186.703C353.298 186.617 352.442 186.74 351.592 187.07C350.783 187.365 349.981 187.868 349.186 188.58C347.516 190.073 346.625 191.837 346.512 193.87C346.404 195.828 347.31 197.88 349.23 200.027Z" fill="black"/>
			<path d="M338.275 235.897L305.462 188.265L314.092 182.32L346.906 229.951L338.275 235.897Z" fill="black"/>
			<path d="M308.382 251.909C305.187 253.386 301.938 253.919 298.633 253.507C295.329 253.095 292.313 251.846 289.585 249.757C286.857 247.669 284.699 244.906 283.11 241.469C281.499 237.984 280.782 234.525 280.959 231.094C281.136 227.664 282.138 224.557 283.965 221.773C285.793 218.989 288.304 216.859 291.499 215.382C294.017 214.219 296.503 213.687 298.958 213.786C301.412 213.885 303.646 214.586 305.658 215.888C307.696 217.12 309.29 218.851 310.438 221.082L316.279 233.718C317.256 236.086 317.553 238.446 317.171 240.796C316.837 243.125 315.924 245.28 314.431 247.263C312.916 249.197 310.9 250.746 308.382 251.909ZM306.064 242.317C308.727 241.086 310.478 239.219 311.319 236.715C312.137 234.163 311.897 231.483 310.599 228.675C309.749 226.836 308.612 225.393 307.188 224.347C305.791 223.23 304.235 222.598 302.522 222.45C300.834 222.231 299.095 222.536 297.303 223.364C295.561 224.169 294.202 225.297 293.226 226.746C292.277 228.125 291.751 229.72 291.648 231.53C291.571 233.27 291.957 235.059 292.807 236.899C293.68 238.787 294.815 240.289 296.213 241.406C297.636 242.452 299.192 243.084 300.879 243.303C302.593 243.451 304.321 243.122 306.064 242.317ZM318.213 246.484L313.85 237.044L311.414 227.77L305.996 220.051L302.001 211.409L311.442 207.046L327.654 242.12L318.213 246.484Z" fill="black"/>
			<path d="M242.723 269.481C239.17 269.862 235.894 269.327 232.896 267.878C229.898 266.429 227.416 264.282 225.448 261.435C223.533 258.583 222.374 255.274 221.971 251.509C221.562 247.691 221.991 244.185 223.258 240.992C224.578 237.793 226.524 235.171 229.094 233.126C231.717 231.075 234.831 229.856 238.437 229.47C241.195 229.174 243.721 229.467 246.014 230.348C248.361 231.223 250.305 232.597 251.846 234.47C253.435 236.285 254.416 238.432 254.789 240.913L256.255 254.595C256.416 257.099 255.941 259.429 254.831 261.587C253.721 263.744 252.115 265.525 250.013 266.93C247.91 268.335 245.481 269.186 242.723 269.481ZM243.442 259.669C245.404 259.458 247.056 258.852 248.397 257.851C249.785 256.79 250.794 255.448 251.425 253.825C252.103 252.143 252.332 250.268 252.11 248.2C251.894 246.185 251.28 244.454 250.266 243.007C249.301 241.501 248.03 240.404 246.454 239.714C244.926 238.966 243.207 238.694 241.298 238.899C239.336 239.109 237.661 239.744 236.272 240.805C234.937 241.86 233.928 243.202 233.244 244.83C232.613 246.453 232.406 248.272 232.621 250.288C232.843 252.356 233.437 254.143 234.403 255.648C235.416 257.095 236.713 258.19 238.294 258.933C239.87 259.622 241.586 259.867 243.442 259.669ZM263.956 266.402L253.615 267.51L252.507 257.169L253.173 247.604L250.434 238.564L247.376 210.007L257.796 208.891L263.956 266.402Z" fill="black"/>
			<path d="M196.701 269.205C192.683 268.674 189.226 267.356 186.33 265.251C183.442 263.093 181.271 260.385 179.819 257.127C178.421 253.875 177.976 250.32 178.487 246.46C178.991 242.653 180.311 239.385 182.447 236.655C184.644 233.879 187.391 231.821 190.688 230.482C193.993 229.09 197.522 228.643 201.276 229.139C204.977 229.629 208.117 230.905 210.695 232.968C213.333 234.985 215.253 237.552 216.455 240.67C217.716 243.742 218.105 247.102 217.622 250.75C217.532 251.437 217.384 252.144 217.181 252.87C217.037 253.551 216.8 254.326 216.469 255.197L184.259 251.016L185.288 243.244L212.66 246.785L208.026 249.48C208.221 247.193 208.05 245.233 207.513 243.602C207.028 241.978 206.151 240.678 204.881 239.703C203.671 238.683 202.088 238.043 200.132 237.784C198.07 237.511 196.209 237.749 194.55 238.498C192.898 239.194 191.537 240.332 190.467 241.912C189.457 243.446 188.802 245.35 188.501 247.623C188.193 249.95 188.347 252.041 188.962 253.898C189.637 255.709 190.731 257.199 192.244 258.367C193.764 259.483 195.608 260.184 197.776 260.471C199.732 260.73 201.545 260.647 203.216 260.222C204.893 259.745 206.4 258.922 207.738 257.754L213.037 264.669C210.9 266.592 208.41 267.93 205.566 268.684C202.776 269.444 199.821 269.618 196.701 269.205Z" fill="black"/>
			<path d="M127.998 247.513L148.817 196.909L158.509 200.896L137.69 251.501L127.998 247.513ZM130.839 216.848L134.339 208.34L182.872 228.307L179.372 236.815L130.839 216.848ZM150.119 256.614L170.938 206.009L180.63 209.997L159.811 260.602L150.119 256.614Z" fill="black"/>
			<path d="M102.355 233.628L123.561 201.326L132.389 207.122L111.183 239.423L102.355 233.628ZM131.399 199.008C129.973 198.071 129.099 196.827 128.777 195.276C128.485 193.681 128.807 192.17 129.743 190.743C130.651 189.361 131.895 188.487 133.475 188.121C135.055 187.755 136.558 188.04 137.985 188.976C139.456 189.942 140.316 191.208 140.564 192.775C140.856 194.37 140.548 195.859 139.641 197.241C138.704 198.668 137.446 199.564 135.866 199.93C134.36 200.281 132.871 199.974 131.399 199.008Z" fill="black"/>
			<path d="M50.0723 181.901L77.8821 155.075L85.158 162.617L57.3482 189.444L50.0723 181.901ZM67.5678 200.038L83.9774 184.209C85.5895 182.654 86.3372 180.932 86.2203 179.044C86.1788 177.157 85.436 175.465 83.9919 173.968C83.0292 172.97 81.9479 172.272 80.7481 171.873C79.5867 171.437 78.4 171.36 77.1879 171.639C75.9759 171.919 74.8325 172.578 73.7577 173.615L72.3645 169.29C74.5141 167.216 76.8201 165.881 79.2825 165.284C81.782 164.725 84.2316 164.845 86.6312 165.642C89.0692 166.403 91.2694 167.8 93.2319 169.835C95.0833 171.754 96.3266 173.926 96.9619 176.352C97.6356 178.74 97.6298 181.154 96.9447 183.593C96.298 185.996 94.8807 188.252 92.6927 190.363L74.8438 207.581L67.5678 200.038ZM85.0634 218.175L101.473 202.346C103.085 200.79 103.833 199.069 103.716 197.181C103.674 195.294 102.932 193.602 101.487 192.105C100.562 191.146 99.4805 190.447 98.2437 190.01C97.0823 189.574 95.8955 189.496 94.6835 189.776C93.4715 190.056 92.3281 190.715 91.2533 191.751L88.1241 186.433C90.4985 184.439 92.9917 183.183 95.6036 182.664C98.2539 182.108 100.835 182.249 103.347 183.086C105.898 183.887 108.173 185.323 110.172 187.396C112.172 189.469 113.526 191.756 114.235 194.258C114.983 196.724 115.014 199.213 114.327 201.728C113.641 204.243 112.184 206.574 109.958 208.722L92.3394 225.718L85.0634 218.175Z" fill="black"/>
			<path d="M32.5356 155.406C31.2484 152.95 30.6046 150.457 30.6042 147.929C30.6038 145.4 31.1917 143.075 32.368 140.953C33.5443 138.831 35.2178 137.142 37.3886 135.884L49.5767 129.497C51.8465 128.428 54.1648 128.026 56.5315 128.291C58.9703 128.579 61.2055 129.455 63.2373 130.919C65.269 132.383 66.9161 134.32 68.1786 136.729C69.8371 139.894 70.5429 143.137 70.296 146.458C70.049 149.778 68.9505 152.853 67.0004 155.681C65.0751 158.557 62.4118 160.885 59.0105 162.668C55.6564 164.425 52.2493 165.277 48.7892 165.224C45.3539 165.218 42.2008 164.371 39.3298 162.684C36.4589 160.998 34.1942 158.572 32.5356 155.406ZM23.293 136.044L74.5253 109.198L79.3895 118.481L53.9505 131.811L44.9138 134.56L37.332 140.429L28.1201 145.256L23.293 136.044ZM40.2929 149.355C41.1841 151.055 42.3417 152.345 43.766 153.225C45.2622 154.127 46.8809 154.573 48.6222 154.564C50.4355 154.577 52.2633 154.101 54.1057 153.135C55.9008 152.195 57.2854 150.987 58.2593 149.514C59.3052 148.062 59.8595 146.477 59.9222 144.759C60.0322 143.015 59.6416 141.293 58.7504 139.592C57.8592 137.892 56.6656 136.59 55.1694 135.688C53.7451 134.809 52.1264 134.363 50.3131 134.35C48.5718 134.359 46.8036 134.834 45.0085 135.774C43.1661 136.74 41.7219 137.948 40.676 139.399C39.7021 140.873 39.1602 142.482 39.0502 144.225C38.9875 145.944 39.4017 147.654 40.2929 149.355Z" fill="black"/>
			<path d="M12.9582 107.888C12.0414 104.6 11.9184 101.479 12.5893 98.5233C13.2744 95.6192 14.6494 93.1041 16.7143 90.9781C18.7791 88.852 21.4298 87.3378 24.6664 86.4353L46.2433 80.4189L49.0796 90.5909L27.7338 96.5428C26.1926 96.9726 24.9285 97.6019 23.9416 98.4308C23.006 99.2453 22.3989 100.245 22.1202 101.43C21.8416 102.615 21.8957 103.901 22.2825 105.288C22.8698 107.395 23.9703 108.86 25.5842 109.683C27.198 110.507 29.1608 110.596 31.4726 109.951L52.8183 103.999L55.6331 114.094L34.0562 120.111C30.7683 121.028 27.6908 121.11 24.8238 120.36C21.9711 119.66 19.4931 118.219 17.3898 116.037C15.3521 113.893 13.8749 111.176 12.9582 107.888Z" fill="black"/>
			<path d="M4.79515 60.0256C4.48391 55.503 4.98812 51.5657 6.30778 48.2139C7.6311 44.9152 9.74607 41.8562 12.6527 39.0366L20.33 45.7253C18.262 47.5249 16.6912 49.5575 15.6175 51.8232C14.5971 54.0853 14.1949 56.786 14.4109 59.9252C14.605 62.7452 15.3175 64.9415 16.5483 66.514C17.7829 68.1397 19.3845 68.8849 21.3532 68.7494C23.0558 68.6322 24.4062 68.0582 25.4045 67.0272C26.4027 65.9962 27.2194 64.657 27.8544 63.0095C28.4931 61.4152 29.0392 59.6402 29.4927 57.6845C30.003 55.7783 30.5913 53.84 31.2576 51.8696C31.9276 49.9524 32.7929 48.1554 33.8536 46.4786C34.9712 44.8514 36.4282 43.4948 38.2246 42.4089C40.0741 41.3194 42.4355 40.6757 45.3087 40.478C48.714 40.2437 51.6705 40.8688 54.1784 42.3535C56.6862 43.8381 58.6775 45.9731 60.1522 48.7585C61.6269 51.5438 62.4888 54.7455 62.7378 58.3636C63.0014 62.1946 62.5211 65.7025 61.2969 68.8874C60.0727 72.0723 58.3843 74.7278 56.2319 76.8539L48.5545 70.1652C50.2501 68.3913 51.4631 66.5971 52.1936 64.7827C52.9277 63.0215 53.2197 61.0501 53.0696 58.8686C52.8975 56.3678 52.2832 54.4321 51.2266 53.0614C50.17 51.6907 48.7372 51.0676 46.9281 51.1921C45.3851 51.2983 44.1677 51.8632 43.2758 52.8869C42.384 53.9105 41.6453 55.2176 41.0598 56.8083C40.478 58.4521 39.9319 60.2271 39.4216 62.1333C38.9149 64.0927 38.3266 66.031 37.6566 67.9482C36.9903 69.9186 36.0718 71.7192 34.901 73.3501C33.7339 75.0342 32.1723 76.4247 30.2163 77.5216C28.3136 78.6148 25.899 79.2621 22.9726 79.4635C17.7582 79.8223 13.5349 78.2686 10.3026 74.8024C7.07038 71.3361 5.23454 66.4105 4.79515 60.0256Z" fill="black"/>
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

const usePostApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const callApi = useCallback(async (data) => {
	setLoading(true);
	setError(null);
	try {
		const response = await fetch(`${ApiPath()}/customers`, {
			method: "POST", mode: "cors", cache: "no-cache",
			headers: { "Content-Type": "application/json"},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});
	  return response.json();
	} catch (err) {
	  setError(err.message);
	  throw err;
	} finally {
	  setLoading(false);
	}
	}, []);

	return { callApi, loading, error };
}
