import React, { Component } from 'react';
import {List, Tab, Label} from 'semantic-ui-react';
import JobsComponent from './Components/JobsComponent';
import SubHeader from './Components/SubHeader.js';

class Careers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    handleTabChange = (e, { activeIndex }) =>
    {
        this.setState({ activeIndex });
    };
    render() {
        const activeTab = {
            idx: this.state
        };
        const panes = [
            {
                menuItem: 'Job Openings',
                render: () => <Tab.Pane attached={false}><JobsComponent activeIndex={this.state.activeIndex} /></Tab.Pane>
            },
            {
                menuItem: 'Internships',
                render: () => <Tab.Pane attached={false}><JobsComponent activeIndex={this.state.activeIndex} /></Tab.Pane>
            }
        ];
        //console.log(this.state);
        return(
            <div>
              <SubHeader/>
                <Tab panes={panes} menu={{secondary: true, pointing: true}}
                     renderActiveOnly={true}
                     onTabChange={this.handleTabChange}
                     idx={activeTab}
                />
            </div>
        );
    }
}

export default Careers;
