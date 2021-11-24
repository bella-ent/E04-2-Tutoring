import React from 'react'
import NavBar from './NavBar';
import Email from './Email';


function MainEn() {

    return (
			<div className="main">
				<NavBar />
				<img
					className="background"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/b77751c7-0e02-4941-af39-30514ff6b3e2/951daf3b-d3a1-425e-94c9-98647137a755/DE-en-20211026-popsignuptwoweeks-perspective_alpha_website_small.jpg"
					alt="background"
				/>
				<div className="start">
					<div className="text-con">
						<h1>Unlimited movies, TV shows, and more.</h1>
						<h3>Watch anywhere. Cancel anytime.</h3>
						<Email />
					</div>
				</div>
			</div>
		);
}

export default MainEn
