import { useState, useEffect } from 'react'
import Loading from './Loading'
import Landing from './Landing'

export default function Home({showDrawer}) {
	const [loadingPercentage, setLoadingPercentage] = useState(0);
  	const isLoading = loadingPercentage < 100;

  	useEffect(() => {	    
	    const intervalId = setInterval(() => {
        	setLoadingPercentage((prev) => prev + 1);
      	}, 10);	

	    return () => clearInterval(intervalId);
	  }, []);

	return (
		<>
			{isLoading ? <Loading loadingPercentage={loadingPercentage}/> : <Landing showDrawer={showDrawer}/>}
		</>
	)
}