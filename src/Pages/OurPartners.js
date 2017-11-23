import React, {Component} from "react";

class OurPartners extends React.Component {
    render() {
        return(
            <div>
                <div className="partnerContainer">
                    <div className="partnerCard hvr-underline-reveal ">
                        <a href="http://www.huntkey.com/en/">HUNTKEY</a>
                    </div>
                    <div className="partnerCard hvr-underline-reveal ">
                        <a href="https://validu.net/">VALIDU</a>
                    </div>
                    <div className="partnerCard hvr-underline-reveal ">
                        <a href="https://www.mmbaonline.org/aws/MMBA/pt/sp/home_page">MMBA</a>
                    </div>
                </div>
                <div className="partnerContainer">
                    <div className="partnerCard hvr-underline-reveal ">
                        <a href="Gibson's Bookstore">GIBSON'S</a>
                    </div>
                    <div id="schultz" className="partnerCard hvr-underline-reveal">
                        <a href="http://schultzvetclinic.com/">SCHULTZ VET</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default OurPartners