import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { PortfolioData } from '../data/site-data'
import Navbar from './Navbar'
import { useDrawerHandler, useApi } from './FunctionCollection'

export default function RolePage({smallScreenRatioDecimal}) {
	const {drawerStatus, handleClickDrawer, closeDrawer} = useDrawerHandler()
	const [imgItem, setImgItem] = useState({})
	const { id } = useParams();
	
	useEffect(() => {
		async function fetchData() {
			// console.log('fetchData Img')
			const data = await useApi(`${ApiPath()}/portfolios`)
			// console.log(data.data)
			if (data.data && data.data.desktop ) {
				const item = data.data.desktop.find(e => e.id == id)
				setImgItem(item)
			}
		}

		const item = PortfolioData.desktop.find(e => e.id == id)
		if (item) {
			// console.log('Img from Data')
			setImgItem(item)
		} else {
			fetchData()
		}		
	}, [id])

	return (
		<main className="mx-auto">
			<Navbar drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} smallScreenRatioDecimal={smallScreenRatioDecimal} frostedGlass={true}/>
			<section id="portfolio-page" className="mx-auto" onClick={closeDrawer}>
				<div className="w-screen max-w-screen lg:w-screen lg:max-w-[1920px] mx-auto px-[0.32rem] py-[0.48rem] overflow-x-hidden">
					<ImgCard {...imgItem}/>
				</div>
			</section>
		</main>
	)
}

function ImgCard({fullImage, title}) {
	return (
		<div className="">
      		<img loading="lazy" src={fullImage} alt={title} className="w-full h-full object-cover object-center"/>
		</div>
	)
}