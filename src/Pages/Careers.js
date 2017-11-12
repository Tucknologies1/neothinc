import React, { Component } from 'react';
import {List, Tab, Label} from 'semantic-ui-react'

const panes = [
    {
        menuItem: 'Job Openings',
        pane: {
            key: 'jobs',
            content: 'Current Job Openings'
        }
    },
    {
        menuItem: 'Internships',
        pane: {
            key: 'Internships Opportunities',
            content: 'Internship Program'
        }
    }
];

class Careers extends React.Component {
    render() {
        return(
            <div>
                <Tab panes={panes} renderActiveOnly={false}/>
            </div>
        );
    }
}

export default Careers;
