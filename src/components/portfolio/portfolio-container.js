import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
      filteredData: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    const portItems = this.state.data
    let filtered = portItems
    if (filter) {
      filtered = portItems.filter(item => {
        return item.category === filter
      })
    }
    this.setState({
      filteredData: filtered
    });
  }

  getPortfolioItems() {
    axios
      .get("https://jesse.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items,
          filteredData: response.data.portfolio_items
        })

      })
      .catch(error => {
        console.log(error);
      })
  }

  portfolioItems() {
    return this.state.filteredData.map(item => {
      return <PortfolioItem
        key={item.id}
        item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {

    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }


    return (
      <div className="portfolio-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("")}>Show All</button>
        <button className="btn" onClick={() => this.handleFilter("Retail")}>
          Retail
        </button>
        <button className="btn" onClick={() => this.handleFilter("Healthcare")}>
          Healthcare
        </button>
        <button className="btn" onClick={() => this.handleFilter("education")}>
          Education
        </button>
        <button className="btn" onClick={() => this.handleFilter("projects")}>
          Projects
        </button>


        {this.portfolioItems()}
      </div>

    );
  }
}