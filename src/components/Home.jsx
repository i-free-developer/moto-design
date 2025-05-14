import { useState, useEffect } from 'react'
import Loading from './Loading'
import Landing from './Landing'

export default function Home({showDrawer}) {
	const [loadingPercentage, setLoadingPercentage] = useState(0);
  	const isLoading = loadingPercentage < 100;

  	useEffect(() => {
  		const intervalCount = randomInt(40, 60)    
	    const intervalElement = setInterval(() => {
        	setLoadingPercentage((prev) => prev + 1);
      	}, intervalCount);	

	    return () => clearInterval(intervalElement);
	  }, []);

	return (
		<>
			{isLoading ? <Loading loadingPercentage={loadingPercentage}/> : <Landing showDrawer={showDrawer}/>}
		</>
	)
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}