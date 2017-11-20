import React, { Component } from 'react';

class CareerForm extends React.Component {
    /*
        Child of Career.js
        - Update Parent from this component by setting this to context and passing to the parent
    */
    render() {
        var updateJobListing = this.props.updateJobListing;
        const JOBS = this.props.job;
        JOBS.push({
            id: 9999,
            dept: 'Van Dept',
            title: 'CTO',
            location: 'THINC'
        });
        console.log(JOBS);
        return(
            <div>
                <button onClick={() => updateJobListing(JOBS)}>ADD NEW JOB HERE BEST JOB</button>
            </div>
        );
    }
}
export default CareerForm