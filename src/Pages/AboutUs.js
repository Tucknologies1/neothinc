import React, { Component } from "react";
import CardBio from './Components/Card';

import banner from '../Assets/images/img-slide.jpg';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
class AboutUs extends React.Component {
    render() {
        return (
		<div>
      {/* <SubHeader/> */}
			<div className="headerBanner">
				<div>
					<h1 id="bannerFont">ABOUT US</h1>
				</div>
			</div>
			<div className="aboutUsBio">
				<div className="aboutUsTitle">
					<h1>THiNC.TEAM</h1>
					<hr className="line"/>
				</div>
				<div className="cardBios">
					<CardBio name="Craig T." position="CEO" aboutYourself="I like Thinc"/>
					<CardBio name="Bryan N." position="CTO" aboutYourself="I'm from Wisconson"/>
					<CardBio name="Matt" position="Senior Web Developer" aboutYourself="I like Programming"/>
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
