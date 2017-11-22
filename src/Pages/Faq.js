import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import QuestionAndAnswer from './Components/QuestionAndAnswer';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
// TODO: Decide to keep on client side or server side
const QUESTION_AND_ANSWERS = [
    {
        question: "How much will it cost?",
        answer: "Cost is a function of time. Time is a function of work. Work is a function of scope, and scope comes from you."
    },
    {
        question: "How long will it take?",
        answer: "How long it takes is related to the question about how much it will cost. The time is dependent on work and work is dependent on scope. You're responsible for the scope, but we'll help you define what that is."
    },
    {
        question: "Is Financing available?",
        answer: "Financing is indeed available and we offer a variety of options to pay. We have partnered with J.P. Morgan Chase Bank that offers financing for approved customers. This is your best option. We also offer installment payments, or can set up a monthly payment but those do come with additional interest. Contact your representative for more details."
    },
    {
        question: "Do you support it?",
        answer: "THiNC.technology offers a limited warranty for 6 months, and you can read more details about the warranty in the Terms and Conditions of Proposal/Sale. We also offer support services on a monthly basis. This covers most problems to be worked on between the hours of M-F, 9a to 5p EDT. Additional support hours are available at an increased rate. More information is available from your THiNC representative."
    },
    {
        question: "Will my website be mobile responsive",
        answer: "All of the websites we've produced have been mobile responsive. People are using mobile devices of various sizes to access content on websites and through mobile applications. We develop all of our websites to be mobile responsive. We can even take a non-mobile responsive website and make it into a website that is."
    },
    {
        question: "How do you come up with your prices?",
        answer: "We base our rates off of the current rates for comparable development services in our area and comparable qualified developers. These rates are applied in an estimation tool that we've developed, that is currently 96.7% accurate in estimating the work to be developed. We apply supply of hours and demand for those hours as a component of any price we provide. In addition, we apply discounts for customers who qualify. We typically quote a price just under the mean labor/cost and rarely exceed it."
    },
    {
        question: "On which mobile platforms do you develop?",
        answer: "THiNC.mobile develops on iOS and Android systems. These account for approximately 97% of the market according to the latest surveys, and therefore we focus our development on core and enhanced mobile application development."
    },
    {
        question: "Do you include hosting?",
        answer: "We do include enhanced hosting powered by our partners at Liquid Web. Our hosting is large enough to handle most of the larger sites, and intimate enough to be monitored regularly. Hosting is not included with packages, as it is a monthly fee and must be added in addition to any financed schedule."
    },
    {
        question: "Do you include SEO",
        answer: "Yes, we do include initial Search Engine Opportunity setup standard with any of The Foundry products. We also offer exclusive SEO services as well. Inquire with your representative for rates, terms and special offers."
    },
    {
        question: "What If I want to make a change?",
        answer: "Changes are a part of life. We offer a set number of hours in revisions, and an inclusive build process so we limit revisions which gets you what you want faster and more efficiently. Those hours are dependent on the scope of work. If there are changes to the scope of work once contracted, we do have discounted rates for additional work. We're a business and we have a cost for every hour each of our people work, but we still accommodate the inevitable changes that are part of the process."
    },
    {
        question: "Can you develop my idea?",
        answer: "If you have an idea that is great...but not quite there...we can help you develop your idea. It may just need to be polished, and with our partners in the THiNC.tank we may be able to take your idea to an actual product."
    },
    {
        question: "How big is your team?",
        answer: "Our team size fluctuates depending on what we're working on. We typically keep 10 or more folks around, and we are growing"
    },
    {
        question: "Where are you located?",
        answer: "HQ is in East Lansing, MI USA. We're about an hour from Metro Detroit, which includes Ann Arbor, Southfield, Dearborn, and Troy. Our office is also about one hour away from Grand Rapids, Kalamazoo, Kentwood, and Battle Creek."
    },
    {
        question: "Do you offer reduced cost in exchange for equity?",
        answer: " In some cases, we will entertain the possibility of lowering costs of production in exchange for equity or revenue share. This is at our discretion, and depends on a thorough vetting process and clearing legal approval. We have to cover the cost of doing business and we are in business to turn a profit, but we do see the value in great ideas."
    },
    {
        question: "Do you give back to the community?",
        answer: "THiNC.technology does give back to the community, and we're proud of our efforts. We're a veteran owned company, and we've been providing jobs for local developers and teaching local college students skills to help them succeed. We donate services and products for those in need, including whole websites, with hosting and support."
    },
    {
        question: "What is your process?",
        answer: " Our process varies depending on the task, but we develop our software using Agile Development principles. We use reputable and popular project management software, and have defined procedures and protocols in effect. We typically start a project with a Creative Audit, which helps to define the creative content and the responsibilities for the content. This results in a Creative Brief. Then, it moves to developing the model and the Information Architecture (IA). Then we start development, and test the entire way through. Before we launch, we have to test the software and use reputable and popular tools and methods for testing. Then, launch!"
    },
    {
        question: "Can you provide references?",
        answer: "Yes. References are available upon request."
    },
    {
        question: "Do you have a referral program?",
        answer: "THiNC.technology has a referral program that will provide a reward for a referral that results in successful business. We offer gift cards up to $500 for select work once contracted, and you can inquire with your representative about other generous incentives."
    },
    {
        question: "Can you help me take my site back?",
        answer: "Yes. In most cases, we can help take your site back from another rogue service or unresponsive developer. Some of our clients have had bad experiences with their previous developers or the company they hired to make their site. We help them get their site back, and protect their business' image and reputation."
    },
    {
        question: "Can you fix my current site or software?",
        answer: " We can fix many types of sites and software systems, and some of the most common errors. Style, alignment, error messages, broken plugins, hacks and exploits are some of the most common errors that clients bring to us. If there is something wrong with your website, software system, or mobile application, ask us and see if we can help. Chances are our engineers have an answer for you at least."
    },
];

class Faq extends React.Component {
    render() {
        return (
            <div>
                <SubHeader/>
               <div className="headerBanner">
                    <div>
                        <h1 id="bannerFont">Q&A</h1>
                    </div>
                </div>
                <div className="questionAndAnswerContainer">
                    {
                        QUESTION_AND_ANSWERS.map((qa) => {
                            return (
                                <QuestionAndAnswer question={qa.question} answer= {qa.answer}/>
                            )
                        })
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Faq
