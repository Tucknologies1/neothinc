import React, { Component } from "react";
import CardBio from './Components/Card';

import banner from '../Assets/images/img-slide.jpg';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
class AboutUs extends React.Component {
    render() {
        return (
		<div>
      <SubHeader/>
			{/* Where the page banner goes */}
			<div className="headerBanner">
				<div>
					<h1 id="bannerFont">ABOUT US</h1>
				</div>
			</div>
			{/* =========================== */}
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

                <Footer />
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
