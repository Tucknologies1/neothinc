import React, {Component} from "react";
import { Image } from "semantic-ui-react";

import comeWorship from  "../Assets/images/clients/comeWorship.png";
import daringIdeas from "../Assets/images/clients/daringIdeas.png";
import gibsons from "../Assets/images/clients/gibsonsUni.png";
import huntkey from "../Assets/images/clients/huntkey.png";
import itec from "../Assets/images/clients/itec.png";
import medawar from  "../Assets/images/clients/medawarJewelers.png";
import mmba from "../Assets/images/clients/mmba.png";
import msu from "../Assets/images/clients/msu.svg";
import rossWoodstock from "../Assets/images/clients/rossWoodstock.png";
import schultz from "../Assets/images/clients/schultz.png";
import validu from "../Assets/images/clients/validu.jpg";
import wolverine from "../Assets/images/clients/wolverine.jpeg";
import wwLogo from "../Assets/images/clients/wwLogo.png";

class OurPartners extends React.Component {
    render() {
        return(
            <div>
                <div className="partnerContainer">
                    <div className="partnerCard ">
                    <Image src ={comeWorship} size="tiny" />
                    </div>
                    <div className="partnerCard">
                    <Image src={daringIdeas} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={gibsons} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={huntkey} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={itec} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={medawar} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={mmba} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={msu} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={rossWoodstock} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={schultz} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={validu} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={wolverine} size="tiny"/>
                    </div>
                    <div className="partnerCard ">
                    <Image src={wwLogo} size="tiny"/>
                    </div>
                </div>
                {/* <div className="partnerContainer">
                    <div className="partnerCard">
                    </div>
                    <div id="schultz" className="partnerCard">
                    </div>
                </div> */}
            </div>
        )
    }
}
export default OurPartners