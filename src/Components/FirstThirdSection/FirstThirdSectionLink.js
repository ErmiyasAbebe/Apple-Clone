import React, { Component } from "react";

                <a href="">Learn more</a>
class FirstThirdSectionLink extends Component {
  render() {
    return (
      <section className={`${this.props.backgroundImg} container`}>
        <div className="new-alert">{this.props.product}</div>

        <div className="title-wraper bold black">{this.prps.title}</div>
        <div className="description-wrapper black">
          {this.props.description}
        </div>

        <div className="price-wrapper grey">{this.props.price}</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href={this.props.linkUrl}>{this.props.linkName}</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default FirstThirdSectionLink;
