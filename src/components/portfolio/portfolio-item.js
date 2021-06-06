import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: ""
    }
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, description, thumb_image_url, logo_url, name } = this.props.item;
    return (
      <Link to={`/portfolio/${id}`}>
        <div
          className="portfolio-item-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div
            className={`portfolio-background-img ${this.state.portfolioItemClass}`}
            style={{
              backgroundImage: "url(" + thumb_image_url + ")"
            }}
          />
          <div className="img-text-wrapper">
            <div className="logo-wrapper">
              <img src={logo_url}></img>
            </div>
            <div className="subtitle">{name}</div>
          </div>
        </div>
      </Link>
    );
  }
}