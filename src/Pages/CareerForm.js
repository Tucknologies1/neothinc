import React, { Component } from 'react';
import { Modal, Form} from 'semantic-ui-react';
class CareerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            jobTitle: ' ',
            jobDesc: ' ',
            jobLocation: ' ',
            JOBS: this.props.job
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    /*
        Child of Career.js
        - Update Parent from this component by setting this to context and passing to the parent
    */
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    // Update the state of the input values on every change
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    // Update the state of the main JOBS to get passed to parent
    handleSubmit(event) {
        const newJob = {
            id: this.state.id,
            dept: this.state.jobDesc,
            title: this.state.jobTitle,
            location: this.state.jobLocation
        };
        const NEW_JOBS = this.state.JOBS;
        NEW_JOBS.push(newJob);
        this.setState({
            JOBS: NEW_JOBS
        })
        event.preventDefault();
    }
    render() {
        // Get function from parent
        var updateJobListing = this.props.updateJobListing;
        const JOBS = this.state.JOBS;
        return(
            <div className="modalContainer">
                <Modal.Content>
                    <h1>Add Job</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Job Title</label>
                            <input
                            name="jobTitle"
                            value={this.state.jobTitle}
                            onChange={this.handleChange}
                            placeholder="Job Title"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Job Description</label>
                            <input
                            name="jobDesc"
                            value={this.state.jobDesc}
                            onChange={this.handleChange}
                            placeholder="Department"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Job Location</label>
                            <input
                            name="jobLocation"
                            value={this.state.jobLocation}
                            onChange={this.handleChange}
                            placeholder="Location"/>
                        </Form.Field>
                        <input type="submit" value="Submit" />
                    </Form>
                    {/* NOTE: REFACTOR THIS ADD JOB TO MODAL ON CLOSE */}
                    <button onClick={() => updateJobListing(JOBS)}>Add Job</button>
                </Modal.Content>
            </div>
        );
    }
}
export default CareerForm