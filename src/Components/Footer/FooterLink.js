import React, { Component } from "react";

class FooterLink extends Component {
  render() {
    let { linkTitle, linkName } = this.props;
    return (
      <div>
        <h3 className="toggle">{linkTitle}</h3>
        <ul>
          {linkName.map((item, index) => (
            <li key={index}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FooterLink;
