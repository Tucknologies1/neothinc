import React, { Component } from "react";
import CardBio from './Components/Card';
import SubHeader from './Components/SubHeader.js';

class AboutUs extends React.Component {
    render() {
        return (
		<div>
      <SubHeader/>
            <div className="yellowHeader">
                <h1>ABOUT US</h1>
            </div>

			<div className="aboutUsBio">
				<div className="aboutUsTitle">
					<h1>ABOUT US</h1>
					<hr class="line"/>
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
