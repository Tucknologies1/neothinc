import React, {Component} from 'react'
import {Button, Image, Item} from 'semantic-ui-react'


class JobsComponent extends Component {

    render() {
    const JOBS = this.props.job;
    const jobItems = JOBS.map((job) =>
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
        return (
            <Item.Group divided unstackable>
                {jobItems}
            </Item.Group>
        )
    }
}

export default JobsComponent;