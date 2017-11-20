import React, { Component } from 'react';
import {List, Tab, Label} from 'semantic-ui-react';
import JobsComponent from './Components/JobsComponent';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
import CareerForm from './CareerForm';
// NOTE: Added shared data to live in parent component so other child component can pull from it
const JOBS = [
    {
        id: 1,
        dept: 'Engineering',
        title: 'Product Manager',
        location: 'East Lansing, MI'
    },
    {
        id: 2,
        dept: 'Engineering',
        title: 'Software Engineer - Mobile',
        location: 'East Lansing, MI'
    },
    {
        id: 3,
        dept: 'Engineering',
        title: 'Software Engineer - Web',
        location: 'East Lansing, MI'
    },
    {
        id: 4,
        dept: 'Engineering',
        title: 'Software Engineer - Full Stack',
        location: 'East Lansing, MI'
    },
    {
        id: 5,
        dept: 'Sales',
        title: 'Sales Representative',
        location: 'East Lansing, MI'
    },
    {
        id: 6,
        dept: 'Accounting',
        title: 'Accountant',
        location: 'East Lansing, MI'
    },
];

class Careers extends React.Component {
    constructor(props) {
        super(props);
        var updateJobListing = this.updateJobListing.bind(this);
        this.state = {
            jobs: JOBS
        }
    }

    // Function for the child to use to update the state of the job listing
    updateJobListing(job) {
        this.setState({jobs: job});
    }

    render() {
        var updateJobListing = this.updateJobListing;
        const panes = [
            {
                menuItem: 'Job Openings',
                pane: {
                    key: 'jobs',
                    content: <Tab.Pane attached={false}><JobsComponent job = {this.state.jobs}/></Tab.Pane>
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
        return(
            <div>
              <SubHeader/>
                <Tab panes={panes} menu={{secondary: true, pointing: true}} renderActiveOnly={false}/>
                <CareerForm job = {this.state.jobs} updateJobListing = {updateJobListing.bind(this)}/>
                <Footer/>
            </div>
        );
    }
}

export default Careers;
