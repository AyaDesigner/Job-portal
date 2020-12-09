import React, { Component } from 'react';
import JobsStatistic from './JobsStatistic';
import MyCalendar from './MyCalendar';
import './MyBoard.css';
import JobList from './JobList';

export default class MyBoard extends Component {
    render() {
        return (
            <div className="my-board-container">
                <JobList
                    jobsArray={this.props.savedJobsArray}
                    jobStatus={this.props.jobStatus}
                    toggleJobInSavedJobs={this.props.toggleJobInSavedJobs}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                />
                <JobsStatistic />
                <MyCalendar />
            </div>
        );
    }
}
