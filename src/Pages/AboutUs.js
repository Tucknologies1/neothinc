import React, { Component } from "react";
import CardBio from './Components/Card';
<<<<<<< HEAD

import banner from '../Assets/images/img-slide.jpg';
=======
import SubHeader from './Components/SubHeader.js';
>>>>>>> refs/remotes/origin/master

class AboutUs extends React.Component {
    render() {
        return (
		<div>
      <SubHeader/>
            <div className="yellowHeader">
                <h1>ABOUT US</h1>
            </div>
<<<<<<< HEAD
			{/* Where the page banner goes */}
			<div className="headerBanner">
				<div>
				</div>
			</div>
			{/* =========================== */}
=======

>>>>>>> refs/remotes/origin/master
			<div className="aboutUsBio">
				<div className="aboutUsTitle">
					<h1>THiNC.TEAM</h1>
					<hr className="line"/>
				</div>
				<div className="cardBios">
					<CardBio />
					<CardBio />
					<CardBio />
					<CardBio />
					<CardBio />
				</div>
			</div>

			{/* <div>
				<div>
					<h2>THiNC.history</h2>
				</div>
				<div>
					2014 - Tucknologies LLC Founded
					2015 - Tucknologies Holdings Inc. S-Corp
				</div>
			</div> */}
		</div>
        );
    }
}

export default AboutUs
