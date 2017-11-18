import React, { Component } from 'react';
import {List, Tab, Label} from 'semantic-ui-react';
import JobsComponent from './Components/JobsComponent';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
const panes = [
    {
        menuItem: 'Job Openings',
        pane: {
            key: 'jobs',
            content: <Tab.Pane attached={false}><JobsComponent /></Tab.Pane>
        }
    },
    {
        menuItem: 'Internships',
        pane: {
            key: 'Internships Opportunities',
            content: <Tab.Pane attached={false}>Internship Opportunities</Tab.Pane>
        }
    }
];

class Careers extends React.Component {
    render() {
        return(
            <div>
              <SubHeader/>
                <Tab panes={panes} menu={{secondary: true, pointing: true}} renderActiveOnly={false}/>
                <Footer/>
            </div>
        );
    }
}

export default Careers;
