import React, { Component } from 'react';
import {List, Tab, Label, Modal, Button} from 'semantic-ui-react';
import JobsComponent from './Components/JobsComponent';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
import CareerForm from './CareerForm';
import Particlez from './Components/Particlez';

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
const INTERNS = [
    {
        id: 10,
        dept: 'Engineering',
        title: 'Software Engineer Internship',
        location: 'East Lansing, MI'
    },
    {
        id: 11,
        dept: 'Sales',
        title: 'Sales Internship',
        location: 'East Lansing, MI'
    }
];
class Careers extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                jobs: JOBS,
                activeIndex: 0
            }
            var updateJobListing = this.updateJobListing.bind(this);
        }
    // Function for the child to use to update the state of the job listing
    updateJobListing(job) {
        this.setState({jobs: job});
    }

    handleTabChange = (e, { activeIndex }) =>
    {
        this.setState({
            jobs: INTERNS,
            activeIndex: activeIndex
        });
    };

    render() {
        // Make update job listing availble for child CareerForm Component
        var updateJobListing = this.updateJobListing;
        // Current Active Tab
        const activeTab = {
            idx: this.state.activeIndex
        };
        const panes = [
                {
                    menuItem: 'Job Openings',
                    render  : () => <Tab.Pane attached={false}><JobsComponent jobList = {this.state.jobs} activeIndex={this.state.activeIndex} /></Tab.Pane>
                },
                {
                    menuItem: 'Internships',
                    render  : () => <Tab.Pane attached={false}><JobsComponent jobList = {this.state.jobs} activeIndex={this.state.activeIndex} /></Tab.Pane>
                }
        ];
        //console.log(this.state);
        return(

            <div>
              {/* <SubHeader/> */}
                <div className="headerBanner">
                    <Particlez />
                    <div>
                        <h1 id="bannerFont">CAREERS</h1>
                    </div>
                </div>
                <Tab panes={panes} menu={{secondary: true, pointing: true}} renderActiveOnly={true}  onTabChange={this.handleTabChange} idx={activeTab} />
                    <Modal trigger={<Button>Add Job</Button>}>
                            <CareerForm job = {this.state.jobs} updateJobListing = {updateJobListing.bind(this)}/>
                    </Modal>
                <Footer/>
            </div>
        );
    }
}
export default Careers