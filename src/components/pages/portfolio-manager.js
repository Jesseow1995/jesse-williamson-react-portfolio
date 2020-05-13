import React, { Component } from 'react';
import axios from "axios";
import PortfolioSidebarList from "../portfolio/porfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
       this.setState({
           portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
       })
    }

    handleFormSubmissionError(Error) {
        console.log("handleFOrmSubmissionError", error)
    }

    getPortfolioItems() {
        axios
            .get("https://jesse.devcamp.space/portfolio/portfolio_items", {
                withCredentials: true
            }).then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                });
            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>

            </div>
        )
    }
}