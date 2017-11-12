import React, {Component} from 'react'
import {Button, Image, Item} from 'semantic-ui-react'

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

class JobsComponent extends Component {
    jobItems = JOBS.map((job) =>
        <Item key={job.id}>
            <Item.Content verticalAlign='middle'>
                <Item.Header>{job.title}</Item.Header>
                <Item.Meta>{job.dept}</Item.Meta>
                <Item.Description>{job.location}</Item.Description>
                <Item.Extra>
                    <Button floated='right' color='blue'>
                        View Job Details
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
    render() {
        return (
            <Item.Group divided unstackable>
                {this.jobItems}
            </Item.Group>
        )
    }
}

export default JobsComponent;