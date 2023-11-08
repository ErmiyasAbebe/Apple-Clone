import React, { Component } from "react";
import flag from "../../commonResource/images/icons/16.png";
import FooterLink from "./FooterLink";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the{" "}
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are{" "}
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                {" "}
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <FooterLink
                linkTitle="Shop and Learn"
                linkName={[
                  "Mac",
                  "iPad",
                  "iPhone",
                  "Watch",
                  "TV",
                  "Music",
                  "AirPods",
                  "HomePod",
                  "iPod touch",
                  "Accessories",
                  "Gift Cards",
                ]}
              />
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <FooterLink
                linkTitle="Services"
                linkName={[
                  "Apple Music",
                  "Apple News+",
                  "Apple TV+",
                  "Apple Arcade",
                  "Apple Card",
                  "iCloud",
                ]}
              ></FooterLink>
              <FooterLink
                linkTitle="Account"
                linkName={[
                  "Manage Your Apple ID",
                  "Apple Store Account",
                  "iCloud.com",
                ]}
              ></FooterLink>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <FooterLink
                linkTitle="Apple Store"
                linkName={[
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Camp",
                  "Field Trip",
                  "Apple Store App",
                  "Refurbished and Clearance",
                  "Financing",
                  "Apple Trade In",
                  "Order Status",
                  "Shopping Help",
                ]}
              ></FooterLink>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <FooterLink
                linkTitle="For Business"
                linkName={["Apple and Business", "Shop for Business"]}
              ></FooterLink>
              <FooterLink
                linkTitle="For Education"
                linkName={["Apple and Education", "Shop for College"]}
              ></FooterLink>
              <FooterLink
                linkTitle="For Healthcare"
                linkName={[
                  "Manage Your Apple ID",
                  "Apple Store Account",
                  "iCloud.com",
                ]}
              ></FooterLink>
              <FooterLink
                linkTitle="For Government"
                linkName={["Apple and Education", "Shop for College"]}
              ></FooterLink>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <FooterLink
                linkTitle="Apple Values"
                linkName={[
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Camp",
                  "Field Trip",
                  "Apple Store App",
                ]}
              ></FooterLink>
              <FooterLink
                linkTitle="About Apple"
                linkName={[
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Camp",
                  "Field Trip",
                  "Apple Store App",
                ]}
              ></FooterLink>
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="/">Find an Apple Store</a> or{" "}
            <a href="/">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <FooterLink
                linkTitle=""
                linkName={[
                  "Privacy Policy",
                  "   ",
                  "Terms of Use",
                  "Sales and Refunds",
                  "Legal",
                  "Site Map",
                ]}
              ></FooterLink>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={flag} alt="" />
              </div>{" "}
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
